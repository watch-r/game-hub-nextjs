import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export default async function fetchGames() {
    const response = await fetch(`${process.env.RAWG_API_BASE_URL}/games?key=${process.env.RAWG_API_KEY}`, {
        method: "GET",
        headers: {
            accept: "application/json",
        },
    });
    return response.json();
}

