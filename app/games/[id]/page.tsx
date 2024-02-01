import { fetchGameById } from "@/app/api/FetchData";
import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

interface Props {
    params: { id: string };
}

interface ratings {
    id: number;
    title: string;
    count: number;
    percent: number;
}

interface Game {
    name: string;
    description: string; // | undefined
    background_image: string;
    released: string;
    background_image_additional: string;
    metacritic: number;
    rating: number;
    ratings: ratings[];
}

const GameDetailsPage = async ({ params }: Props) => {
    const game: Game = await fetchGameById(params.id);
    return (
        <Container>
            <Flex direction={"column"}>
                <Heading size={"6"}>{game.name}</Heading>
                <Text
                    className='text-sm font-light'
                    dangerouslySetInnerHTML={{ __html: game.description }}
                />
                {game.rating}
                <Image
                    src={game.background_image}
                    alt='Image of ...'
                    width={"300"}
                    height={"300"}
                />
                <Image
                    src={game.background_image_additional}
                    alt='Image of ...'
                    width={"300"}
                    height={"300"}
                ></Image>
            </Flex>
        </Container>
    );
};

export default GameDetailsPage;
