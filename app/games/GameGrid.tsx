"use client";

import useGames from "@/hooks/useGames";
import { Text } from "@radix-ui/themes";

const GameGrid = () => {
    const { games, error } = useGames();
    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </>
    );
};

export default GameGrid;
