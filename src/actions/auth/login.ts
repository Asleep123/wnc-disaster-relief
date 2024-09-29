"use server"

import { redirect } from "next/navigation"
import prisma from "~/lib/prisma/client"
import { createClient } from "~/lib/supabase/server"

export async function loginWithEmail(email: string, password: string) {
	const supabase = createClient()
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password
	})

	if (error) {
		if (error.status === 400)
			return redirect(`/auth/login?message=Invalid credentials.`)
		return redirect(`/auth/login?message=Failed to authenticate.`)
	}

	await prisma?.user.upsert({
		where: {
			email: data.user.email as string
		},
		update: {
			id: data.user.id,
			email: data.user.email as string,
			username: data.user.email as string
		},
		create: {
			id: data.user.id,
			email: data.user.email as string,
			username: data.user.email as string
		}
	})

	return redirect("/")
}
