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
    const searchQuery = searchParams.get("search");

    const matchingPlatform =
        platformId && platformId !== "all"
            ? platforms.find((p) => p.id.toString() === platformId)
            : null;

    const matchingGenre =
        genreSlug != undefined
            ? genres.find((g) => g.slug === genreSlug)
            : null;

    let headingText = "";

    if (searchQuery) {
        headingText = `Search results for "${searchQuery}"`;
        if (matchingGenre) headingText += ` in ${matchingGenre.name}`;
        if (matchingPlatform) headingText += ` on ${matchingPlatform.name}`;
    } else {
        headingText = matchingGenre ? `${matchingGenre.name} Games` : "Games";
        if (matchingPlatform) headingText += ` on ${matchingPlatform.name}`;
    }

    return (
        <Suspense>
            <h1 className="text-4xl font-bold border-b-2 px-1 pb-1">
                {headingText}
            </h1>
        </Suspense>
    );
};

export default DynamicHeading;
