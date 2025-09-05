"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import Image from "next/image";
import getCroppedImageUrl from "@/lib/image-url";

export default function Home() {
    const [games, setGames] = useState([]);
    const [genre, setGenre] = useState("action");

    useEffect(() => {
        fetch(`/api/games?type=games&page_size=5&genre=${genre}`)
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
            <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-2xl font-semibold mb-4">Top Games</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {games.map((game: any) => (
                        <Card key={game.id} className="overflow-hidden pt-0 mt-0">
                            <Image
                                width={1000}
                                height={500}
                                src={
                                    game.background_image
                                        ? getCroppedImageUrl(
                                              game.background_image
                                          )
                                        : "/stock-image.png"
                                }
                                alt={game.name}
                                className="object-cover"
                            />
                            <CardContent>
                                <h3 className="font-semibold">{game.name}</h3>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center">
                                <Badge variant="destructive">
                                    {game.rating}
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                    {game.released}
                                </span>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}
