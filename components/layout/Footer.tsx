"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="relative bg-background text-foreground py-12 px-6 md:px-20 border-t ">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Brand / About */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Game Hub</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Discover your next favorite game. Curated lists,
                        reviews, and recommendations - all in one place.
                    </p>
                </div>

                {/* Navigation */}
                <div className="flex flex-col md:flex-row md:justify-center gap-8">
                    <div>
                        <h3 className="font-semibold mb-3">Explore</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-primary transition"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-primary transition"
                                >
                                    Browse
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-primary transition"
                                >
                                    Top Rated
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-primary transition"
                                >
                                    New Releases
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3">Support</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-primary transition"
                                >
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-primary transition"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-primary transition"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-primary transition"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="font-semibold mb-3">Stay Updated</h3>
                    <div className="flex items-center gap-2 mb-4">
                        <Input
                            type="email"
                            placeholder="Your email"
                            className="rounded-full"
                        />
                        <Button className="rounded-full">Subscribe</Button>
                    </div>
                    <div className="flex gap-4 text-muted-foreground">
                        <Link href="#" className="hover:text-primary transition">
                            🌐
                        </Link>
                        <Link href="#" className="hover:text-primary transition">
                            🐦
                        </Link>
                        <Link href="#" className="hover:text-primary transition">
                            📷
                        </Link>
                        <Link href="#" className="hover:text-primary transition">
                            🎮
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} MonStarZero Studio. All rights reserved.
            </div>
        </footer>
    );
}
