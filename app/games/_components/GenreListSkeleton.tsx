"use client";
import { Button } from "@/components/ui/button";
import { ActivityLogIcon } from "@radix-ui/react-icons";
import {
    Avatar,
    Badge,
    Box,
    Container,
    Flex,
    Heading,
    Section,
} from "@radix-ui/themes";
import { Skeleton } from "@/components/ui/skeleton";

const GenreListSkeleton = () => {
    const results = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ];
    //#e379a2
    return (
        <div>
            <Heading size={"6"} className='border-b-2 p-1'>
                Genres
            </Heading>
            <Flex align={"center"} gap={"1"} p={"1"}>
                <Avatar
                    fallback={
                        <Box width='4' height='4'>
                            <ActivityLogIcon />
                        </Box>
                    }
                    size='1'
                    alt='For resetting the Genre'
                    radius='medium'
                />
                <Button variant={null}>All</Button>
                <Skeleton className='h-7 w-[30px]' />
            </Flex>
            {results.map((genre) => (
                <div key={genre} className='py-2'>
                    <Flex align={"center"} gap={"5"}>
                        <Avatar fallback='?' size='1' alt='' radius='large' />
                        <Skeleton className='h-6 w-20' />
                        <Skeleton className='h-4 w-10' />
                    </Flex>
                </div>
            ))}
        </div>
    );
};

export default GenreListSkeleton;
