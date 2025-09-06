// lib/data.ts

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
