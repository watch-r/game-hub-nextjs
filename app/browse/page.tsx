import GameGrid from "@/components/GameGrid";
import GenreList from "@/components/GenreList";
import PlatformGameFilterList from "@/components/PlatformFilterList";
import SortSelector from "@/components/SortSelector";
import DynamicHeading from "@/components/DynamicHeading";
import ResetButton from "@/components/ResetButton";

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

    const resGenre = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/games?type=genres`
    );
    const genreResults = await resGenre.json();

    const resPlatforms = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/games?type=platforms`
    );
    const platformResults = await resPlatforms.json();

    return (
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-row">
            <section className="lg:max-w-1/3 md:max-w-1/2 w-full hidden md:block p-3">
                <h3 className="text-2xl sm:text-sm md:text-3xl text-center font-bold mb-2 pb-2 border-b-2">
                    Genres
                </h3>
                <GenreList
                    genres={genreResults.results || []}
                    selectedGenre={genre || ""}
                />
            </section>
            <section className="lg:max-w-2/3 md:max-w-1/2 w-full p-3">
                <DynamicHeading
                    genres={genreResults.results || []}
                    platforms={platformResults.results || []}
                />
                <div className="flex flex-row space-x-3 pt-3 pb-3">
                    <PlatformGameFilterList
                        platforms={platformResults.results || []}
                    />
                    <SortSelector />
                    <ResetButton />
                </div>
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
