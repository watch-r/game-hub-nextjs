import GameCard from "@/app/games/_components/GameCard";
import {  Gamep } from "@/app/lib/TypeDefinations";
import { fetchGamesWithParameters } from "@/app/lib/data";
import { Flex, Grid } from "@radix-ui/themes";
import Pagination from "./Pagination";

type MyPageProps = {
    platform: string;
    genre: string;
    pagesss: string;
    order: string;
    search: string;
};

const GameGrid = async ({
    pagesss,
    platform,
    genre,
    order,
    search,
}: MyPageProps) => {
    // console.log(genre);
    const pageSize = 9;
    const page = parseInt(pagesss) || 1;
    const { count, results } = await fetchGamesWithParameters(
        pageSize.toString(),
        page.toString(),
        platform,
        genre,
        order,
        search
    );
    return (
        <>
            <Flex gap={"3"} direction={"column"} align={"center"}>
                <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap={"2"}>
                    {results.map((gamePiece: Gamep) => (
                        <GameCard key={gamePiece.id} gameResult={gamePiece} />
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
