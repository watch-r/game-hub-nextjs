"use client";
import { useState, useEffect, Suspense } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { Game, Gamep } from "@/lib/Typedefinations";
import Autoplay from "embla-carousel-autoplay";
import GameCard from "@/components/GameCard";
import { HomeGameSkeleton } from "@/components/skeletons/HomeGameSkeleton";

export default function Home() {
    const [games, setGames] = useState([]);
    const [genre, setGenre] = useState("action");

    useEffect(() => {
        fetch(`/api/games?type=games&page_size=10&genre=${genre}`)
            .then((res) => res.json())
            .then((data) => setGames(data.results || []));
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
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 animate-fadeIn">
                        Discover Your Next Favorite Game
                    </h1>

                    {/* Search + Button */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                placeholder="Search Game…"
                                aria-label="Search games"
                                className="pl-12 pr-4 py-3 rounded-full w-full text-base sm:text-lg"
                            />
                        </div>
                        <Button className="rounded-full px-6 py-3 text-base sm:text-lg shadow-md hover:scale-105 transition">
                            BROWSE ALL
                        </Button>
                    </div>
                </div>
            </section>

            {/* Genre Tabs mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 */}
            <Suspense fallback={<HomeGameSkeleton />}>
                <section className="py-8 text-center h-auto">
                    <Tabs defaultValue="action" onValueChange={setGenre}>
                        {/* Center the tab list */}
                        <div className="flex justify-center">
                            <TabsList className="flex justify-center gap-2">
                                <TabsTrigger value="action">Action</TabsTrigger>
                                <TabsTrigger value="adventure">
                                    Adventure
                                </TabsTrigger>
                                <TabsTrigger value="role-playing-games-rpg">
                                    RPG
                                </TabsTrigger>
                                <TabsTrigger value="indie">Indie</TabsTrigger>
                                <TabsTrigger value="shooter">
                                    Shooter
                                </TabsTrigger>
                            </TabsList>
                        </div>
                    </Tabs>
                </section>
                {/* Top Games */}
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
            </Suspense>
        </div>
    );
}
