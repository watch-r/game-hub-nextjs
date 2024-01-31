"use client";
import { Button } from "@/components/ui/button";
import { ActivityLogIcon } from "@radix-ui/react-icons";
import { Avatar, Badge, Box, Container, Flex, Section } from "@radix-ui/themes";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GenreListSkeleton = () => {
    const results = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ];
    return (
        <div>
            <SkeletonTheme baseColor={"#9c9595"} highlightColor={"#919090"}>
                <Section className="overflow-auto">
                    <Flex align={"center"} gap={"1"} p={"1"}>
                        <Avatar
                            fallback={
                                <Box width="4" height="4">
                                    <ActivityLogIcon />
                                </Box>
                            }
                            size="1"
                            alt="For resetting the Genre"
                            radius="medium"
                        />
                        <Button variant={null}>All</Button>
                        <Badge size={"1"}>
                            <Skeleton width={50} />
                        </Badge>
                    </Flex>
                    {results.map((genre) => (
                        <div key={genre} className="py-2">
                            <Flex align={"center"} gap={"5"}>
                                <Avatar
                                    fallback="?"
                                    size="2"
                                    alt=""
                                    radius="small"
                                />
                                <Skeleton width={80} />
                                <Skeleton width={50} />
                            </Flex>
                        </div>
                    ))}
                </Section>
            </SkeletonTheme>
        </div>
    );
};

export default GenreListSkeleton;
