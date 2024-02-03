import { Platform } from "@/app/lib/TypeDefinations";
import PlatformIconList from "@/components/PlatformIconList";
import { ComponentNoneIcon } from "@radix-ui/react-icons";
import { Badge, Flex } from "@radix-ui/themes";
import CriticScore from "../../../../components/CriticScore";

type MyPageProps = {
    released_at: string;
    playtime: string;
    score: number;
    parent_platforms: { platform: Platform }[];
};

const TopBadge = ({
    released_at,
    playtime,
    score,
    parent_platforms,
}: MyPageProps) => {
    return (
        <Flex direction={"column-reverse"} gap={"1"}>
            <Flex direction={"row"} gap={"3"} align={"center"}>
                <Badge variant='surface' radius='full'>
                    {released_at || "No-date"}
                </Badge>
                <Badge variant='surface' size={"1"} highContrast>
                    AVERAGE PLAYTIME: {playtime + " HOURS" || "N/A"}
                </Badge>
            </Flex>
            <Flex direction={"row"} gap={"2"} p={"2"}>
                <CriticScore score={score} />
                {parent_platforms.length != 0 ? (
                    <PlatformIconList
                        platforms={parent_platforms.map((p) => p.platform)}
                    />
                ) : (
                    <ComponentNoneIcon color='grey' />
                )}
            </Flex>
        </Flex>
    );
};

export default TopBadge;
