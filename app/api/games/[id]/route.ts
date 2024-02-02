import { notFound } from "next/navigation";

export default async function fetchGameByIds(id: string) {
    const response = await fetch(
        `${process.env.RAWG_API_BASE_URL}/games/${id}?key=${process.env.RAWG_API_KEY}`,
        {
            method: "GET",
            headers: {
                accept: "application/json",
            },
        }
    );
    if (!response) notFound; // If no response is returned, it means the game was not found
    return response.json();
}
