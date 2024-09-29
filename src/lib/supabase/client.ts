"use client"
import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
	// biome-ignore lint/style/noNonNullAssertion: Env variables exist
	return createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	)
}
