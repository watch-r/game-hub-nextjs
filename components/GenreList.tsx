"use client";

import { Genre } from "@/lib/Typedefinations";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useRouter, useSearchParams } from "next/navigation";

interface GenreListProps {
    genres: Genre[];
    selectedGenre: string;
}

const GenreList = ({ genres, selectedGenre }: GenreListProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleGenreClick = (genre: Genre) => {
        const params = new URLSearchParams(searchParams.toString()); // ✅ clone current params

        if (genre.slug) {
            params.set("genre", genre.slug); // use "set" instead of append to replace
            params.set("page", "1"); // reset pagination when changing genre
        } else {
            params.delete("genre");
        }

        router.push(`/browse?${params.toString()}`);
    };

    return (
        <div>
            {genres.map((genre: Genre) => (
                <div
                    key={genre.id}
                    className={`rounded-lg overflow-hidden shadow-md bg-card hover:shadow-lg dark:shadow-accent p-3 m-3 transition flex justify-between flex-row items-center cursor-pointer ${
                        selectedGenre === genre.slug
                            ? "border-2 border-blue-500"
                            : ""
                    }`}
                    onClick={() => handleGenreClick(genre)}
                >
                    <div className="flex flex-row space-x-2 items-center">
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
