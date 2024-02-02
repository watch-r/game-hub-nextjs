// https://api.rawg.io/api/genres

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
