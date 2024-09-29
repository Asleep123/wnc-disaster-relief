"use server"

import type { User } from "@supabase/supabase-js"
import prisma from "~/lib/prisma/client"

export async function getUserData(user: User) {
	const data = await prisma.user.findUnique({
		where: {
			id: user.id
		}
	})

	return data
}
