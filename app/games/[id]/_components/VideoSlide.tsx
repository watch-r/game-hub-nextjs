"use client";
import { Videos } from "@/app/lib/TypeDefinations";
import { Heading } from "@radix-ui/themes";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

type MyPageProps = {
    movieResults: Videos[];
    imageUrl: string;
};

const VideoSlide = ({ movieResults, imageUrl }: MyPageProps) => {
    // const movies = await fetchGameMovies("3498");
    // console.log(movieResults);
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
            <Heading className="px-5 pt-1">Video Contents</Heading>
            <div className="p-4">
                <Slider {...settings} className="slider-container">
                    <Image
                        src={imageUrl}
                        alt="Image of ..."
                        content="cover"
                        width={"400"}
                        height={"200"}
                        className="rounded-md"
                        style={{ borderRadius: "10px" }}
                    />
                    {movieResults.length != 0 ? (
                        movieResults.map((item) => (
                            <video
                                key={item.id}
                                loop
                                muted
                                playsInline
                                controls
                                preload="metadata"
                                autoPlay
                                className="rounded-md p-1"
                            >
                                <source src={item.data[480]} type="video/mp4" />
                                <p>hi</p>
                            </video>
                        ))
                    ) : (
                        <video
                            loop
                            muted
                            playsInline
                            controls
                            preload="metadata"
                            autoPlay
                            className="rounded-md"
                        >
                            <source
                                src={"/videos/stockVideo.mp4"}
                                type="video/mp4"
                            />
                        </video>
                    )}
                </Slider>
            </div>
        </>
    );
};

export default VideoSlide;
