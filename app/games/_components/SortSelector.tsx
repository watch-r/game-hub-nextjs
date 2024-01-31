"use client";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { Platform } from "./GameGrid";

const SortSelector = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const sorOrder = [
        {
            value: "all",
            label: "Relevence",
        },
        {
            value: "name",
            label: "Name",
        },
        {
            value: "-added",
            label: "Date Added",
        },
        {
            value: "-released",
            label: "Release Date",
        },
        {
            value: "-metacritic ",
            label: "Popularity",
        },
        {
            value: "-rating",
            label: "Average Rating",
        },
    ];
    return (
        <Select
            defaultValue={searchParams.get("sortOrder") || "all"}
            onValueChange={(order) => {
                const params = new URLSearchParams();
                if (order !== "all") params.append("sortOrder", order);
                if (searchParams.get("genres"))
                    params.append("genres", searchParams.get("genres")!);
                if (searchParams.get("platform"))
                    params.append("platform", searchParams.get("platform")!);
                const query = params.size ? "?" + params.toString() : "";
                router.push("/games" + query);
            }}
        >
            <SelectTrigger className="w-[180px] border-full">
                <SelectValue placeholder="Select a Platform" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>---Sort Order:---</SelectLabel>
                    {sorOrder.map((order) => (
                        <SelectItem
                            key={order.value}
                            value={order.value}
                        >
                            {order.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default SortSelector;
