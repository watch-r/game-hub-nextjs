import Image from "next/image";
import React from "react";
import getCroppedImageUrl from "@/lib/image-url";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Game } from "@/lib/Typedefinations";
import { Badge } from "./ui/badge";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
import { HelpCircle } from "lucide-react";
import Link from "next/link";

interface GameCArdProps {
    game: Game;
}
const GameCard = ({ game }: GameCArdProps) => {
    return (
        <Card className="group overflow-hidden pt-0 mt-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border-muted-foreground/20">
            <div className="relative overflow-hidden">
                <Image
                    width={1000}
                    height={500}
                    src={
                        game.background_image
                            ? getCroppedImageUrl(game.background_image)
                            : "/stock-image.png"
                    }
                    alt={game.name}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2">
                    <Badge className="bg-black/60 backdrop-blur-md text-white border-none">
                        {game.rating}
                    </Badge>
                </div>
            </div>

            <div className="flex justify-center items-center gap-2 py-3">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Critic Score
                </span>
                <CriticScore score={game.metacritic} />
            </div>
            <CardContent className="text-center py-4">
                <Link href={`/browse/${game.id}`} className="group/title">
                    <h4 className="text-xl font-bold tracking-tight transition-colors duration-200 group-hover/title:text-primary">
                        {game.name}
                    </h4>
                </Link>
            </CardContent>
            <CardFooter className="flex flex-col gap-3 pb-6">
                <div className="flex flex-row items-center justify-center gap-2 text-sm">
                    <span className="text-xs text-muted-foreground font-medium">
                        Released: {game.released}
                    </span>
                </div>
                <div className="flex flex-row items-center justify-center gap-2">
                    {game.parent_platforms ? (
                        <>
                            <PlatformIconList
                                platforms={game.parent_platforms
                                    .map((p) => p.platform)
                                    .slice(0, 3)} // 👈 show only first 3
                            />
                            {game.parent_platforms.length > 3 && (
                                <span className="text-xs font-semibold text-muted-foreground">
                                    +{game.parent_platforms.length - 3}
                                </span>
                            )}
                        </>
                    ) : (
                        <HelpCircle className="w-4 h-4 text-muted-foreground" />
                    )}
                </div>
            </CardFooter>
        </Card>
    );
};

export default GameCard;
