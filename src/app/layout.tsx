import "./globals.css"
import { Manrope } from "next/font/google"
import type * as React from "react"
import { Toaster } from "~/components/ui/toaster"

const manrope = Manrope({
	subsets: ["latin"],
	weight: "500"
})

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={manrope.className}>
			<head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<link
					rel="icon"
					type="image/x-icon"
					href="../assets/img/favicon.ico"
				/>
				<title>Disaster Relief - disasterrelief.forum</title>
			</head>
			<body>
				{children}
				<Toaster />
			</body>
		</html>
	)
}
