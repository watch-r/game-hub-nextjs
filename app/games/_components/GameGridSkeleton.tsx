import { Skeleton } from "@/components/ui/skeleton";
import { Flex, Grid } from "@radix-ui/themes";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGridSkeleton = () => {
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <>
            <Flex gap={"3"} direction={"column"} align={"center"}>
                <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap={"2"}>
                    {skeletons.map((skeleton) => (
                        <GameCardSkeleton key={skeleton} />
                    ))}
                </Grid>
                <Skeleton className="w-12 h-3" />
            </Flex>
        </>
    );
};

export default GameGridSkeleton;
