"use client";

import GameCard from "@/components/GameCard";
import useGames from "@/hooks/useGames";
import { Grid, Text } from "@radix-ui/themes";

const GameGrid = () => {
    const { games, error } = useGames();
    return (
        <>
            {error && <Text>{error}</Text>}
            <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap={"2"}>
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </Grid>
        </>
    );
};

export default GameGrid;
