"use client";
// import { Select } from "@radix-ui/themes";
import React, { useState } from "react";
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
            defaultValue={"all"}
            onValueChange={(p) => {
                const query = p !== "all" ? `?platform=${p}` : "";
                router.push("/games" + query);
                router.refresh();
            }}
        >
            <SelectTrigger className="w-[180px] border-full">
                <SelectValue placeholder="Select a Platform" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value={"all"}>All</SelectItem>
                <SelectGroup>
                    <SelectLabel>---Platforms:---</SelectLabel>
                    {/* @ts-ignore */}

                    {platforms.map((p: Platform) => (
                        <SelectItem key={p.id} value={p.id}>
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
//     onValueChange={(p) => {
//         const query = p !== "all" ? `?platform=${p}` : "";
//         router.push("/games" + query);
//     }}
// >
//     <Select.Trigger placeholder="Choose" />
//     <Select.Content position="popper">
//         <Select.Group>
//             <Select.Label>Platforms:</Select.Label>
//             <Select.Item value={"all"}>All</Select.Item>
//             {platforms.map((p: Platform) => (
//                 <Select.Item key={p.id} value={p.slug}>
//                     {p.name}
//                 </Select.Item>
//             ))}
//         </Select.Group>
//     </Select.Content>
// </Select.Root>
{
}
