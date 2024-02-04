"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { Card, CardContent } from "./ui/card";
import GameCard from "@/app/games/_components/GameCard";
import { Gamep } from "@/app/lib/TypeDefinations";

type Props = {
    games: any;
};

export default function SimpleSlider({ games }: Props) {
    const getRandomImageUrl = () => {
        const randomImageWidth = Math.floor(Math.random() * 800) + 400; // Random width between 400 and 1200
        const randomImageHeight = Math.floor(Math.random() * 800) + 400; // Random height between 400 and 1200
        return `https://via.placeholder.com/${randomImageWidth}x${randomImageHeight}`;
    };
    var settings = {
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Slider {...settings} className="slider-container">
            {games.map((gamePiece: Gamep) => (
                <div
                    className="m-3 p-2"
                    key={gamePiece.id}
                    style={{ maxWidth: 300 }}
                >
                    <GameCard gameResult={gamePiece} />
                </div>
            ))}
        </Slider>
    );
}
