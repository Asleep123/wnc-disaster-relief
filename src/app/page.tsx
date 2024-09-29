"use client"

import Image from "next/image"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"

export default function Home() {
	return (
		<main>
			<div className="relative text-center">
				<Image
					src="/flood.png"
					width={1024}
					height={1024}
					alt="Picture of a flood in North Caroline, Hurricane Helene"
					className="w-screen blur-sm mt-1"
				/>
				<div className="flex flex-col items-center absolute top-0 left-0 text-center mt-64 space-y-4 w-full">
					<p className="text-5xl text-center text-white">West NC Disaster Relief</p>
					<Button variant="default">Get Started</Button>
				</div>
			</div>
			<div className="py-8 px-8">
				<Card>
					<CardHeader>
						<CardTitle>What do we do?</CardTitle>
					</CardHeader>
					<CardContent>
						<p>We try to connect people in a time of distress, to help get people to safety and in contact. We have resources to help get you or a loved one back on their feet after a disaster, such as a hurricane, flood, tornado, or anything life-threatening. Have any resources? Post them here to help others get what they need.</p>
					</CardContent>
				</Card>
			</div>
		</main>
	)
}
