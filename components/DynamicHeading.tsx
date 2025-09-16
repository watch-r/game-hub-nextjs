"use client";

import { Genre, Platform } from "@/lib/Typedefinations";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

type Props = {
    genres: Genre[];
    platforms: Platform[];
};

const DynamicHeading = ({ genres, platforms }: Props) => {
    const searchParams = useSearchParams();
    const genreSlug = searchParams.get("genre");
    const platformId = searchParams.get("platform");

    const matchingPlatform =
        platformId && platformId !== "all"
            ? platforms.find((p) => p.id.toString() === platformId)
            : null;

    const matchingGenre =
        genreSlug != undefined
            ? genres.find((g) => g.slug === genreSlug)
            : null;

    return (
        <Suspense>
            <h1 className="text-4xl font-bold border-b-2 px-1 pb-1">
                {matchingGenre ? `${matchingGenre.name} Games` : "Games"}
                {matchingPlatform ? ` on ${matchingPlatform.name}` : ""}
            </h1>
        </Suspense>
    );
};

export default DynamicHeading;
