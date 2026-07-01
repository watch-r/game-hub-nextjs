import { NextRequest, NextResponse } from "next/server";
import { fetchGamesWithParameters } from "@/lib/data";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const genre = searchParams.get("genre") || "action";

        // Use the optimized lib/data utility to fetch directly from RAWG
        const data = await fetchGamesWithParameters(
            "10", // page_size
            "1", // page
            "", // platform
            genre, // genre
            "", // order
            "", // search
        );

        return NextResponse.json(data);
    } catch (error: any) {
        console.error("Home games fetch error:", error);
        return NextResponse.json({ results: [] }, { status: 500 });
    }
}
