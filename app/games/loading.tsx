import GenreList from "@/app/games/GenreList";
import React from "react";
import GameGrid from "./GameGrid";
import { Grid, Container, Box } from "@radix-ui/themes";
import GenreListSkeleton from "./GenreListSkeleton";
import GameGridSkeleton from "./GameGridSkeleton";

const LoadingOfGamePage = () => {
    return (
        <Container>
            <Grid columns={{ initial: "1", sm: "5" }} gap={"3"}>
                <Box className='hidden md:block '>
                    <GenreListSkeleton />
                </Box>
                <Box className='md:col-span-4' p={"3"}>
                    <GameGridSkeleton />
                </Box>
            </Grid>
        </Container>
    );
};

export default LoadingOfGamePage;
