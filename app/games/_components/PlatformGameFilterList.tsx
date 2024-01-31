"use client";
// import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import { Platform } from "./GameGrid";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// const searchParams = useSearchParams();

type MyPageProps = {
    platforms: Platform[];
};

const PlatformGameFilterList = ({ platforms }: MyPageProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    return (
        <Select
            defaultValue={searchParams.get("platform") || "all"}
            onValueChange={(p) => {
                const params = new URLSearchParams();
                if (p !== "all") params.append("platform", p);
                if (searchParams.get("genres"))
                    params.append("genres", searchParams.get("genres")!);
                if (searchParams.get("sortOrder"))
                    params.append("sortOrder", searchParams.get("sortOrder")!);
                const query = params.size ? "?" + params.toString() : "";
                router.push("/games" + query);
            }}
        >
            <SelectTrigger className="w-[180px] border-full">
                <SelectValue placeholder="Select a Platform" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value={"all"}>All</SelectItem>
                <SelectGroup>
                    <SelectLabel>---Platforms:---</SelectLabel>
                    {platforms.map((p: Platform) => (
                        <SelectItem key={p.id} value={p.id.toString()}>
                            {p.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default PlatformGameFilterList;

{
    /* <Select.Root
            defaultValue={searchParams.get("platform") || "all"}
            size={"3"}
            onValueChange={(p) => {
                const params = new URLSearchParams();
                if (p !== "all") params.append("platform", p);
                if (searchParams.get("genres"))
                    params.append("genres", searchParams.get("genres")!);
                const query = params.size ? "?" + params.toString() : "";
                router.push("/games" + query);
            }}
        >
            <Select.Trigger placeholder="Choose" />
            <Select.Content position="popper">
                <Select.Group>
                    <Select.Label>---Platforms:---</Select.Label>
                    <Select.Item value={"all"}>All</Select.Item>
                    {platforms.map((p: Platform) => (
                        <Select.Item key={p.slug} value={(p.id).toString()}>
                            {p.name}
                        </Select.Item>
                    ))}
                </Select.Group>
            </Select.Content>
        </Select.Root> */
}
