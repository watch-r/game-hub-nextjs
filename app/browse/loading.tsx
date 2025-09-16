import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const LoadingPageOfBrowse = () => {
    return (
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-row">
            {/* Sidebar Genres */}
            <section className="lg:max-w-1/3 md:max-w-1/2 w-full hidden md:block p-3">
                <h3 className="text-2xl sm:text-sm md:text-3xl text-center font-bold mb-2 pb-2 border-b-2">
                    Genres
                </h3>
                <div className="space-y-3">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <Skeleton key={i} className="h-6 w-full" />
                    ))}
                </div>
            </section>

            {/* Main Content */}
            <section className="lg:max-w-2/3 md:max-w-1/2 w-full p-3">
                {/* Dynamic Heading Skeleton */}
                <Skeleton className="h-10 w-2/3 mb-4" />

                {/* Filter Row */}
                <div className="flex flex-row space-x-3 pt-3 pb-3">
                    <Skeleton className="h-8 w-32" /> {/* Platform filter */}
                    <Skeleton className="h-8 w-28" /> {/* Sort selector */}
                    <Skeleton className="h-8 w-20" /> {/* Reset button */}
                </div>

                {/* Game Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="space-y-2">
                            <Skeleton className="h-40 w-full rounded-md" />{" "}
                            {/* Thumbnail */}
                            <Skeleton className="h-5 w-3/4" /> {/* Title */}
                            <Skeleton className="h-4 w-1/2" />{" "}
                            {/* Subtitle/meta */}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default LoadingPageOfBrowse;
