// app/games/[id]/loading.tsx
"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function GameDetailsSkeleton() {
    return (
        <div className="mx-auto max-w-6xl p-6 space-y-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row gap-6">
                {/* Game Poster */}
                <Skeleton className="w-full md:w-1/3 aspect-video rounded-xl" />

                {/* Game Info */}
                <div className="flex-1 space-y-4">
                    <Skeleton className="h-8 w-2/3" /> {/* Game title */}
                    <Skeleton className="h-5 w-1/3" /> {/* Release date */}
                    <Skeleton className="h-5 w-1/4" /> {/* Rating */}
                    {/* Buttons */}
                    <div className="flex gap-3">
                        <Skeleton className="h-10 w-32 rounded-md" />
                        <Skeleton className="h-10 w-32 rounded-md" />
                    </div>
                </div>
            </div>

            {/* Media */}
            <section>
                <Skeleton className="h-6 w-28 mb-3" /> {/* Section title */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <Skeleton key={i} className="aspect-video rounded-md" />
                    ))}
                </div>
            </section>

            {/* Description */}
            <section>
                <Skeleton className="h-6 w-36 mb-3" /> {/* Section title */}
                <Card>
                    <CardContent className="p-4 space-y-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Skeleton key={i} className="h-4 w-full" />
                        ))}
                    </CardContent>
                </Card>
            </section>

            {/* Extra Info */}
            <section className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardContent className="p-4 space-y-3">
                        <Skeleton className="h-6 w-28" />
                        <div className="flex flex-wrap gap-2">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <Skeleton
                                    key={i}
                                    className="h-6 w-16 rounded-md"
                                />
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-4 space-y-3">
                        <Skeleton className="h-6 w-32" />
                        <div className="flex flex-wrap gap-2">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <Skeleton
                                    key={i}
                                    className="h-6 w-20 rounded-md"
                                />
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* Developers + Stores */}
            <section className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardContent className="p-4 space-y-3">
                        <Skeleton className="h-6 w-40" />
                        {Array.from({ length: 3 }).map((_, i) => (
                            <Skeleton key={i} className="h-4 w-2/3" />
                        ))}
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-4 space-y-3">
                        <Skeleton className="h-6 w-32" />
                        {Array.from({ length: 3 }).map((_, i) => (
                            <Skeleton key={i} className="h-4 w-1/2" />
                        ))}
                    </CardContent>
                </Card>
            </section>
        </div>
    );
}
