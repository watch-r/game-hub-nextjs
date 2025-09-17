// lib/data.ts

import { Game } from "./Typedefinations";

export async function fetchGamesWithParameters(
    pageSize: string,
    page: string,
    platform: string,
    genre: string,
    order: string,
    search: string
) {
    const params = new URLSearchParams({
        type: "games",
        page_size: pageSize,
        page,
    });

    if (platform) params.append("platform", platform);
    if (genre) params.append("genre", genre);
    if (order) params.append("order", order);
    if (search) params.append("search", search);

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/games?${params.toString()}`,
        {
            method: "GET",
            headers: { accept: "application/json" },
            cache: "no-store", // for fresh data, or "force-cache" if you want caching
        }
    );

    if (!res.ok) {
        throw new Error(`Failed to fetch games: ${res.statusText}`);
    }

    return res.json();
}
export async function fetchTopRatedGames(pageSize: string, page: string) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/games?type=games&order=-rating&page_size=${pageSize}&page=${page}`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        throw new Error(
            `Failed to fetch top-rated games: ${res.status} - ${res.statusText}`
        );
    }

    return res.json();
}
export async function fetchNewReleasesThisYear(pageSize: number, page: number) {

    const fetchSize = pageSize; 
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/games?type=games&releasedThisYear=true&page_size=${fetchSize}&page=${page}`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        throw new Error(
            `Failed to fetch new releases: ${res.status} - ${res.statusText}`
        );
    }

    const data = await res.json();

    return {
        count: data.count, 
        results: data.results,
    };
}
