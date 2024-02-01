import { Box, Flex, Text,Badge } from "@radix-ui/themes";
import React from "react";
import { Platform } from "../../_components/GameGrid";
import PlatformIconList from "@/components/PlatformIconList";
import { Platformo } from "../page";
import { iconsMap } from "./IconMap";
// import {  } from "@/components/ui/badge";


interface Props {
    released_at: string;
    platforms: Platformo[];
    playtime: string;
}

const TopBadge = ({ released_at, platforms, playtime }: Props) => {
    
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
        <Flex direction={"row"} gap={"3"} align={'center'}>
            <Badge variant="surface"radius="full">{released_at}</Badge>
            <Badge variant="surface" size={'1'} highContrast>AVERAGE PLAYTIME: {playtime} HOURS </Badge>
            <Flex direction={"row"} gap={"2"} p={"2"}>
                {iconArray.map((IconComponent:any, index:number) => {
                    return (
                        <Box key={index}>
                            <IconComponent color="grey" />
                        </Box>
                    );
                })}
            </Flex>
        </Flex>
    );
};

export default TopBadge;
