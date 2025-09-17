"use client";

import { Genre } from "@/lib/Typedefinations";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";

interface GenreListProps {
    genres: Genre[];
    selectedGenre: string | null;
}

const GenreList = ({ genres, selectedGenre }: GenreListProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Generic handler for updating any query params
    const updateParams = (newParams: Record<string, string | null>) => {
        const params = new URLSearchParams(searchParams.toString());

        Object.entries(newParams).forEach(([key, value]) => {
            if (value === null) {
                params.delete(key);
            } else {
                params.set(key, value);
            }
        });

        router.push(`/browse?${params.toString()}`);
    };

    const handleGenreClick = (genre: Genre) => {
        updateParams({
            genre: genre.slug, // set selected genre
            page: "1", // reset pagination
        });
    };

    const handleResetFilters = () => {
        updateParams({
            genre: null,
            platform: null,
            sortOrder: null,
            page: "1",
            search: null,
        });
    };

    return (
        <div>
            <div className="pl-1 flex flex-wrap items-center mb-0">
                <Button
                    variant={"outline"}
                    onClick={handleResetFilters}
                    className=" py-1 m-1 rounded-lg transition"
                >
                    Reset Filters
                </Button>
            </div>

            {genres.map((genre: Genre) => (
                <div
                    key={genre.id}
                    className={`rounded-lg overflow-hidden shadow-md bg-card hover:shadow-lg dark:shadow-accent p-3 m-3 transition flex justify-between items-center cursor-pointer ${
                        selectedGenre === genre.slug
                            ? "border-2 border-blue-500"
                            : ""
                    }`}
                    onClick={() => handleGenreClick(genre)}
                >
                    <div className="flex items-center space-x-2">
                        <Avatar>
                            <AvatarImage
                                src={genre.image_background}
                                alt={genre.name}
                            />
                            <AvatarFallback>G</AvatarFallback>
                        </Avatar>
                        <h2 className="text-xl sm:text-sm md:text-sm">
                            {genre.name}
                        </h2>
                    </div>
                    <Badge>{genre.games_count}</Badge>
                </div>
            ))}
        </div>
    );
};

export default GenreList;
