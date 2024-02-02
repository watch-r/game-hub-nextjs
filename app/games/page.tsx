import { Box, Container, Flex, Grid, Heading } from "@radix-ui/themes";
import fetchGenres, { fetchGames, fetchPlatforms } from "../lib/data";
import GameGrid from "./_components/GameGrid";
import GenreList from "./_components/GenreList";
import PlatformGameFilterList from "./_components/PlatformGameFilterList";
import SortSelector from "./_components/SortSelector";
export interface searchProps {
    searchParams: {
        platform: string;
        genres: string;
        page: string;
        sortOrder: string;
    };
    selectedGenre: never;
}

const GameListPage = async ({ searchParams, selectedGenre }: searchProps) => {
    // await delay(3000); // Simulate loading time. Remove in production!
    // console.log(searchParams.sortOrder);
    // console.log(searchParams.genres);
    const genreResults = await fetchGenres();
    const platforms = await fetchPlatforms();
    const { count } = await fetchGames();

    return (
        <Container>
            <Grid columns={{ initial: "1", sm: "7" }} gap={"2"}>
                <Box className=' hidden md:block md:col-span-2 px-3 py-3 overflow-auto'>
                    <GenreList
                        genres={genreResults}
                        count={count}
                        selectedGenre={selectedGenre}
                    />
                </Box>
                <Box className='md:col-span-5' px={"3"}>
                    <Flex gap={"2"} p={"2"} direction={"column"}>
                        <Heading size={"8"} className='border-b-2 px-1 pb-1'>
                            Games
                        </Heading>
                        <Flex direction={"row"} gap={"2"}>
                            <PlatformGameFilterList platforms={platforms} />
                            <SortSelector />
                        </Flex>
                        <GameGrid
                            platform={searchParams.platform}
                            genre={searchParams.genres}
                            pagesss={searchParams.page}
                            order={searchParams.sortOrder}
                        />
                    </Flex>
                </Box>
            </Grid>
        </Container>
    );
};

export default GameListPage;
