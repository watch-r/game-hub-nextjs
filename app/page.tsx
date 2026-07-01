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
        fetch(`/api/games?type=games&page_size=10&genre=${genre}`)
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
            <section className="relative py-16 md:py-24 lg:py-32 text-center h-auto">
                {/* Background Image with Gradient Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-top bg-no-repeat"
                    style={{
                        backgroundImage: `url('/hero.png')`,
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 animate-fadeIn tracking-tight leading-tight">
                        Discover Your Next{" "}
                        <span className="text-primary">Favorite Game</span>
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
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        </div>
                        <Button className="rounded-full px-8 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90">
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
                <section className="py-12 text-center h-auto">
                    <div className="flex flex-col items-center gap-6">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                            Explore by Genre
                        </h2>
                        <Tabs
                            defaultValue="action"
                            onValueChange={setGenre}
                            className="w-full max-w-4xl"
                        >
                            <div className="flex justify-center">
                                <TabsList className="flex justify-center gap-2 p-1 bg-muted/50 backdrop-blur-sm rounded-full">
                                    <TabsTrigger
                                        value="action"
                                        className="rounded-full px-4 py-2"
                                    >
                                        Action
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="adventure"
                                        className="rounded-full px-4 py-2"
                                    >
                                        Adventure
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="role-playing-games-rpg"
                                        className="rounded-full px-4 py-2"
                                    >
                                        RPG
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="indie"
                                        className="rounded-full px-4 py-2"
                                    >
                                        Indie
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="shooter"
                                        className="rounded-full px-4 py-2"
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
