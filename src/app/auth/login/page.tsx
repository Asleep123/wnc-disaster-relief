"use client"
import { Button } from "~/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "~/components/ui/card"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "~/components/ui/dialog"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "~/components/ui/form"

import { Loader2 } from "lucide-react"
import { Input } from "~/components/ui/input"

import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { loginWithEmail } from "~/actions/auth/login"
import { Separator } from "~/components/ui/separator"
import { createClient } from "~/lib/supabase/client"

const formSchema = z.object({
	email: z
		.string({
			required_error: "Required"
		})
		.email({
			message: "Must be a valid email"
		})
		.min(1, {
			message: "Required"
		})
		.max(50),
	password: z
		.string()
		.min(1, {
			message: "Required"
		})
		.max(50)
})

export default function Login({
	searchParams
}: { searchParams: { message: string | null } }) {
	const [loading, setLoading] = useState(false)
	const supabase = createClient()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: ""
		}
	})

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setLoading(true)
		await loginWithEmail(values.email, values.password)
		setLoading(false)
	}

	return (
		<Card className="fixed left-1/2 top-1/2 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-lg">
			<CardHeader>
				<CardTitle className="flex items-center justify-center gap-2 text-center text-3xl">
					DisasterRelief.forum
				</CardTitle>
				<CardDescription className="text-center">
					Log in to your account
				</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				{searchParams.message && (
					<p className="text-center text-sm text-destructive/90">
						{searchParams.message}
					</p>
				)}
				<Button
					variant="secondary"
					className="items-center gap-4"
					onClick={async () => {
						console.log(
							new URL(`/auth/callback`, location.origin).href
						)
						await supabase.auth.signInWithOAuth({
							provider: "google",
							options: {
								redirectTo: new URL(
									`/auth/callback`,
									location.origin
								).href
							}
						})
					}}
				>
					{/* biome-ignore lint: */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24"
						viewBox="0 0 24 24"
						width="24"
					>
						<path
							d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
							fill="#4285F4"
						/>
						<path
							d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
							fill="#34A853"
						/>
						<path
							d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
							fill="#FBBC05"
						/>
						<path
							d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
							fill="#EA4335"
						/>
						<path d="M1 1h22v22H1z" fill="none" />
					</svg>
					Sign in with Google
				</Button>
				<div className="flex justify-center">
					<Separator className="w-32" />
				</div>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-4"
					>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-foreground">
										Email
									</FormLabel>
									<FormControl>
										<Input
											placeholder="john@example.com"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-foreground">
										Password
									</FormLabel>
									<FormControl>
										<Input
											type="password"
											placeholder="••••••••"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							type="submit"
							className="w-full gap-2"
							disabled={loading}
						>
							{!loading ? (
								"Sign in"
							) : (
								<>
									<Loader2 className="h-5 w-5 animate-spin" />
									Signing in
								</>
							)}
						</Button>
						<p className="text-center text-sm">
							Don't have an account?{" "}
							<Link
								href="/auth/register"
								className="underline underline-offset-2"
							>
								Register here
							</Link>
						</p>

						<Dialog>
							<DialogTrigger asChild>
								<p className="cursor-pointer items-center text-center text-xs text-muted-foreground">
									Forgot your password?
								</p>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>Password reset</DialogTitle>
									<DialogDescription>
										Please contact your system administrator
										for them to reset your password through
										their Supabase dashboard.
									</DialogDescription>
								</DialogHeader>
							</DialogContent>
						</Dialog>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}
