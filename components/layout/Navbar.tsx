"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { usePathname } from "next/navigation";

export function Navbar() {
    const currentPath = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-background border-b">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-12">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold">
                    Game Hub
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="hover:text-primary transition">
                        Home
                    </Link>
                    <Link
                        href="/browse"
                        className="hover:text-primary transition"
                    >
                        Browse
                    </Link>
                    <Link
                        href="/top-rated"
                        className="hover:text-primary transition"
                    >
                        Top Rated
                    </Link>
                    <Link
                        href="/new-releases"
                        className="hover:text-primary transition"
                    >
                        New Releases
                    </Link>
                </nav>

                {/* Search + CTA (desktop) */}
                <div className="hidden md:flex items-center gap-3">
                    {currentPath === "/" ? null : (
                        // Search
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                            <Input
                                placeholder="Search games…"
                                className="pl-9 pr-4 py-2 rounded-full w-48"
                            />
                        </div>
                    )}
                    <ThemeToggle />
                    {/* signIn functionality  will add later*/}
                    <Button className="rounded-full">Sign In</Button>
                </div>

                {/* Mobile Menu Button */}
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            aria-label="Toggle menu"
                        >
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-64 sm:w-80">
                        <SheetHeader>
                            <span className="text-lg font-bold">
                                Menu <ThemeToggle />
                            </span>
                        </SheetHeader>
                        <nav className="pl-6 mt-6 flex flex-col gap-4 text-lg">
                            <Link href="/" onClick={() => setOpen(false)}>
                                Home
                            </Link>
                            <Link href="/browse" onClick={() => setOpen(false)}>
                                Browse
                            </Link>
                            <Link
                                href="/top-rated"
                                onClick={() => setOpen(false)}
                            >
                                Top Rated
                            </Link>
                            <Link
                                href="/new-releases"
                                onClick={() => setOpen(false)}
                            >
                                New Releases
                            </Link>
                        </nav>
                        {/* Search */}
                        <div className="p-3 mt-6 flex flex-col gap-3">
                            <Input placeholder="Search games…" />
                            {/* signIn functionality  will add later*/}
                            <Button className="rounded-full">Sign In</Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
