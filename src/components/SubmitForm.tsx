import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { z } from "zod"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "~/components/ui/card"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "~/components/ui/select"
import { useToast } from "~/hooks/use-toast"
import { submitPostSchema } from "~/lib/schemas"

export default function SubmitForm() {
	const form = useForm<z.infer<typeof submitPostSchema>>({
		resolver: zodResolver(submitPostSchema)
	})

	const { toast } = useToast()

	async function onSubmit(values: z.infer<typeof submitPostSchema>) {
		toast({
			title: "Values Received",
			description: values.toString(),
			variant: "default"
		})
	}

	return (
		<main>
			<Card>
				<CardHeader>
					<CardTitle>Create Post</CardTitle>
					<CardDescription>
						Need help? Have some resources for others in need? Post
						them here.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="flex flex-col space-y-4"
						>
							<FormField
								control={form.control}
								name="title"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Title</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormDescription>
											This is the title of your post. Make
											it a short summary of what your post
											is about.
										</FormDescription>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="category"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Category</FormLabel>
										<Select onValueChange={field.onChange}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select a category..." />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="REQUEST_FOR_HELP">
													Request for Help
												</SelectItem>
												<SelectItem value="SHARING_RESOURCES">
													Sharing Resources
												</SelectItem>
											</SelectContent>
										</Select>
										<FormDescription>
											Select a category that matches what
											you are sharing. This will help
											other people find what they're
											looking for.
										</FormDescription>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="content"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Content</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormDescription>
											This is the content of your post.
											Describe exactly what you need/are
											providing in clear terms.
										</FormDescription>
									</FormItem>
								)}
							/>
						</form>
					</Form>
				</CardContent>
			</Card>
		</main>
	)
}
