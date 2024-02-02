import { Platformo } from "@/app/lib/TypeDefinations";
import { Badge, Box, Flex } from "@radix-ui/themes";
import CriticScore from "../../../../components/CriticScore";
import { iconsMap } from "./IconMap";

interface Props {
    released_at: string;
    platforms: Platformo[];
    playtime: string;
    score: number;
}

const TopBadge = ({ released_at, platforms, playtime, score }: Props) => {
    const iconSet = new Set();
    let IconComponent;
    // Loop through the platforms and add the icon components to the Set
    platforms.forEach((platformo) => {
        IconComponent = iconsMap[platformo.platform.slug];
        iconSet.add(IconComponent);
    });

    // Convert the Set to an array
    const iconArray = Array.from(iconSet);
    return (
        <Flex direction={"column-reverse"} gap={"1"}>
            <Flex direction={"row"} gap={"3"} align={"center"}>
                <Badge variant='surface' radius='full'>
                    {released_at}
                </Badge>
                <Badge variant='surface' size={"1"} highContrast>
                    AVERAGE PLAYTIME: {playtime} HOURS{" "}
                </Badge>
            </Flex>
            <Flex direction={"row"} gap={"2"} p={"2"}>
                <CriticScore score={score} />
                {iconArray.map((IconComponent: any, index: number) => {
                    return (
                        <Box key={index}>
                            <IconComponent color='grey' />
                        </Box>
                    );
                })}
            </Flex>
        </Flex>
    );
};

export default TopBadge;
