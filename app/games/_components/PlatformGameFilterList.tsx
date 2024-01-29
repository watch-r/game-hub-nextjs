"use client";
// import { Select } from "@radix-ui/themes";
import React from "react";
import { Platform } from "./GameGrid";
import { useRouter } from "next/navigation";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type MyPageProps = {
    platforms: Platform[];
};

const PlatformGameFilterList = ({ platforms }: MyPageProps) => {
    const router = useRouter();
    return (
        <Select
            onValueChange={(p) => {
                const query = p ? `?platform=${p}` : "";
                router.push("/games" + query);
            }}
        >
            <SelectTrigger className="w-[180px] border-full">
                <SelectValue placeholder="Select a Platform" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Platforms:</SelectLabel>
                    {platforms.map((p: Platform) => (
                        <SelectItem key={p.id} value={p.slug}>
                            {p.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default PlatformGameFilterList;

// <Select.Root
//     size={"3"}
// onValueChange={(p) => {
//     const query = p ? `?platform=${p}` : "";
//     router.push("/games" + query);
// }}
// >
//     <Select.Trigger placeholder="Choose" />
//     <Select.Content position="popper">
//         <Select.Group>
//             <Select.Label>Platforms:</Select.Label>
//             {platforms.map((p: Platform) => (
//                 <Select.Item key={p.id} value={p.slug}>
//                     {p.name}
//                 </Select.Item>
//             ))}
//         </Select.Group>
//     </Select.Content>
// </Select.Root>
