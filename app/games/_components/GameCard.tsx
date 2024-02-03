import { Gamep } from "@/app/lib/TypeDefinations";
import { Card, Flex, Heading } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import CriticScore from "../../../components/CriticScore";
import PlatformIconList from "../../../components/PlatformIconList";
import getCroppedImageUrl from "../../lib/image-url";
import { ComponentNoneIcon } from "@radix-ui/react-icons";

const GameCard = ({ gameResult }: { gameResult: Gamep }) => {
    return (
        <Card style={{ maxWidth: 400 }}>
            <Flex direction={"column-reverse"} gap={"2"} justify={"between"}>
                <Flex direction={"column"} align={"center"}>
                    <Image
                        // getCroppedImageUrl(game.background_image)
                        src={
                            gameResult.background_image
                                ? getCroppedImageUrl(
                                      gameResult.background_image
                                  )
                                : "/stock_image.jpeg"
                        }
                        alt=''
                        width={"300"}
                        height={"200"}
                        className='rounded-md'
                        priority
                    />
                    <Link href={`games/${gameResult.id}`}>
                        <Heading size={"5"} weight={"medium"} className='p-3'>
                            {gameResult.name}
                        </Heading>
                    </Link>
                </Flex>
                <Flex justify={"between"}>
                    {gameResult.parent_platforms ? (
                        <PlatformIconList
                            platforms={gameResult.parent_platforms.map(
                                (p) => p.platform
                            )}
                        />
                    ):<ComponentNoneIcon color="grey"/>}
                    <CriticScore score={gameResult.metacritic} />
                </Flex>
            </Flex>
        </Card>
    );
};

export default GameCard;
