import { NextRequest, NextResponse } from "next/server";

async function fetchGames() {
    const res = await fetch(`${process.env.RAWG_API_BASE_URL}/games?key=${process.env.RAWG_API_KEY}`, {
        method: "GET",
        headers: {
            accept: "application/json",
        },
    });
    const results = await res.json();
    return results;
}
export async function GET(request: NextRequest) {
    const info = await fetchGames();
    return NextResponse.json(info);
}
