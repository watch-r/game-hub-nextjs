"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { fetchGameMovies } from "@/app/lib/data";

const VideoSlide = async () => {
    const movies = await fetchGameMovies("3498");
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
    };

    return (
        <>
            <Slider {...settings} className="slider-container">
                <Image
                    src={"/stock_image2.png"}
                    alt="Image of ..."
                    content="cover"
                    width={"500"}
                    height={"300"}
                    style={{ borderRadius: "10px" }}
                />
            </Slider>
        </>
    );
};

export default VideoSlide;
