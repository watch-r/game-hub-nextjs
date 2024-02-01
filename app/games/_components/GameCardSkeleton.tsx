import { Skeleton } from "@/components/ui/skeleton";
import { Card, Flex } from "@radix-ui/themes";

const GameCardSkeleton = () => {
    return (
        <Card style={{ maxWidth: 400 }}>
            <Flex direction={"column-reverse"} gap={"2"} justify={"between"}>
                <Flex direction={"column"} align={"center"} gap={"2"}>
                    <Skeleton className="h-[155px] w-[230px] rounded-xl" />
                    <Skeleton className="h-[60px] w-[230px] rounded-xl" />
                </Flex>
                <Flex justify={"between"}>
                    <Skeleton className="h-8 w-[150px]" />
                    <Skeleton className="h-8 w-[50px]" />
                </Flex>
            </Flex>
        </Card>
    );
};

export default GameCardSkeleton;
