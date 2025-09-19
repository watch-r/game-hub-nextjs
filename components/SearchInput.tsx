"use client";

import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchCheck } from "lucide-react";

interface SearchProps {
    isMobile?: boolean;
}

const SearchInput = ({ isMobile = false }: SearchProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const searchParams = useSearchParams();

    // Updates the search param while keeping other filters intact
    const handleSearch = (searchQuery: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (searchQuery) {
            params.set("search", searchQuery);
        } else {
            params.delete("search");
        }

        const query = params.toString() ? `?${params.toString()}` : "";
        router.push("/browse" + query);
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (ref.current) handleSearch(ref.current.value);
            }}
            className="flex items-center space-x-2 w-full"
        >
            {/* Input with icon */}
            <div className="relative flex-1">
                <Input
                    ref={ref}
                    placeholder="Search games…"
                    className="pr-10 w-full sm:w-[250px] md:w-[300px]"
                />
                <SearchCheck className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            {/* Show button only if isMobile is true */}
            {isMobile && (
                <Button type="submit" variant="outline">
                    Search
                </Button>
            )}
        </form>
    );
};

export default SearchInput;
