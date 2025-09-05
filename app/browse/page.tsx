"use client";
import { Genre } from "@/lib/Typedefinations";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface SearchProps {
    searchParams: {
        platform: string;
        genres: string;
        page: string;
        sortOrder: string;
        search: string;
    };
}

const GameBrowsePage = ({ searchParams }: SearchProps) => {
    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
        fetch(`/api/games?type=genres`)
            .then((res) => res.json())
            .then((data) => setGenres(data.results || []))
            .catch((err) => console.error("Error fetching genres:", err));
    }, []);
    
    return (
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-row">
            <section className="lg:max-w-1/3 md:max-w-1/2 w-full hidden md:block p-3">
                <h3 className="text-2xl sm:text-sm md:text-lg text-center font-bold mb-5">
                    {" "}
                    Genres
                </h3>
                {genres.map((genre) => (
                    <div
                        key={genre.id}
                        className="rounded-lg overflow-hidden shadow-md bg-card hover:shadow-lg dark:shadow-accent p-3 m-3 transition flex justify-between flex-row items-center"
                    >
                        <div className="flex flex-row space-x-2 items-center">
                            <Avatar>
                                <AvatarImage
                                    src={genre.image_background}
                                    alt={genre.name}
                                />
                                <AvatarFallback>G</AvatarFallback>
                            </Avatar>

                            <h2 className="text-xl sm:text-sm md:text-sm ">
                                {genre.name}
                            </h2>
                        </div>
                        <Badge>{genre.games_count}</Badge>
                    </div>
                ))}
            </section>
            <section className="lg:max-w-2/3 md:max-w-1/2 w-full p-3">
                <h1 className="text-xl">Games</h1>
            </section>
        </div>
    );
};

export default GameBrowsePage;
