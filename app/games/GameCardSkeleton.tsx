import Skeleton from "@/components/Skeleton";
import { Card, Flex } from "@radix-ui/themes";

const GameCardSkeleton = () => {
    return (
        <Card style={{ maxWidth: 400 }}>
            <Flex direction={"column-reverse"} gap={"2"} justify={"between"}>
                <Flex direction={"column"} align={"center"}>
                    <Skeleton
                        count={2}
                        height={30}
                        containerClassName='flex-5'
                    />
                    <Skeleton count={5} height={30} />
                </Flex>
                <Flex justify={"between"}>
                    <Skeleton count={2} />
                    <Skeleton count={1} />
                </Flex>
            </Flex>
        </Card>
    );
};

export default GameCardSkeleton;
