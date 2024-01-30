import { fetchApi, fetchData } from "@/app/api/FetchData";
import GameCard from "@/app/games/_components/GameCard";
import { Grid } from "@radix-ui/themes";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}
export interface Platform {
    id: string;
    name: string;
    slug: string;
}
interface Props {
    platform: string;
    genre: string;
}

const GameGrid = async ({ platform, genre }: Props) => {
    // console.log(genre);
    const results = await fetchApi("games?", platform, genre);
    return (
        <>
            {/* {error && <Text>{error}</Text>} */}
            <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap={"2"}>
                {results.map((game: Game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </Grid>
        </>
    );
};

export default GameGrid;
