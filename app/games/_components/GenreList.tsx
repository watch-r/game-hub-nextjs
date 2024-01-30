"use client";
import { Button } from "@/components/ui/button";
import { ActivityLogIcon } from "@radix-ui/react-icons";
import { Avatar, Badge, Box, Flex, Section } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import getCroppedImageUrl from "../../../components/image-url";

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
};

const GenreList = ({ genres, count }: MyPageProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    return (
        <div>
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
                                    const query = params.size
                                        ? "?" + params.toString()
                                        : "";
                                    router.push("/games" + query);
                                }}
                                variant={null}
                                className="sm:text-sm"
                            >
                                {genre.name}
                            </Button>
                            <Badge size={"1"}>{genre.games_count}</Badge>
                        </Flex>
                    </div>
                ))}
            </Section>
        </div>
    );
};

export default GenreList;
