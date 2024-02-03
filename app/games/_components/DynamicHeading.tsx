"use client";
import { Genre, Platform } from "@/app/lib/TypeDefinations";
import { Heading } from "@radix-ui/themes";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

type Props = {
    genres: Genre[];
    platforms: Platform[];
};

const DynamicHeading = ({ genres, platforms }: Props) => {
    const searchParams = useSearchParams();
    const genreName = searchParams.get("genres");
    const platformNumber = searchParams.get("platform");

    let matchingPlatform: Platform[] = [];
    if (platformNumber != "all") {
        matchingPlatform = platforms.filter(
            (platform) => platform.id == platformNumber
        );
    }

    let matchingGenres: Genre[] = [];
    if (genreName != undefined) {
        matchingGenres = genres.filter((genre) => genre.slug === genreName);
    }

    return (
        <Suspense>
            <Heading size={"8"} className='border-b-2 px-1 pb-1'>
                {genreName != undefined
                    ? matchingGenres[0]?.name + " Games"
                    : "Games"}
                {matchingPlatform.length > 0 &&
                    ` on ${matchingPlatform[0]?.name}`}
            </Heading>
        </Suspense>
    );
};

export default DynamicHeading;
