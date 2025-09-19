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
        <Card className="overflow-hidden pt-0 mt-0">
            <Image
                width={1000}
                height={500}
                src={
                    game.background_image
                        ? getCroppedImageUrl(game.background_image)
                        : "/stock-image.png"
                }
                alt={game.name}
                className="object-cover "
            />

            <div className="flex justify-center space-x-1 pl-2 pr-2">
                <h1>Critic Score: </h1>
                <CriticScore score={game.metacritic} />
            </div>
            <CardContent className="text-center">
                <Link href={`/browse/${game.id}`}>
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                        {game.name}
                    </h4>
                </Link>
            </CardContent>
            <CardFooter className="flex flex-col justify-between">
                <div className="flex flex-row items-center gap-2 text-sm">
                    <Badge variant="destructive">{game.rating}</Badge>
                    <span className="text-xs text-muted-foreground">
                        {game.released}
                    </span>
                </div>
                <div className="flex flex-row items-center gap-2">
                    {game.parent_platforms ? (
                        <>
                            <PlatformIconList
                                platforms={game.parent_platforms
                                    .map((p) => p.platform)
                                    .slice(0, 3)} // 👈 show only first 3
                            />
                            {game.parent_platforms.length > 3 && (
                                <span className="text-xs font-semibold text-gray-500">
                                    +{game.parent_platforms.length - 3}
                                </span>
                            )}
                        </>
                    ) : (
                        <HelpCircle color="grey" />
                    )}
                </div>
            </CardFooter>
        </Card>
    );
};

export default GameCard;
