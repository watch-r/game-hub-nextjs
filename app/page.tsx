"use client";
import { useState, useEffect, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { Game } from "@/lib/Typedefinations";
import Autoplay from "embla-carousel-autoplay";
import GameCard from "@/components/GameCard";
import { HomeGameSkeleton } from "@/components/skeletons/HomeGameSkeleton";
import SearchInput from "@/components/SearchInput";
import Link from "next/link";

export default function Home() {
    const [games, setGames] = useState([]);
    const [genre, setGenre] = useState("action");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`/api/home-games?genre=${genre}`)
            .then((res) => res.json())
            .then((data) => {
                setGames(data.results || []);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, [genre]);
    return (
        <div className="min-h-screen bg-background text-foreground mb-10">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 lg:py-40 text-center h-auto overflow-hidden">
                {/* Background Image with Gradient Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-top bg-no-repeat scale-105 animate-slow-zoom"
                    style={{
                        backgroundImage: `url('/hero.png')`,
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-background" />

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-8 animate-fadeIn tracking-tighter leading-tight drop-shadow-2xl">
                        Discover Your Next{" "}
                        <span className="text-primary relative">
                            Favorite Game
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 blur-sm rounded-full"></span>
                        </span>
                    </h1>

                    {/* Search + Button */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl mx-auto">
                        <div className="relative w-full group">
                            <Suspense
                                fallback={
                                    <div className="h-12 w-full bg-white/20 animate-pulse rounded-full" />
                                }
                            >
                                <SearchInput />
                            </Suspense>
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
                        </div>
                        <Button className="rounded-full px-8 py-6 text-lg font-bold shadow-2xl hover:scale-105 transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 border-white/20 backdrop-blur-sm">
                            <Link
                                href="/browse"
                                className="flex items-center gap-2"
                            >
                                BROWSE ALL
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Genre Tabs */}
            <Suspense fallback={<HomeGameSkeleton />}>
                <section className="py-16 text-center h-auto">
                    <div className="flex flex-col items-center gap-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                                Explore by Genre
                            </h2>
                            <div className="h-1 w-20 bg-primary mx-auto rounded-full opacity-50"></div>
                        </div>
                        <Tabs
                            defaultValue="action"
                            onValueChange={setGenre}
                            className="w-full max-w-4xl"
                        >
                            <div className="flex justify-center">
                                <TabsList className="flex justify-center gap-2 p-1.5 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full shadow-2xl">
                                    <TabsTrigger
                                        value="action"
                                        className="rounded-full px-6 py-2 transition-all duration-300"
                                    >
                                        Action
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="adventure"
                                        className="rounded-full px-6 py-2 transition-all duration-300"
                                    >
                                        Adventure
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="role-playing-games-rpg"
                                        className="rounded-full px-6 py-2 transition-all duration-300"
                                    >
                                        RPG
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="indie"
                                        className="rounded-full px-6 py-2 transition-all duration-300"
                                    >
                                        Indie
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="shooter"
                                        className="rounded-full px-6 py-2 transition-all duration-300"
                                    >
                                        Shooter
                                    </TabsTrigger>
                                </TabsList>
                            </div>
                        </Tabs>
                    </div>
                </section>
                {/* Top Games */}
                {isLoading ? (
                    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                        <HomeGameSkeleton />
                    </div>
                ) : (
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({ delay: 2000 }), // 2 seconds
                        ]}
                        className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                    >
                        <CarouselContent>
                            {games.map((game: Game) => (
                                <CarouselItem
                                    key={game.id}
                                    className="basis-1/1 md:basis-1/2 lg:basis-1/3"
                                >
                                    <GameCard game={game} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                )}
            </Suspense>
        </div>
    );
}
