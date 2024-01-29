import { Box, Container, Grid } from "@radix-ui/themes";
import GameGridSkeleton from "./_components/GameGridSkeleton";
import GenreListSkeleton from "./_components/GenreListSkeleton";

const LoadingOfGamePage = () => {
    return (
        <Container>
            <Grid columns={{ initial: "1", sm: "7" }} gap={"3"}>
                <Box className="hidden md:block md:col-span-2 p-3">
                    <GenreListSkeleton />
                </Box>
                <Box className="md:col-span-5" p={"3"}>
                    <GameGridSkeleton />
                </Box>
            </Grid>
        </Container>
    );
};

export default LoadingOfGamePage;
