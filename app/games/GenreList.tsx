"use client";
import React from "react";
import useGenres, { Genre } from "../../hooks/useGenres";
import useData from "@/hooks/useData";
import { Avatar, Container, Flex, Text,Badge } from "@radix-ui/themes";
import Image from "next/image";
import getCroppedImageUrl from "../../services/image-url";
// import { Badge } from "@/components/ui/badge";


const GenreList = () => {
    const { data } = useGenres();
    return (
        <Container>
            <ul className="overflow-auto">
                {data.map((genre) => (
                    <li key={genre.id} className='p-3 '>
                        <Flex align={"center"} gap={"2"}>
                            <Avatar
                                fallback='?'
                                size='2'
                                src={getCroppedImageUrl(genre.image_background)}
                                alt=''
                                radius='small'
                            />
                            <Text className='sm:text-sm'>{genre.name}</Text>
                            <Badge size={'1'}>
                                {genre.games_count}
                            </Badge>
                        </Flex>
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default GenreList;
