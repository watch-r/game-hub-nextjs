import React from "react";

type MyPageProps = {
    platform: string;
    genre: string;
    page: string;
    sortOrder: string;
    search: string;
};
const GameGrid = ({
    platform,
    genre,
    page,
    sortOrder,
    search,
}: MyPageProps) => {
    return <div>GameGrid</div>;
};

export default GameGrid;
