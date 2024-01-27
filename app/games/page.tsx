import { Box, Container, Grid } from "@radix-ui/themes";
import React from "react";
import GameGrid from "./GameGrid";
import delay from "delay";
import GenreList from "@/app/games/GenreList";

const GameListPage = async () => {
    // await delay(2000);
    return (
        <Container>
            <Grid columns={{ initial: "1", sm: "5" }} gap={"3"}>
                <Box className='bg-orange-500 hidden md:block '>
                    <GenreList />
                </Box>
                <Box className='md:col-span-4' p={"3"}>
                    <GameGrid />
                </Box>
            </Grid>
        </Container>
    );
};

export default GameListPage;
