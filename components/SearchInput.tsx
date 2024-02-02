"use client";
import React, { useRef } from "react";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";
import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useRouter, useSearchParams } from "next/navigation";

const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSearch = (searchQuery: any) => {
        const params = new URLSearchParams();
        if (searchQuery) params.append("search", searchQuery);
        if (searchParams.get("genres"))
            params.append("genres", searchParams.get("genres")!);
        if (searchParams.get("sortOrder"))
            params.append("sortOrder", searchParams.get("sortOrder")!);
        if (searchParams.get("platform"))
            params.append("platform", searchParams.get("platform")!);
        const query = params.size ? "?" + params.toString() : "";
        router.push("/games" + query);
    };
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) handleSearch(ref.current?.value);
            }}
        >
            <TextField.Root>
                <TextField.Slot>
                    <MagnifyingGlassIcon height='13' width='13' />
                </TextField.Slot>
                <TextField.Input
                    ref={ref}
                    radius='full'
                    placeholder='Search Game…'
                    style={{ maxWidth: 400 }}
                />
            </TextField.Root>
        </form>
    );
};

export default SearchInput;
