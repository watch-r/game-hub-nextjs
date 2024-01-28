import { Avatar, Badge, Container, Flex, Text } from "@radix-ui/themes";
import getCroppedImageUrl from "../../../components/image-url";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

const GenreList = async () => {
    const res = await fetch(
        `${process.env.RAWG_API_BASE_URL}/genres?key=${process.env.RAWG_API_KEY}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    const { results } = await res.json();
    return (
        <Container>
            <ul className="overflow-auto">
                {results.map((genre: Genre) => (
                    <li key={genre.id} className="p-3 ">
                        <Flex align={"center"} gap={"2"}>
                            <Avatar
                                fallback="?"
                                size="2"
                                src={getCroppedImageUrl(genre.image_background)}
                                alt=""
                                radius="small"
                            />
                            <Text className="sm:text-sm">{genre.name}</Text>
                            <Badge size={"1"}>{genre.games_count}</Badge>
                        </Flex>
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default GenreList;
