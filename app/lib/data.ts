import { notFound } from "next/navigation";
export async function fetchGames() {
    const response = await fetch(
        `${process.env.RAWG_API_BASE_URL}/games?key=${process.env.RAWG_API_KEY}`,
        {
            method: "GET",
            headers: {
                accept: "application/json",
            },
        }
    );
    const { count, results } = await response.json();
    return { count, results };
}

export async function fetchGamesWithParameters(
    pagesize: string,
    page?: string,
    platform?: string,
    genre?: string,
    order?: string,
    search?: string
) {
    let url = `${process.env.RAWG_API_BASE_URL}/games?key=${process.env.RAWG_API_KEY}&page_size=${pagesize}&`;
    if (platform) {
        url += "platforms=" + platform + "&";
    }
    if (genre) {
        url += "genres=" + genre + "&";
    }
    if (order) {
        url += "ordering=" + order + "&";
    }
    if (search) {
        url += `search=${search}&`;
    }
    if (page) {
        url += `page=${page}`;
    }

    const response = await fetch(url, {
        method: "GET",
        headers: {
            accept: "application/json",
        },
    });
    const { count, results } = await response.json();
    return { count, results };
}

export default async function fetchGenres() {
    const response = await fetch(
        `${process.env.RAWG_API_BASE_URL}/genres?key=${process.env.RAWG_API_KEY}`,
        {
            method: "GET",
            headers: {
                accept: "application/json",
            },
        }
    );

    const { results } = await response.json();
    return results;
}

export async function fetchGenreByIds(id: string) {
    const response = await fetch(
        `${process.env.RAWG_API_BASE_URL}/genres/${id}?key=${process.env.RAWG_API_KEY}`,
        {
            method: "GET",
            headers: {
                accept: "application/json",
            },
        }
    );
    if (!response.ok) notFound;
    return response.json();
}

export async function fetchGameById(data: string) {
    const res = await fetch(
        `${process.env.RAWG_API_BASE_URL}/games/${data}?key=${process.env.RAWG_API_KEY}`,
        {
            method: "GET",
            headers: {
                accept: "application/json",
                cache: "force-cache",
            },
        }
    );
    const game = await res.json();
    return game;
}

export async function fetchPlatforms() {
    const response = await fetch(
        `${process.env.RAWG_API_BASE_URL}/platforms?key=${process.env.RAWG_API_KEY}`,
        {
            method: "GET",
            headers: {
                accept: "application/json",
            },
        }
    );
    const { count, results } = await response.json();
    return results;
}
