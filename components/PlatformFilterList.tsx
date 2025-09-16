"use client";
import { Platform } from "@/lib/Typedefinations";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

type MyPageProps = {
    platforms: Platform[];
};

const PlatformGameFilterList = ({ platforms }: MyPageProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleValueChange = (p: string) => {
        // Clone existing search params
        const params = new URLSearchParams(searchParams.toString());

        // Update platform
        if (p === "all") {
            params.delete("platform");
        } else {
            params.set("platform", p);
        }

        // Push updated query
        const query = params.toString() ? `?${params.toString()}` : "";
        router.push("/browse" + query);
    };

    return (
        <Select
            defaultValue={searchParams.get("platform") || "all"}
            onValueChange={handleValueChange}
        >
            <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select a platform" />
            </SelectTrigger>
            <SelectContent className="h-60">
                <SelectItem value="all">All</SelectItem>
                {platforms.map((p) => (
                    <SelectItem key={p.id} value={p.id.toString()}>
                        {p.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default PlatformGameFilterList;
