import { Box, Container, Grid } from "@radix-ui/themes";
import React from "react";
import GameGrid from "./GameGrid";

const GameListPage = () => {
    return (
        <Container>
            <Grid columns={{ initial: "1", sm: "5" }} gap={'3'}>
                <Box className='bg-orange-500 hidden md:block '> aside</Box>
                <Box className='md:col-span-4' p={'3'}>
                    <GameGrid />
                </Box>
            </Grid>
        </Container>
    );
};

export default GameListPage;
