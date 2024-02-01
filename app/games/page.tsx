import { Box, Container, Flex, Grid, Heading } from "@radix-ui/themes";
import GameGrid from "./_components/GameGrid";
import PlatformGameFilter from "./_components/PlatformGameFilter";
import Genre from "./_components/Genre";
import delay from "delay";
import SortSelector from "./_components/SortSelector";
import { useSearchParams } from "next/navigation";
export interface searchProps {

    searchParams: {
        platform: string;
        genres: string;
        page: string;
        sortOrder: string;
    };
}

const GameListPage = async ({ searchParams }: searchProps) => {
    await delay(3000); // Simulate loading time. Remove in production!
    // console.log(searchParams.sortOrder); 
    // console.log(searchParams.genres); 

    return (
        <Container>
            <Grid columns={{ initial: "1", sm: "7" }} gap={"3"}>
                <Box className=" hidden md:block md:col-span-2 p-3 py-5 overflow-auto">
                    <Genre />
                </Box>
                <Box className="md:col-span-5" p={"3"}>
                    <Flex gap={"2"} p={"2"} direction={"column"}>
                        <Heading size={"6"} className="border-b-2 px-1 py-3">
                            Games
                        </Heading>
                        <Flex direction={"row"} gap={"2"}>
                            <PlatformGameFilter />
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
