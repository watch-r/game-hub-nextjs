"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Home } from "lucide-react";

export default function GameDetailsError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Game Details Error:", error);
    }, [error]);

    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-4">
            <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-2xl font-bold">
                    Oops! Game details failed to load
                </h2>
                <p className="text-muted-foreground max-w-md">
                    {error.message ||
                        "We couldn’t load the game information right now. Please try again or return home."}
                </p>

                <div className="flex gap-3 pt-4">
                    <Button
                        onClick={() => reset()}
                        className="flex items-center gap-2"
                    >
                        <RefreshCw className="h-4 w-4" />
                        Try again
                    </Button>
                    <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        onClick={() => (window.location.href = "/")}
                    >
                        <Home className="h-4 w-4" />
                        Go Home
                    </Button>
                </div>
            </div>
        </div>
    );
}
