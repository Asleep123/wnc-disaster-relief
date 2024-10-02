"use client"

import { Button } from "~/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"

export default function Home() {
    return (
        <main className="p-4 space-y-8">
            <section
                className="relative bg-cover bg-center text-white rounded-lg shadow-md"
                style={{ backgroundImage: "url('/flood.png')" }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                <div className="relative flex flex-col items-center justify-center p-12 space-y-4 text-center z-10">
                    <h1 className="text-5xl font-bold">
                        West NC Disaster Relief
                    </h1>
                    <p className="text-lg">
                        Helping our community during Hurricane Helene and providing relief.
                    </p>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>What do we do?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            We connect people in distress to resources like shelter, food, and medical care.
                            Our goal is to help those affected by Hurricane Helene.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Welfare Check</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Looking for someone or want to report your status? Use our welfare check form to stay connected.
                            We strive to reunite people with their loved ones.
                        </p>
                        <Button variant="default" className="mt-4">Fill Welfare Check Form</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Food and Water Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Find up-to-date information on food and water distribution points near you. We update this
                            section regularly to ensure you have access to essential supplies during tough times.
                        </p>
                        <Button variant="default" className="mt-4">View Distribution Points</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Emergency Contacts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Stay connected with emergency contacts in your area. We provide phone numbers, email addresses,
                            and other vital information for immediate assistance.
                        </p>
                        <Button variant="default" className="mt-4">View Emergency Contacts</Button>
                    </CardContent>
                </Card>
            </section>

            {/* Footer Section */}
            <footer className="mt-8 py-4 bg-gray-800 text-white text-center rounded-lg">
                <p>© 2024 West NC Disaster Relief. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="/contact" className="text-sm">Contact Us</a>
                    <a href="/emergency-info" className="text-sm">Emergency Info</a>
                </div>
            </footer>
        </main>
    )
}
