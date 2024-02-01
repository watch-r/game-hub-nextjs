"use client";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    DoubleArrowLeftIcon,
    DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
    itemCount: number;
    pageSize: number;
    currentpage: number;
}

const Pagination = ({ itemCount, pageSize, currentpage }: Props) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pageCount = Math.ceil(itemCount / pageSize);
    if (pageCount <= 1) return null; // If there is only one

    const changePage = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", page.toString());
        router.push("?" + params.toString());
    };

    return (
        <Flex align='center' gap='2'>
            <Text size='2'>
               page {currentpage} of {pageCount}
            </Text>
            <Button
                variant='surface'
                size='1'
                disabled={currentpage === 1}
                onClick={() => changePage(1)}
            >
                <DoubleArrowLeftIcon />
            </Button>
            <Button
                variant='surface'
                size='1'
                disabled={currentpage === 1}
                onClick={() => changePage(currentpage - 1)}
            >
                <ChevronLeftIcon />
            </Button>
            <Button
                variant='surface'
                size='1'
                disabled={currentpage === pageCount}
                onClick={() => changePage(currentpage + 1)}
            >
                <ChevronRightIcon />
            </Button>
            <Button
                variant='surface'
                size='1'
                disabled={currentpage === pageCount}
                onClick={() => changePage(pageCount)}
            >
                <DoubleArrowRightIcon />
            </Button>
        </Flex>
    );
};

export default Pagination;