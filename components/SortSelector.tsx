"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const SortSelector = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleValueChange = (order: string) => {
        // Clone existing search params
        const params = new URLSearchParams(searchParams.toString());

        // Update sortOrder
        if (order === "all") {
            params.delete("sortOrder");
        } else {
            params.set("sortOrder", order);
        }

        // Push updated query
        const query = params.toString() ? `?${params.toString()}` : "";
        router.push("/browse" + query);
    };

    const sortOrder = [
        { value: "all", label: "Relevance" },
        { value: "name", label: "Name" },
        { value: "-updated", label: "Date Added" },
        { value: "-released", label: "Release Date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average Rating" },
    ];

    return (
        <Select
            defaultValue={searchParams.get("sortOrder") || "all"}
            onValueChange={handleValueChange}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="h-52">
                {sortOrder.map((order) => (
                    <SelectItem key={order.value} value={order.value}>
                        {order.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default SortSelector;
