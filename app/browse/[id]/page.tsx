// app/games/[id]/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface GameDetailsProps {
    params: { id: string };
}

async function getGameDetails(id: string) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/games?type=gameById&id=${id}`,
        { cache: "no-store" }
    );
    if (!res.ok) throw new Error("Failed to fetch game details");
    return res.json();
}

export default async function GameDetailsPage({ params }: GameDetailsProps) {
    const game = await getGameDetails(params.id);

    return (
        <div className="mx-auto max-w-6xl p-6 space-y-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row gap-6">
                {/* Game Poster */}
                <div className="relative w-full md:w-1/3 aspect-video">
                    <Image
                        src={game.background_image}
                        alt={game.name}
                        fill
                        className="rounded-xl object-cover"
                    />
                </div>

                {/* Game Info */}
                <div className="flex-1 space-y-4">
                    <h1 className="text-3xl font-bold">{game.name}</h1>
                    <p className="text-muted-foreground">
                        Released: {game.released}
                    </p>
                    <p className="text-yellow-500 font-semibold">
                        ⭐ {game.rating} / {game.rating_top}
                    </p>

                    {/* Wishlist & Tracking Placeholder */}
                    <div className="flex gap-3">
                        <Button variant="outline">Add to Wishlist</Button>
                        <Button variant="default">Track Progress</Button>
                    </div>
                </div>
            </div>

            {/* Media */}
            <section>
                <h2 className="text-xl font-semibold mb-2">Media</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {game.short_screenshots?.map((shot: any) => (
                        <div key={shot.id} className="relative aspect-video">
                            <Image
                                src={shot.image}
                                alt="screenshot"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Description */}
            <section>
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <Card>
                    <CardContent className="p-4">
                        <div
                            className="prose prose-sm max-w-none text-muted-foreground"
                            dangerouslySetInnerHTML={{
                                __html: game.description,
                            }}
                        />
                    </CardContent>
                </Card>
            </section>

            {/* Extra Info */}
            <section className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardContent className="p-4 space-y-2">
                        <h3 className="font-semibold text-lg">Genres</h3>
                        <div className="flex flex-wrap gap-2">
                            {game.genres?.map((g: any) => (
                                <Badge key={g.id} variant="secondary">
                                    {g.name}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-4 space-y-2">
                        <h3 className="font-semibold text-lg">Platforms</h3>
                        <div className="flex flex-wrap gap-2">
                            {game.platforms?.map((p: any) => (
                                <Badge key={p.platform.id}>
                                    {p.platform.name}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* Developer + Stores */}
            <section className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardContent className="p-4">
                        <h3 className="font-semibold text-lg">Developers</h3>
                        <ul className="list-disc ml-4">
                            {game.developers?.map((dev: any) => (
                                <li key={dev.id}>{dev.name}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-4">
                        <h3 className="font-semibold text-lg">
                            Available Stores
                        </h3>
                        <ul className="list-disc ml-4">
                            {game.stores?.map((store: any) => (
                                <li key={store.id}>
                                    <a
                                        href={`https://${store.store.domain}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        {store.store.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
}
