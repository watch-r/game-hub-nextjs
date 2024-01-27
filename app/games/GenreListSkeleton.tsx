import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GenreListSkeleton = () => {
    return <Skeleton count={19} className="p-2 my-2"/>;
};

export default GenreListSkeleton;
