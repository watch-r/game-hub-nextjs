import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
// import { Card } from "@radix-ui/themes";

const GameCarousel = () => {
    return (
        <Carousel
            
            className='w-40'
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                        key={index}
                        className='md:basis-1/2 lg:basis-1/3'
                    >
                        <div className='p-1'>
                            <Card>
                                <CardContent className='flex aspect-square items-center justify-center p-6'>
                                    <span className='text-3xl font-semibold'>
                                        {index + 1}
                                    </span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default GameCarousel;
