"use server"

import type { User } from "@supabase/supabase-js"
import prisma from "~/lib/prisma/client"
import { createClient } from "~/lib/supabase/server"

export async function getUserData(user: User) {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser(user.id)

    if (error || !data.user) {
        throw new Error("User not found or unauthorized")
    }

    const userData = await prisma.user.findUnique({
        where: {
            id: user.id
        }
    })

    return userData
}
