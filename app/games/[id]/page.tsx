import { GameById } from "@/app/lib/TypeDefinations";
import { fetchGameById } from "@/app/lib/data";
import {
    Box,
    Container,
    Flex,
    Grid,
    Heading,
    Separator,
} from "@radix-ui/themes";
import Image from "next/image";
import Descriptions from "./_components/Description";
import TopBadge from "./_components/TopBadge";

type MyPageProps = {
    params: { id: string };
};

const GameDetailsPage = async ({ params }: MyPageProps) => {
    // await delay(2000);
    // const res = await fetch(`http://localhost:3000/api/games/${params.id}`);
    // const game: GameById = await res.json();
    const game: GameById = await fetchGameById(params.id);
    // Promise.all()
    return (
        <Container p={"2"}>
            <Grid columns={{ initial: "1", sm: "7" }} gap={"3"}>
                <Box className='md:col-span-4'>
                    <Flex direction={"column"} gap={"3"}>
                        <Heading size={"8"}>{game.name}</Heading>
                        <Separator my='2' size='4' />
                        <TopBadge
                            released_at={game.released}
                            platforms={game.platforms}
                            playtime={game.playtime}
                            score={game.metacritic}
                        />
                        <Descriptions description={game.description} />
                        {game.rating}
                    </Flex>
                </Box>
                <Box className='md:col-span-3'>
                    <Image
                        src={
                            game.background_image
                                ? game.background_image
                                : "/stock_image.jpeg"
                        }
                        alt='Image of ...'
                        width={"300"}
                        height={"300"}
                    />
                    <Image
                        src={
                            game.background_image_additional
                                ? game.background_image_additional
                                : "/placeholder001.png"
                        }
                        alt='Image of ...'
                        width={"300"}
                        height={"300"}
                    />
                </Box>
            </Grid>
        </Container>
    );
};

export default GameDetailsPage;
