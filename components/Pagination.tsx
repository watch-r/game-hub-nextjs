"use client";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

type MyPageProps = {
    itemCount: number;
    pageSize: number;
    currentpage: number;
};

const GamePagination = ({ itemCount, pageSize, currentpage }: MyPageProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    let pageCount = Math.ceil(itemCount / pageSize);

    // API limit handling
    if (pageCount <= 1) return null;
    if (
        searchParams.has("platform") ||
        searchParams.has("genres") ||
        searchParams.has("search")
    )
        if (pageCount > 1112) pageCount = 1111;

    const changePage = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", page.toString());
        router.push("?" + params.toString());
    };

    return (
        <Pagination className="p-3">
            <PaginationContent>
                {/* Previous button */}
                <PaginationItem>
                    <Button
                        variant={"ghost"}
                        onClick={() => changePage(currentpage - 1)}
                        disabled={currentpage === 1}
                    >
                        <ArrowLeft />
                        Previous
                    </Button>
                </PaginationItem>

                {/* Current page */}
                <PaginationItem>
                    <PaginationLink isActive>{currentpage}</PaginationLink>
                </PaginationItem>

                {/* Ellipsis + last page */}
                {currentpage < pageCount - 1 && (
                    <>
                        <PaginationItem>
                            <PaginationLink
                                onClick={() => changePage(currentpage + 1)}
                            >
                                {currentpage + 1}
                            </PaginationLink>
                        </PaginationItem>
                        {currentpage < pageCount - 2 && (
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                        )}
                        <PaginationItem>
                            <PaginationLink
                                onClick={() => changePage(pageCount)}
                            >
                                {pageCount}
                            </PaginationLink>
                        </PaginationItem>
                    </>
                )}

                {/* Next button */}
                <PaginationItem>
                    <Button
                        variant={"ghost"}
                        onClick={() => changePage(currentpage + 1)}
                        disabled={currentpage === pageCount}
                    >
                        Next
                        <ArrowRight />
                    </Button>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default GamePagination;
