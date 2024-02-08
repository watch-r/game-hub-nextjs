import { GameStore, Store } from "@/app/lib/TypeDefinations";
import GOGgame from "@/components/gogGames";
import { FaPlaystation, FaSteam, FaXbox, FaItchIo } from "react-icons/fa";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";
import { BsNintendoSwitch } from "react-icons/bs";
import { RiXboxLine } from "react-icons/ri";
import { SiEpicgames } from "react-icons/si";
import Link from "next/link";
import { Button, Flex } from "@radix-ui/themes";

type MyPageProps = {
    id?: string;
};

const WhereToBuy = async ({ id }: MyPageProps) => {
    const stores: { [key: string]: string } = {
        "1": "Steam",
        "2": "X Box",
        "3": "Play Station",
        "4": "Apple Store",
        "5": "GOG Game",
        "6": "Nintendo",
        "7": "X Box 360",
        "8": "Google Play",
        "9": "Itch.io",
        "11": "Epic Games",
    };
    const storeIcons: { [key: string]: JSX.Element } = {
        "1": <FaSteam />,
        "2": <FaXbox />,
        "3": <FaPlaystation />,
        "4": <IoLogoAppleAppstore />,
        "6": <BsNintendoSwitch />,
        "5": <GOGgame />,
        "7": <RiXboxLine />,
        "8": <IoLogoGooglePlaystore />,
        "9": <FaItchIo />,
        "11": <SiEpicgames />,
    };
    const storeResults: GameStore = await fetch(
        `https://api.rawg.io/api/games/55660/stores?key=f0c23de1296140f18266ab3e437d5736`
    ).then((res) => res.json());
    return (
        <Flex direction={"row"} gap={"5"}>
            {storeResults.results.map((store: Store) => (
                <Button key={store.id}>
                    <Link href={store.url} >
                        <Flex direction={"row"} align={"center"} gap={"1"}>
                            {storeIcons[store.store_id.toString()]}
                            {stores[store.store_id.toString()]}
                        </Flex>
                    </Link>
                </Button>
            ))}
        </Flex>
    );
};

export default WhereToBuy;
