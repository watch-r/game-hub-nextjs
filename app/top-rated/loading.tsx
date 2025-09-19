import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const LoadingPageOfTopRated = () => {
    return (
        <div className="p-6 mx-auto w-full max-w-6xl">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Top Rated Games
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="space-y-2 h-80">
                        <Skeleton className="h-40 w-full rounded-md" />{" "}
                        {/* Thumbnail */}
                        <Skeleton className="h-5 w-3/4" /> {/* Title */}
                        <Skeleton className="h-4 w-1/2" /> {/* Subtitle/meta */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LoadingPageOfTopRated;
