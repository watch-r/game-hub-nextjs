import { GameStore, Store } from "@/app/lib/TypeDefinations";
import GOGgame from "@/components/gogGames";
import { FaPlaystation, FaSteam, FaXbox, FaItchIo } from "react-icons/fa";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";
import { BsNintendoSwitch } from "react-icons/bs";
import { RiXboxLine } from "react-icons/ri";
import { SiEpicgames } from "react-icons/si";
import Link from "next/link";
import { Button, Card, Flex, Grid, Heading } from "@radix-ui/themes";
import { fetchWhereToBuyGame } from "@/app/lib/data";

type MyPageProps = {
    id: string;
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
    const storeResults: GameStore = await fetchWhereToBuyGame(id);
    return (
        <>
            <Card>
                <Heading size={"5"} className="p-2">
                    Where To Buy
                </Heading>
                <Grid columns={"2"} gap={"1"}>
                    {storeResults.results.length != 0? storeResults.results.map((store: Store) => (
                        <Button key={store.id}>
                            <Link href={store.url}>
                                <Flex
                                    direction={"row"}
                                    align={"center"}
                                    gap={"1"}
                                >
                                    {storeIcons[store.store_id.toString()]}
                                    {stores[store.store_id.toString()]}
                                </Flex>
                            </Link>
                        </Button>
                    )): 'Store Unavailable.'}
                </Grid>
            </Card>
        </>
    );
};

export default WhereToBuy;
