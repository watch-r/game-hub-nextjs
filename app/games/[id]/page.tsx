import { fetchGameById } from "@/app/api/FetchData";
import { Box, Container, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import delay from "delay";
import Image from "next/image";
import React from "react";
import { Platform } from "../_components/GameGrid";
import TopBadge from "./_components/TopBadge";
import ReactMarkdown from "react-markdown";

interface Props {
    params: { id: string };
}

interface ratings {
    id: number;
    title: string;
    count: number;
    percent: number;
}

export interface GameById {
    name: string;
    description: string; // | undefined
    background_image: string;
    released: string;
    background_image_additional: string;
    metacritic: number;
    rating: number;
    ratings: ratings[];
    platforms: Platformo[];
    playtime: string;
}
export interface Platformo {
    platform: { id: string; name: string; slug: string };
    released_at?: string;
    requirements?: string;
}

const GameDetailsPage = async ({ params }: Props) => {
    // await delay(2000);
    const game: GameById = await fetchGameById(params.id);
    // console.log(game.platforms);
    return (
        <Container p={"2"}>
            <Grid columns={{ initial: "1", sm: "7" }} gap={"3"}>
                <Box className="md:col-span-4">
                    <Flex direction={"column"}>
                        <Heading size={"6"}>{game.name}</Heading>
                        <TopBadge
                            released_at={game.released}
                            platforms={game.platforms}
                            playtime={game.playtime}
                        />
                        <Text
                            dangerouslySetInnerHTML={{
                                __html: game.description,
                            }}
                        />
                        {game.rating}
                    </Flex>
                </Box>
                <Box>
                    <Image
                        src={game.background_image}
                        alt="Image of ..."
                        width={"300"}
                        height={"300"}
                    />
                    <Image
                        src={game.background_image_additional}
                        alt="Image of ..."
                        width={"300"}
                        height={"300"}
                    />
                </Box>
            </Grid>
        </Container>
    );
};

export default GameDetailsPage;
