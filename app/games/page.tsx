import { Box, Container, Grid } from "@radix-ui/themes";
import React from "react";

const GameListPage = () => {
    return (
        <Container>
            <Grid columns={{initial:'1',sm:'5'}}>
                <Box className='bg-orange-500 hidden md:block ' > aside</Box>
                <Box className='bg-red-800 md:col-span-4'>main</Box>
            </Grid>
        </Container>
    );
};

export default GameListPage;
