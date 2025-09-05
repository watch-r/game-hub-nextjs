import { Platform } from "@/lib/Typedefinations";
import {
    Monitor,
    Gamepad2,
    Smartphone,
    Globe,
    Apple,
    HelpCircle, // Fallback icon
} from "lucide-react";
import LinuxIcon from "./Icons/Linux";
import PlaystationIcon from "./Icons/Playstation";
import XboxIcon from "./Icons/Xbox";
import NintendoIcon from "./Icons/Nintendo";
import IosIcon from "./Icons/IosIcon";

interface PlatformIconListProps {
    platforms?: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
    const iconsMap: Record<string, React.ElementType> = {
        pc: Monitor,
        playstation: PlaystationIcon,
        xbox: XboxIcon,
        nintendo: NintendoIcon,
        mac: Apple,
        linux: LinuxIcon,
        ios: IosIcon,
        web: Globe,
        android: Smartphone,
    };

    return (
        <div className="flex flex-row gap-2 p-2">
            {platforms?.map((platform) => {
                const IconComponent = iconsMap[platform.slug] || HelpCircle; // fallback
                return (
                    <IconComponent
                        key={platform.id}
                        className="w-4 h-4 text-gray-500"
                    />
                );
            })}
        </div>
    );
};

export default PlatformIconList;
