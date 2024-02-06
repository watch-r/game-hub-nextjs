import { GameById } from "@/app/lib/TypeDefinations";
import { fetchGameById } from "@/app/lib/data";
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
import Descriptions from "./_components/Description";
import TopBadge from "./_components/TopBadge";
import PieChartEx from "./_components/PieChart";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// const PieChartEx = dynamic(() => import("./_components/PieChart"), {
//     ssr: false,
// });

type MyPageProps = {
    params: { id: string };
};

const GameDetailsPage = async ({ params }: MyPageProps) => {
    // await delay(2000);
    const game: GameById = await fetchGameById(params.id);
    return (
        <Container p={"2"}>
            <Heading size={"8"}>{game.name}</Heading>
            <Separator my="2" size="4" />
            <Grid columns={{ initial: "1", sm: "7", md: "9" }} gap={"3"}>
                <Box className="md:col-span-4 lg:col-span-6">
                    <Flex direction={"column"} gap={"3"}>
                        <TopBadge
                            released_at={game.released}
                            parent_platforms={game.parent_platforms}
                            playtime={game.playtime}
                            score={game.metacritic}
                        />
                        <Descriptions description={game.description} />
                        {game.rating}
                    </Flex>
                </Box>
                <Box className="md:col-span-3 m-1">
                    <Flex gap={"2"} direction={"column"}>
                        <Card>
                            <Heading align={"center"}>Ratings</Heading>
                            <Suspense
                                fallback={<Skeleton className="w-96 h-96" />}
                            >
                                <PieChartEx ratings={game.ratings} />
                            </Suspense>
                        </Card>
                        <Image
                            src={
                                game.background_image
                                    ? game.background_image
                                    : "/stock_image.jpeg"
                            }
                            alt="Image of ..."
                            width={"300"}
                            height={"300"}
                        />
                        <Image
                            src={
                                game.background_image_additional
                                    ? game.background_image_additional
                                    : "/placeholder001.png"
                            }
                            alt="Image of ..."
                            width={"300"}
                            height={"300"}
                        />
                    </Flex>
                </Box>
            </Grid>
        </Container>
    );
};

export default GameDetailsPage;
