import { redirect } from "next/navigation"
import type React from "react"
import { createClient } from "~/lib/supabase/server"

export default async function Layout({
	children
}: { children: React.ReactNode }) {
	const supabase = createClient()

	const {
		data: { user }
	} = await supabase.auth.getUser()

	if (user) {
		return redirect("/")
	}

	return children
}
