import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export default async function fetchGenreByIds(id: string) {
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
