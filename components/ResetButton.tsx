"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";

const ResetButton = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleReset = () => {
        // Clone existing search params
        const params = new URLSearchParams(searchParams.toString());

        // Remove filters you want to reset
        params.delete("platform");
        params.delete("sortOrder");
        params.delete("genres");
        params.delete("page"); // optional: reset pagination

        // Keep search if it exists
        // params.get("search") is already in params from clone

        const query = params.toString() ? `?${params.toString()}` : "";
        router.push("/browse" + query);
        router.refresh();
    };

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant="outline"
                        onClick={handleReset}
                        className="p-2 rounded-full"
                    >
                        <RefreshCcw className="w-5 h-5" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>Reset</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default ResetButton;
