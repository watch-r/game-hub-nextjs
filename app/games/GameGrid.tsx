"use client";

import GameCard from "@/app/games/GameCard";
import useGames from "@/hooks/useGames";
import { Grid, Text } from "@radix-ui/themes";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
    const { data, error, isLoading } = useGames();
    const skeletons = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    return (
        <>
            {error && <Text>{error}</Text>}
            <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap={"2"}>
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardSkeleton key={skeleton} />
                    ))}
                {data.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </Grid>
        </>
    );
};

export default GameGrid;
