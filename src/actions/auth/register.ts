"use server"
import { redirect } from "next/navigation"
import prisma from "~/lib/prisma/client"
import { createClient } from "~/lib/supabase/server"

export async function register(
	firstName: string,
	lastName: string,
	email: string,
	password: string
) {
	const supabase = createClient()

	const { data, error } = await supabase.auth.signUp({
		email,
		password
	})

	if (error) {
		if (error.status === 400)
			return redirect("/auth/register?message=Unauthorized")
		return redirect("/auth/register?message=Failed to register")
	}

	const userData = data?.user

	if (!userData) {
		return redirect("/auth/register?message=Failed to register")
	}

	console.log(data?.user)

	await prisma.user.create({
		data: {
			id: userData.id,
			firstName,
			lastName,
			email,
			username: email
		}
	})

	return redirect(
		"/auth/login?message=Check your email for a verification link"
	)
}
