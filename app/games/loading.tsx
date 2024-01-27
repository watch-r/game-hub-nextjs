import GenreList from "@/app/games/GenreList";
import React from "react";
import GameGrid from "./GameGrid";
import { Grid, Container, Box } from "@radix-ui/themes";

const LoadingOfGamePage = () => {
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

export default LoadingOfGamePage;
