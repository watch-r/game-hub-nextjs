import { Box, Container, Flex, Grid } from "@radix-ui/themes";
import GameGrid from "./_components/GameGrid";
import PlatformGameFilter from "./_components/PlatformGameFilter";
import Genre from "./_components/Genre";

export interface searchProps {
    searchParams: { platform: string; genres: string };
}

const GameListPage = async ({ searchParams }: searchProps) => {
    // await delay(2000); // Simulate loading time. Remove in production!
    // console.log(searchParams.platform);
    return (
        <Container>
            <Grid columns={{ initial: "1", sm: "7" }} gap={"3"}>
                <Box className=" hidden md:block md:col-span-2 p-3">
                    <Genre  />
                </Box>

                <Box className="md:col-span-5" p={"3"}>
                    <Flex gap={"2"} p={"2"} direction={"column"}>
                        <PlatformGameFilter />
                        <GameGrid platform={searchParams.platform} genre={searchParams.genres}/>
                    </Flex>
                </Box>
            </Grid>
        </Container>
    );
};

export default GameListPage;
