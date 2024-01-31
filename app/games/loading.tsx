import { Box, Container, Flex, Grid, Heading } from "@radix-ui/themes";
import GameGridSkeleton from "./_components/GameGridSkeleton";
import GenreListSkeleton from "./_components/GenreListSkeleton";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingOfGamePage = () => {
    return (
        <Container>
            <Grid columns={{ initial: "1", sm: "7" }} gap={"3"}>
                <Box className="hidden md:block md:col-span-2 p-3">
                    <GenreListSkeleton />
                </Box>
                <Box className="md:col-span-5" p={"3"}>
                    <Flex gap={"2"} p={"2"} direction={"column"}>
                        <Heading size={"6"} className="border-b-2 px-1 py-3">
                            Games
                        </Heading>
                        <Skeleton width={170} height={40} />
                        <GameGridSkeleton />
                    </Flex>
                </Box>
            </Grid>
        </Container>
    );
};

export default LoadingOfGamePage;
