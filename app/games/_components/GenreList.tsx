"use client";
import { Button } from "@/components/ui/button";
import { ActivityLogIcon } from "@radix-ui/react-icons";
import { Avatar, Badge, Box, Flex, Heading } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import getCroppedImageUrl from "../../lib/image-url";
import { Genre } from "@/app/lib/TypeDefinations";

type Genres = {
    genres: Genre[];
    count: number;
    selectedGenre: string;
};

const GenreList = ({ genres, count, selectedGenre }: Genres) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleClick = () => {
        const params = new URLSearchParams();
        if (searchParams.get("platform"))
            params.append("platform", searchParams.get("platform")!);
        if (searchParams.get("sortOrder"))
            params.append("sortOrder", searchParams.get("sortOrder")!);
        const query = params.size ? "?" + params.toString() : "";
        router.push("/games" + query);
    };

    const handleClickTwo = (genre: Genre) => {
        const params = new URLSearchParams();
        if (genre.id) params.append("genres", genre.slug);
        if (searchParams.get("platform"))
            params.append("platform", searchParams.get("platform")!);
        if (searchParams.get("sortOrder"))
            params.append("sortOrder", searchParams.get("sortOrder")!);
        const query = params.size ? "?" + params.toString() : "";
        router.push("/games" + query);
    };
    return (
        <>
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
                <Button
                    onClick={handleClick}
                    variant={null}
                    style={{
                        fontWeight:
                            selectedGenre === undefined ? "bolder" : "inherit",
                    }}
                >
                    All
                </Button>
                <Badge size={"1"}>{count}</Badge>
            </Flex>
            {genres.map((genre: Genre) => (
                <div key={genre.id}>
                    <Flex align={"center"}>
                        <Avatar
                            fallback='?'
                            size='1'
                            src={getCroppedImageUrl(genre.image_background)}
                            alt=''
                            radius='large'
                        />
                        <Button
                            onClick={() => handleClickTwo(genre)}
                            variant={null}
                            className='sm:text-sm'
                            style={{
                                fontWeight:
                                    selectedGenre === genre.slug
                                        ? "bolder"
                                        : "inherit",
                            }}
                        >
                            {genre.name}
                        </Button>
                        <Badge size={"1"}>{genre.games_count}</Badge>
                    </Flex>
                </div>
            ))}
        </>
    );
};

export default GenreList;
