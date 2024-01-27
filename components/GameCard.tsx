import { Game } from "@/hooks/useGames";
import { Card, Flex, Heading } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    const myLoader = () => {
        return game.background_image;
    };
    return (
        <Card style={{maxWidth:400}}>
            <Flex direction={'column'} gap={'2'} align={"center"}>
                <Image
                    loader={myLoader}
                    src={game.background_image}
                    alt=''
                    width={"300"}
                    height={"300"}
                    className='rounded-md'
                ></Image>
                <Heading size={"5"} weight={"medium"}>
                    {game.name}
                </Heading>
            </Flex>
        </Card>
    );
};

export default GameCard;
