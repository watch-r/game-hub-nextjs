import { GameById, Movies } from "@/app/lib/TypeDefinations";
import {
    fetchGameById,
    fetchGameMovies,
    fetchScreenShots,
} from "@/app/lib/data";
import getCroppedImageUrl from "@/app/lib/image-url";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Box,
    Card,
    Container,
    Flex,
    Grid,
    Heading,
    Separator,
} from "@radix-ui/themes";
import Image from "next/image";
import { Suspense } from "react";
import Descriptions from "./_components/Description";
import PieChartEx from "./_components/PieChart";
import ShowScreenShots from "./_components/ShowScreenShots";
import TextOverImageComponent from "./_components/TextOverImageComponent";
import TopBadge from "./_components/TopBadge";
import WhereToBuy from "./_components/WhereToBuy";
import VideoSlide from "./_components/VideoSlide";

type MyPageProps = {
    params: { id: string };
};

const GameDetailsPage = async ({ params }: MyPageProps) => {
    // await delay(2000);
    const game: GameById = await fetchGameById(params.id);
    const screenShotfetches = await fetchScreenShots(params.id);
    const movies: Movies = await fetchGameMovies(params.id);
    return (
        <Container p={"2"}>
            <TextOverImageComponent
                name={game.name}
                url={
                    game.background_image
                        ? game.background_image
                        : "/stock_image5.jpeg"
                }
            />
            <Separator my="1" size="4" />
            <Heading size={"8"} className="px-4">
                About
            </Heading>
            <Grid
                columns={{ initial: "1", sm: "7", md: "9" }}
                gap={"3"}
                p={"3"}
            >
                <Box className="md:col-span-4 lg:col-span-6">
                    <Flex direction={"column"} gap={"3"}>
                        <TopBadge
                            released_at={game.released}
                            parent_platforms={game.parent_platforms}
                            playtime={game.playtime}
                            score={game.metacritic}
                        />
                        <Descriptions description={game.description} />
                        {/* {game.rating} */}
                        <Card className="px-1 content-center">
                            <Heading className="px-4">Game Screenshots</Heading>
                            <ShowScreenShots
                                screenShotResults={screenShotfetches}
                            />
                        </Card>
                    </Flex>
                </Box>

                <Box className="md:col-span-3 m-1 mt-4">
                    <Flex gap={"2"} direction={"column"}>
                        <Card>
                            <VideoSlide
                                movieResults={movies.results}
                                imageUrl={
                                    game.background_image
                                        ? getCroppedImageUrl(
                                              game.background_image
                                          )
                                        : "/stock_image.jpeg"
                                }
                            />
                        </Card>
                        <Card>
                            <Heading align={"center"}>Ratings</Heading>
                            <Suspense
                                fallback={<Skeleton className="w-96 h-96" />}
                            >
                                <PieChartEx ratings={game.ratings} />
                            </Suspense>
                        </Card>
                        <WhereToBuy id={params.id} />
                    </Flex>
                </Box>
            </Grid>
        </Container>
    );
};

export default GameDetailsPage;
