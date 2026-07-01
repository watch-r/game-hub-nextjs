const RAWG_BASE_URL = process.env.RAWG_API_BASE_URL;
const RAWG_API_KEY = process.env.RAWG_API_KEY;

async function fetchFromRAWG(endpoint: string) {
    const res = await fetch(
        `${RAWG_BASE_URL}${endpoint}${
            endpoint.includes("?") ? "&" : "?"
        }key=${RAWG_API_KEY}`,
        { headers: { accept: "application/json" }, cache: "no-store" },
    );

    if (!res.ok) {
        throw new Error(`RAWG API error: ${res.status} ${res.statusText}`);
    }
    return res.json();
}

export async function fetchGamesWithParameters(
    pageSize: string,
    page: string,
    platform: string,
    genre: string,
    order: string,
    search: string,
) {
    const params = new URLSearchParams();
    params.append("page_size", pageSize);
    params.append("page", page);

    if (platform) params.append("platforms", platform);
    if (genre) params.append("genres", genre);
    if (order) params.append("ordering", order);
    if (search) params.append("search", search);

    return fetchFromRAWG(`/games?${params.toString()}`);
}

export async function fetchTopRatedGames(pageSize: string, page: string) {
    const endpoint = `/games?ordering=-rating&page_size=${pageSize}&page=${page}`;
    return fetchFromRAWG(endpoint);
}

export async function fetchNewReleasesThisYear(pageSize: number, page: number) {
    const year = new Date().getFullYear();
    const startDate = `${year}-01-01`;
    const today = new Date().toISOString().split("T")[0];

    const endpoint = `/games?dates=${startDate},${today}&ordering=-released&page_size=${pageSize}&page=${page}`;
    const data = await fetchFromRAWG(endpoint);

    return {
        count: data.count,
        results: data.results,
    };
}

export async function fetchGenres() {
    return fetchFromRAWG("/genres");
}

export async function fetchPlatforms() {
    return fetchFromRAWG("/platforms");
}

export async function fetchGameById(id: string) {
    return fetchFromRAWG(`/games/${id}`);
}

export async function fetchGameScreenshots(id: string) {
    return fetchFromRAWG(`/games/${id}/screenshots`);
}
