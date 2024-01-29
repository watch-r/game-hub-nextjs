import { Avatar, Container, Flex, Text, Badge } from "@radix-ui/themes";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GenreListSkeleton = () => {
    const results = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ];
    return (
        <Container>
            <ul className="overflow-auto">
                {results.map((genre) => (
                    <li key={genre} className="p-3  ">
                        <Flex align={"center"} gap={"5"}>
                            <Avatar
                                fallback="?"
                                size="2"
                                alt=""
                                radius="small"
                            />
                            <Skeleton width={180} />
                            <Skeleton />
                        </Flex>
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default GenreListSkeleton;
