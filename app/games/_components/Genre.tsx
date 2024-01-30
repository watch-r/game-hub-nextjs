import { fetchData } from "@/app/api/FetchData";
import React from "react";
import GenreList from "./GenreList";



const Genre = async () => {
    const { results } = await fetchData("genres?");
    const { count } = await fetchData("games?");
    return <GenreList genres={results} count={count} />;
};

export default Genre;
