import Link from "next/link"

const links = [
	{ href: "/", text: "Home" },
	{ href: "/about", text: "About Us" }
]

export default function Navbar() {
	return (
		<div className="flex justify-between h-[4rem] w-full border-b border-border p-4 items-center">
			<div className="flex space-x-2">
				<span>West NC Disaster Relief</span>
			</div>
			<div className="flex space-x-4 items-center">
				{links.map((object) => (
					<Link
						href={object.href}
						key={object.text}
						className="rounded-md transition-all hover:bg-muted p-3"
					>
						{object.text}
					</Link>
				))}
			</div>
		</div>
	)
}
