import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Game, ScreenShots } from "@/lib/Typedefinations";
import WhereToBuy from "@/components/WhereToBuy";

interface GameDetailsProps {
    params: { id: string };
}

async function getGameDetails(id: number) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/games?type=gameById&id=${id}`,
        { cache: "no-store" }
    );
    if (!res.ok) throw new Error("Failed to fetch game details");
    return res.json();
}

export default async function GameDetailsPage({ params }: GameDetailsProps) {
    const { id } = await params;
    const game: Game = await getGameDetails(parseInt(id));

    const screenShotsData = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/games?type=screenshots&id=${id}`
    );
    const screenShots: ScreenShots = await screenShotsData.json();

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
                    {screenShots.results?.map((shot: any) => (
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

            {/* Developer + Stores + Tags */}
            <section className="grid md:grid-cols-3 gap-6">
                <Card>
                    <CardContent className="p-4 space-y-3">
                        <h3 className="font-semibold text-lg">Developers</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {game.developers?.map((dev: any) => (
                                <div
                                    key={dev.id}
                                    className="relative rounded-lg overflow-hidden shadow-md group "
                                >
                                    {/* Background image */}
                                    <div className="absolute inset-0">
                                        <Image
                                            src={game.background_image}
                                            alt={dev.name}
                                            fill
                                            className="object-cover opacity-30 group-hover:opacity-50 transition"
                                        />
                                    </div>

                                    {/* Overlay */}
                                    <div className="relative z-10 flex items-center justify-center p-4 bg-black/40 group-hover:bg-black/60 transition">
                                        <span className="text-white text-sm font-medium text-center">
                                            {dev.name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <WhereToBuy id={id} />

                <Card>
                    <CardContent className="p-4 space-y-2">
                        <h3 className="font-semibold text-lg">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {game.tags?.map((tag: any) => (
                                <Badge key={tag.id} variant="outline">
                                    {tag.name}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
}
