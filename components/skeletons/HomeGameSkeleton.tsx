import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export function HomeGameSkeleton() {
    return (
        <div>
            <section className="py-8 text-center h-auto space-y-6">
                {/* Tabs Skeleton */}
                <div className="flex justify-center">
                    <div className="flex justify-center gap-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Skeleton key={i} className="h-8 w-20 rounded-md" />
                        ))}
                    </div>
                </div>
            </section>
            {/* Carousel Skeleton */}
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <Card key={i}>
                            <CardContent className="p-4 space-y-3">
                                {/* Game image placeholder */}
                                <Skeleton className="h-40 w-full rounded-md" />
                                {/* Game title */}
                                <Skeleton className="h-5 w-3/4 mx-auto" />
                                {/* Small text (like release date / genre) */}
                                <Skeleton className="h-4 w-1/2 mx-auto" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
