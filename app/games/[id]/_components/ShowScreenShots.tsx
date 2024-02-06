"use client";
import getCroppedImageUrl from "@/app/lib/image-url";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

type Props = {
    screenShotResults: any;
};

const ShowScreenShots = ({ screenShotResults }: Props) => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
    };
    return (
        <>
            <Slider {...settings} className="slider-container">
                {screenShotResults.results.map((ss: any) => (
                    <div className="m-3 p-2" key={ss.id}>
                        <Image
                            src={
                                ss.image
                                    ? getCroppedImageUrl(ss.image)
                                    : "/stock_image.jpeg"
                            }
                            alt="image of..."
                            width={"300"}
                            height={"200"}
                            className="rounded-md"
                            priority
                        />
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default ShowScreenShots;
