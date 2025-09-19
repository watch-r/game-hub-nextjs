import React from "react";
import { fetchTopRatedGames } from "@/lib/data";
import GameCard from "@/components/GameCard";
import { Game } from "@/lib/Typedefinations";
import GamePagination from "@/components/Pagination";

const TopRatedPage = async ({
    searchParams,
}: {
    searchParams: { page?: string };
}) => {
    const pageSize = 9;
    const page = searchParams.page || "1";

    const { count, results } = await fetchTopRatedGames(
        pageSize.toString(),
        page
    );

    return (
        <div className="p-6 mx-auto w-full max-w-6xl">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Top Rated Games
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((game: Game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>

            <div className="mt-6">
                <GamePagination
                    itemCount={count.toString()}
                    pageSize={pageSize}
                    currentpage={parseInt(page)}
                />
            </div>
        </div>
    );
};

export default TopRatedPage;
