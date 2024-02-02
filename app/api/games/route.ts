export default async function fetchGames() {
    const response = await fetch(
        `${process.env.RAWG_API_BASE_URL}/games?key=${process.env.RAWG_API_KEY}`,
        {
            method: "GET",
            headers: {
                accept: "application/json",
            },
        }
    );
    return response.json();
}

export async function fetchGamesWithParameters(
    pagesize: string,
    page?: string,
    platform?: string,
    genre?: string,
    order?: string
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
    if (page) {
        url += `page=${page}`;
    }

    const response = await fetch(url);
    const { count, results } = await response.json();
    return { count, results };
}
