"use server"

import type { User } from "@supabase/supabase-js"
import prisma from "~/lib/prisma/client"
import { createClient } from "~/lib/supabase/server"

export async function getUserData(user: User) {
    const supabase = createClient()

    const { data: supabaseUser, error } = await supabase.auth.getUser(user.id)

    if (error || !supabaseUser) {
        throw new Error("User not found or unauthorized")
    }

    const data = await prisma.user.findUnique({
        where: {
            id: user.id
        }
    })

    return data
}
