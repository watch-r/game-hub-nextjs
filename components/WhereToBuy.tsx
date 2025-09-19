
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";import SteamIcon from "./Icons/SteamIcon";
import { JSX } from "react";
import XboxIcon from "./Icons/Xbox";
import PlaystationIcon from "./Icons/Playstation";
import { AppleIcon, PhoneIcon } from "lucide-react";
import NintendoIcon from "./Icons/Nintendo";
import ItchIoIcon from "./Icons/ItchIoIcon";
import EpicGamesIcon from "./Icons/EpicGamesIcon";
import { GameStore, Store } from "@/lib/Typedefinations";


type Props = {
    id: string;
};

const storesIcons: { [key: string]: string } = {
    "1": "Steam",
    "2": "Xbox",
    "3": "PlayStation",
    "4": "Apple Store",
    "5": "GOG",
    "6": "Nintendo Switch",
    "7": "Xbox 360",
    "8": "Google Play",
    "9": "Itch.io",
    "11": "Epic Games",
};

const storeIcons: { [key: string]: JSX.Element } = {
    "1": <SteamIcon className="w-5 h-5" />,
    "2": <XboxIcon className="w-5 h-5" />,
    "3": <PlaystationIcon className="w-5 h-5" />,
    "4": <AppleIcon className="w-5 h-5" />,
    "5": <span className="text-lg font-bold">GOG</span>, // fallback since lucide has no icon
    "6": <NintendoIcon className="w-5 h-5" />,
    "7": <XboxIcon className="w-5 h-5" />,
    "8": <PhoneIcon className="w-5 h-5" />,
    "9": <ItchIoIcon className="w-5 h-5" />,
    "11": <EpicGamesIcon className="w-5 h-5" />,
};

const WhereToBuy = async ({ id }: Props) => {
    const storeData = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/games?type=stores&id=${id}`
    );
    const stores: GameStore = await storeData.json();
    return (
        <Card className="p-4">
            <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold">
                    Where To Buy
                </CardTitle>
            </CardHeader>
            <CardContent>
                {stores.results.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {stores.results.map((store: Store) => {
                            const storeId = store.store_id.toString();
                            return (
                                <Button
                                    key={store.id}
                                    asChild
                                    variant="outline"
                                    className="justify-start w-full"
                                >
                                    <Link
                                        href={store.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        {storeIcons[storeId]}
                                        <span>{storesIcons[storeId]}</span>
                                    </Link>
                                </Button>
                            );
                        })}
                    </div>
                ) : (
                    <p className="text-muted-foreground text-sm">
                        Store unavailable.
                    </p>
                )}
            </CardContent>
        </Card>
    );
};

export default WhereToBuy;
