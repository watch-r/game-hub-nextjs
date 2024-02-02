import { Card, Flex, Heading } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import CriticScore from "../../../components/CriticScore";
import PlatformIconList from "../../../components/PlatformIconList";
import getCroppedImageUrl from "../../lib/image-url";
import { Game } from "./GameGrid";

const GameCard = ({ game }: { game: Game }) => {
    return (
        <Card style={{ maxWidth: 400 }}>
            <Link href={`games/${game.id}`}>
                <Flex
                    direction={"column-reverse"}
                    gap={"2"}
                    justify={"between"}
                >
                    <Flex direction={"column"} align={"center"}>
                        <Image
                            // getCroppedImageUrl(game.background_image)
                            src={
                                game.background_image
                                    ? getCroppedImageUrl(game.background_image)
                                    : "/stock_image.jpeg"
                            }
                            alt=''
                            width={"300"}
                            height={"200"}
                            className='rounded-md'
                            priority
                        />
                        <Heading size={"5"} weight={"medium"} className='p-3'>
                            {game.name}
                        </Heading>
                    </Flex>
                    <Flex justify={"between"}>
                        <PlatformIconList
                            platforms={game.parent_platforms.map(
                                (p) => p.platform
                            )}
                        />
                        <CriticScore score={game.metacritic} />
                    </Flex>
                </Flex>
            </Link>
        </Card>
    );
};

export default GameCard;
