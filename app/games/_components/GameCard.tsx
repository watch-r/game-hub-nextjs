import { Game } from "@/app/lib/TypeDefinations";
import { Card, Flex, Heading } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import CriticScore from "../../../components/CriticScore";
import PlatformIconList from "../../../components/PlatformIconList";
import getCroppedImageUrl from "../../lib/image-url";

const GameCard = ({ game }: { game: Game }) => {
    return (
        <Card style={{ maxWidth: 400 }}>
            <Flex direction={"column-reverse"} gap={"2"} justify={"between"}>
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
                    <Link href={`games/${game.id}`}>
                        <Heading size={"5"} weight={"medium"} className='p-3'>
                            {game.name}
                        </Heading>
                    </Link>
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
