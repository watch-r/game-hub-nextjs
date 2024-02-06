"use client";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import GameCard from "@/app/games/_components/GameCard";
import { Gamep } from "@/app/lib/TypeDefinations";
import Slider from "react-slick";

type Props = {
    games: any;
    speed: number;
};

export default function SimpleSlider({ games,speed }: Props) {
    var settings = {
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: speed,
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
