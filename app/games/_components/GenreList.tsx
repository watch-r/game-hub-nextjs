"use client";
import { Button } from "@/components/ui/button";
import { ActivityLogIcon } from "@radix-ui/react-icons";
import { Avatar, Badge, Box, Flex, Heading, Section } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import getCroppedImageUrl from "../../../components/image-url";
import { useState } from "react";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}
type MyPageProps = {
    genres: Genre[];
    count: number;
    selectedGenre: string;
};

const GenreList = ({ genres, count, selectedGenre }: MyPageProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [selected, setSelected] = useState(false);
    return (
        <>
            <Heading size={"6"} className="border-b-2 px-1 py-3">
                Genres
            </Heading>
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
                <Button
                    onClick={() => {
                        const params = new URLSearchParams();
                        if (searchParams.get("platform"))
                            params.append(
                                "platform",
                                searchParams.get("platform")!
                            );
                        const query = params.size
                            ? "?" + params.toString()
                            : "";
                        router.push("/games" + query);
                    }}
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
                            fallback="?"
                            size="1"
                            src={getCroppedImageUrl(genre.image_background)}
                            alt=""
                            radius="large"
                        />
                        <Button
                            onClick={() => {
                                const params = new URLSearchParams();
                                if (genre.id)
                                    params.append("genres", genre.slug);
                                if (searchParams.get("platform"))
                                    params.append(
                                        "platform",
                                        searchParams.get("platform")!
                                    );
                                if (searchParams.get("sortOrder"))
                                    params.append(
                                        "sortOrder",
                                        searchParams.get("sortOrder")!
                                    );
                                const query = params.size
                                    ? "?" + params.toString()
                                    : "";
                                router.push("/games" + query);
                            }}
                            variant={null}
                            className="sm:text-sm"
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
