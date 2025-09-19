import { fetchGamesWithParameters } from "@/lib/data";
import React from "react";
import GameCard from "./GameCard";
import { Game } from "@/lib/Typedefinations";
import GamePagination from "./Pagination";

type MyPageProps = {
    platform: string;
    genre: string;
    page: string;
    sortOrder: string;
    search: string;
};
const GameGrid = async ({
    platform,
    genre,
    page,
    sortOrder,
    search,
}: MyPageProps) => {
    const pageSize = 9;
    const pages = parseInt(page) || 1;
    const { count, results } = await fetchGamesWithParameters(
        pageSize.toString(),
        page.toString(),
        platform,
        genre,
        sortOrder,
        search
    );
    return (
        <div>
            {" "}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {results.map((gamePiece: Game) => (
                    <GameCard key={gamePiece.id} game={gamePiece} />
                ))}
            </div>
            <GamePagination
                itemCount={count}
                pageSize={pageSize}
                currentpage={pages}
            />
        </div>
    );
};

export default GameGrid;
