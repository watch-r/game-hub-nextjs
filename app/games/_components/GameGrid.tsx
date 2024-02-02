import GameCard from "@/app/games/_components/GameCard";
import { fetchGamesWithParameters } from "@/app/lib/data";
import { Flex, Grid } from "@radix-ui/themes";
import Pagination from "./Pagination";
import { Game } from "@/app/lib/TypeDefinations";

type MyPageProps = {
    platform: string;
    genre: string;
    pagesss: string;
    order: string;
};

const GameGrid = async ({ pagesss, platform, genre, order }: MyPageProps) => {
    // console.log(genre);
    const pageSize = 9;
    const page = parseInt(pagesss) || 1;
    const { count, results } = await fetchGamesWithParameters(
        pageSize.toString(),
        page.toString(),
        platform,
        genre,
        order
    );
    return (
        <>
            <Flex gap={"3"} direction={"column"} align={"center"}>
                <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap={"2"}>
                    {results.map((game: Game) => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </Grid>
                <Pagination
                    itemCount={count}
                    pageSize={pageSize}
                    currentpage={page}
                />
            </Flex>
        </>
    );
};

export default GameGrid;
