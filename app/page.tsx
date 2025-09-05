"use client";
import { useState, useEffect } from "react";
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

export default function Home() {
    const [games, setGames] = useState([]);
    const [genre, setGenre] = useState("action");

    useEffect(() => {
        fetch(`/api/games?type=games&page_size=10&genre=${genre}`)
            .then((res) => res.json())
            .then((data) => setGames(data.results || []));
    }, [genre]);
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative py-20 text-center h-auto">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 dark:opacity-5"
                    style={{
                        backgroundImage: `url('/andrey-metelev-DEuansgqjns-unsplash.jpg')`,
                    }}
                />
                <h1 className="text-4xl font-bold mb-4">
                    Discover Your Next Favorite Game
                </h1>
                <div className="flex justify-center gap-2 max-w-md mx-auto">
                    <div className="relative w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
                        <Input
                            placeholder="Search Game…"
                            className="pl-13 rounded-full"
                        />
                    </div>
                    <Button className="rounded-full">Browse All</Button>
                </div>
            </section>

            {/* Genre Tabs mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 */}
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
                            <TabsTrigger value="shooter">Shooter</TabsTrigger>
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
        </div>
    );
}
