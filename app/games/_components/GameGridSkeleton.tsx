import { Grid } from "@radix-ui/themes";
import React from "react";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGridSkeleton = () => {
    const skeletons = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    return (
        <Grid
                columns={{ initial: "1", sm: "2", md: "3" }}
                gap={"2"}
                p={"4"}
            >
            {skeletons.map((skeleton) => (
                <GameCardSkeleton key={skeleton} />
            ))}
        </Grid>
    );
};

export default GameGridSkeleton;
