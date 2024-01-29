// 'use client'
import GenreList from "@/app/games/_components/GenreList";
import { Box, Container, Flex, Grid } from "@radix-ui/themes";
import GameGrid from "./_components/GameGrid";
import PlatformGameFilter from "./_components/PlatformGameFilter";

const GameListPage = async () => {
    // await delay(2000); // Simulate loading time. Remove in production!
    return (
        <Container>
            <Grid columns={{ initial: "1", sm: "7" }} gap={"3"}>
                <Box className=" hidden md:block md:col-span-2 p-3">
                    <GenreList />
                </Box>

                <Box className="md:col-span-5" p={"3"}>
                    <Flex gap={"2"} p={"2"} direction={"column"}>
                        <PlatformGameFilter />
                        <GameGrid />
                    </Flex>
                </Box>
            </Grid>
        </Container>
    );
};

export default GameListPage;
