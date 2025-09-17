import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);

        // Determine what type of data to fetch
        const type = searchParams.get("type") || "games"; // games, genres, platforms, screenshots, stores, movies
        const id = searchParams.get("id"); // optional for single item or sub-resources

        let endpoint = "";

        // Function to fetch from RAWG API
        const fetchFromRAWG = async (endpoint: string) => {
            const res = await fetch(
                `${process.env.RAWG_API_BASE_URL}${endpoint}${
                    endpoint.includes("?") ? "&" : "?"
                }key=${process.env.RAWG_API_KEY}`,
                { headers: { accept: "application/json" }, cache: "default" }
            );

            if (!res.ok)
                throw new Error(
                    `RAWG API error: ${res.status} ${res.statusText}`
                );
            return res.json();
        };

        switch (type) {
            case "games": {
                let query = `page_size=${
                    searchParams.get("page_size") || "10"
                }`;
                if (searchParams.get("page"))
                    query += `&page=${searchParams.get("page")}`;
                if (searchParams.get("platform"))
                    query += `&platforms=${searchParams.get("platform")}`;
                if (searchParams.get("genre"))
                    query += `&genres=${searchParams.get("genre")}`;
                if (searchParams.get("order"))
                    query += `&ordering=${searchParams.get("order")}`;
                if (searchParams.get("search"))
                    query += `&search=${searchParams.get("search")}`;
                endpoint = `/games?${query}`;
                break;
            }

            case "gameById":
                if (!id) throw new Error("Missing game id");
                endpoint = `/games/${id}?`;
                break;

            case "genres":
                endpoint = "/genres?";
                break;

            case "genreById":
                if (!id) throw new Error("Missing genre id");
                endpoint = `/genres/${id}?`;
                break;

            case "platforms":
                endpoint = "/platforms?";
                break;

            case "screenshots":
                if (!id) throw new Error("Missing game id");
                endpoint = `/games/${id}/screenshots?`;
                break;

            case "stores":
                if (!id) throw new Error("Missing game id");
                endpoint = `/games/${id}/stores?`;
                break;

            case "movies":
                if (!id) throw new Error("Missing game id");
                endpoint = `/games/${id}/movies?`;
                break;

            default:
                throw new Error("Invalid type");
        }

        const data = await fetchFromRAWG(endpoint);
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
    }
}
