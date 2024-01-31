import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Card, Flex } from "@radix-ui/themes";

const GameCardSkeleton = () => {
    return (
        <SkeletonTheme baseColor={"#9c9595"} highlightColor={"#919090"}>
            <Card style={{ maxWidth: 400 }}>
                <Flex
                    direction={"column-reverse"}
                    gap={"2"}
                    justify={"between"}
                >
                    <Flex direction={"column"} align={"center"} gap={"2"}>
                        <Skeleton height={150} width={400} />
                        <Skeleton height={60} width={400} />
                    </Flex>
                    <Flex justify={"between"}>
                        <Skeleton count={1} height={20} width={90} />
                        <Skeleton count={1} height={20} width={25} />
                    </Flex>
                </Flex>
            </Card>
        </SkeletonTheme>
    );
};

export default GameCardSkeleton;
