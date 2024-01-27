import { Game } from "@/hooks/useGames";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    const myLoader = () => {
        return game.background_image;
    };
    return (
        <Card style={{ maxWidth: 400 }}>
            <Flex direction={"column-reverse"} gap={"2"} justify={"between"}>
                <Flex direction={"column"} align={"center"}>
                    <Image
                        objectFit='contain'
                        loader={myLoader}
                        src={game.background_image}
                        alt=''
                        width={"300"}
                        height={"300"}
                        className='rounded-md'
                    />
                    <Heading size={"5"} weight={"medium"} className="p-3">
                        {game.name}
                    </Heading>
                </Flex>
                <Flex justify={"between"}>
                    <PlatformIconList
                        platforms={game.parent_platforms.map((p) => p.platform)}
                    />
                    <CriticScore score={game.metacritic} />
                </Flex>
            </Flex>
        </Card>
    );
};

export default GameCard;
