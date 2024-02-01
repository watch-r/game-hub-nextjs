import { Box, Flex } from "@radix-ui/themes";
import {
    FaAndroid,
    FaApple,
    FaGlobe,
    FaLinux,
    FaPlaystation,
    FaWindows,
    FaXbox,
} from "react-icons/fa6";
import { IconType } from "react-icons/lib";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendogamecube } from "react-icons/si";
import { Platform } from "../app/games/_components/GameGrid";

const PlatformIconList = ({ platforms }: { platforms: Platform[] }) => {
    const iconsMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendogamecube,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: FaGlobe,
        android: FaAndroid,
    };
    return (
        <Flex direction={"row"} gap={"2"} p={"2"}>
            {platforms
                .filter((platform) => iconsMap[platform.slug])
                .map((platform) => {
                    const IconComponent = iconsMap[platform.slug];
                    return (
                        <Box key={platform.slug}>
                            <IconComponent color="grey" />
                        </Box>
                    );
                })}
        </Flex>
    );
};

export default PlatformIconList;
