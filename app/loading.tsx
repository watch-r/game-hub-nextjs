// app/loading/HomeLoading.tsx
"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function HomeLoading() {
    return (
        <div className="min-h-screen bg-background text-foreground space-y-16">
            {/* Hero Section Skeleton */}
            <section className="relative py-16 md:py-24 lg:py-32 text-center h-96 bg-gray-900 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
                <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-6">
                    <Skeleton className="h-12 md:h-16 lg:h-20 w-3/4 mx-auto rounded-lg" />
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto">
                        <Skeleton className="h-12 w-full rounded-full" />
                        <Skeleton className="h-12 w-32 rounded-full" />
                    </div>
                </div>
            </section>

            {/* Genre Tabs Skeleton */}
            <section className="py-8 text-center">
                <div className="flex justify-center gap-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Skeleton key={i} className="h-10 w-24 rounded-md" />
                    ))}
                </div>
            </section>

            {/* Carousel Skeleton */}
            <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <Card key={i} className="animate-pulse">
                            <CardContent className="p-4 space-y-3">
                                <Skeleton className="h-40 w-full rounded-md" />
                                <Skeleton className="h-5 w-3/4 mx-auto" />
                                <Skeleton className="h-4 w-1/2 mx-auto" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}
