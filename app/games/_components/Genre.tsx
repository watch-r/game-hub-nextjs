import { fetchData } from "@/app/api/FetchData";
import GenreList from "./GenreList";

interface Props {
    selectedGenre: string;
}

const Genre = async ({ selectedGenre }: Props) => {
    const { results } = await fetchData("genres?");
    const { count } = await fetchData("games?");
    return <GenreList genres={results} count={count} selectedGenre={selectedGenre}/>;
};

export default Genre;
