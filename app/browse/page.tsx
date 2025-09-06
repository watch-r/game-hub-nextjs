import { Genre } from "@/lib/Typedefinations";
import GameGrid from "@/components/GameGrid";
import GenreList from "@/components/GenreList";

interface SearchProps {
    searchParams: {
        platform?: string;
        genre?: string;
        page?: string;
        sortOrder?: string;
        search?: string;
    };
}

export default async function GameBrowsePage({ searchParams }: SearchProps) {
    const { platform, genre, page, sortOrder, search } = await searchParams;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/games?type=genres`
    );
    const data = await res.json();

    return (
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-row">
            <section className="lg:max-w-1/3 md:max-w-1/2 w-full hidden md:block p-3">
                <h3 className="text-2xl sm:text-sm md:text-lg text-center font-bold mb-5">
                    Genres
                </h3>
                <GenreList
                    genres={data.results || []}
                    selectedGenre={genre || ""}
                />
            </section>
            <section className="lg:max-w-2/3 md:max-w-1/2 w-full p-3">
                <h1 className="text-xl">Games</h1>
                <GameGrid
                    platform={platform || ""}
                    genre={genre || ""}
                    page={page || "1"}
                    sortOrder={sortOrder || ""}
                    search={search || ""}
                />
            </section>
        </div>
    );
}
