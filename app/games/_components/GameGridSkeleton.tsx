import { Grid } from "@radix-ui/themes";
import React from "react";
import GameCardSkeleton from "./GameCardSkeleton";
import { SkeletonTheme } from "react-loading-skeleton";

const GameGridSkeleton = () => {
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <SkeletonTheme baseColor={"#9c9595"} highlightColor={"#919090"}>
            <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap={"2"}>
                {skeletons.map((skeleton) => (
                    <GameCardSkeleton key={skeleton} />
                ))}
            </Grid>
        </SkeletonTheme>
    );
};

export default GameGridSkeleton;
