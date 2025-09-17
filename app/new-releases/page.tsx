import React from "react";
import GameCard from "@/components/GameCard";
import { Game } from "@/lib/Typedefinations";
import GamePagination from "@/components/Pagination";
import { fetchNewReleasesThisYear } from "@/lib/data";
// import { fetchNewReleasesThisYear } from "@/lib/data";

const NewReleasesPage = async ({
    searchParams,
}: {
    searchParams: { page?: string };
}) => {
    const pageSize = 9;
    const page = await parseInt(searchParams.page || "1", 10);

    const { count, results } = await fetchNewReleasesThisYear(pageSize, page);

    return (
        <div className="p-6 mx-auto w-full max-w-6xl">
            <h1 className="text-3xl font-bold mb-6 text-center" >
                🎮 New Releases ({new Date().getFullYear()})
            </h1>

            {results.length === 0 ? (
                <p className="text-gray-500">
                    No games released yet in {new Date().getFullYear()}.
                </p>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {results.map((game: Game) => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </div>

                    <div className="mt-6">
                        <GamePagination
                            itemCount={9999}
                            pageSize={pageSize}
                            currentpage={page}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default NewReleasesPage;
