import { Box, Container, Grid } from "@radix-ui/themes";
import GameGridSkeleton from "./_components/GameGridSkeleton";
import GenreListSkeleton from "./_components/GenreListSkeleton";

const LoadingOfGamePage = () => {
    return (
        <Container>
            <Grid columns={{ initial: "1", sm: "5" }} gap={"3"}>
                <Box className="hidden md:block ">
                    <GenreListSkeleton />
                </Box>
                <Box className="md:col-span-4" p={"3"}>
                    <GameGridSkeleton />
                </Box>
            </Grid>
        </Container>
    );
};

export default LoadingOfGamePage;
