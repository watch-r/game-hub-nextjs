import { Box, Container, Grid } from "@radix-ui/themes";
import React from "react";
import GameGrid from "./GameGrid";
import delay from "delay";
import GenreList from "@/app/games/GenreList";

const GameListPage = async () => {
    // await delay(2000);
    return (
        <Container>
            <Grid columns={{ initial: "1", sm: "7" }} gap={"3"}>
                <Box className=' hidden md:block md:col-span-2 p-3'>
                    <GenreList />
                </Box>
                <Box className='md:col-span-5' p={"3"}>
                    <GameGrid />
                </Box>
            </Grid>
        </Container>
    );
};

export default GameListPage;
