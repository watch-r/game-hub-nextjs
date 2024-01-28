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

const GameGrid = async () => {
    const res = await fetch(
        `${process.env.RAWG_API_BASE_URL}/games?key=${process.env.RAWG_API_KEY}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    const { results } = await res.json();

    return (
        <>
            {/* {error && <Text>{error}</Text>} */}
            <Grid
                columns={{ initial: "1", sm: "2", md: "3" }}
                gap={"2"}
                p={"2"}
            >
                {results.map((game: Game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </Grid>
        </>
    );
};

export default GameGrid;
