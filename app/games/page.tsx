import { Box, Container, Flex, Grid, Heading } from "@radix-ui/themes";
import { Genre, Platform } from "../lib/TypeDefinations";
import fetchGenres, { fetchGames, fetchPlatforms } from "../lib/data";
import GameGrid from "./_components/GameGrid";
import GenreList from "./_components/GenreList";
import PlatformGameFilterList from "./_components/PlatformGameFilterList";
import SortSelector from "./_components/SortSelector";
import ResetButton from "./_components/resetButton";
import { Suspense } from "react";
import GenreListSkeleton from "./_components/GenreListSkeleton";
import GameGridSkeleton from "./_components/GameGridSkeleton";

type MySearchProps = {
    searchParams: {
        platform: string;
        genres: string;
        page: string;
        sortOrder: string;
        search: string;
    };
};

const GameListPage = async ({ searchParams }: MySearchProps) => {
    // await delay(3000); // Simulate loading time. Remove in production!
    const genreResults: Genre[] = await fetchGenres();
    const platforms: Platform[] = await fetchPlatforms();
    const { count } = await fetchGames();

    return (
        <Container>
            <Grid columns={{ initial: "1", sm: "7" }} gap={"2"}>
                <Box className=' hidden md:block md:col-span-2 px-3 py-3 overflow-auto'>
                    <Suspense fallback={<GenreListSkeleton />}>
                        <GenreList
                            genres={genreResults}
                            count={count}
                            selectedGenre={searchParams.genres}
                        />
                    </Suspense>
                </Box>
                <Box className='md:col-span-5' px={"3"}>
                    <Flex gap={"2"} p={"2"} direction={"column"}>
                        <Heading size={"8"} className='border-b-2 px-1 pb-1'>
                            Games
                        </Heading>
                        <Flex direction={"row"} gap={"2"}>
                            <PlatformGameFilterList platforms={platforms} />
                            <SortSelector />
                            <ResetButton />
                        </Flex>
                        <Suspense fallback={<GameGridSkeleton />}>
                            <GameGrid
                                platform={searchParams.platform}
                                genre={searchParams.genres}
                                pagesss={searchParams.page}
                                order={searchParams.sortOrder}
                                search={searchParams.search}
                            />
                        </Suspense>
                    </Flex>
                </Box>
            </Grid>
        </Container>
    );
};

export default GameListPage;
