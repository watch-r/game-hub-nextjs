"use client";
import { ScreenShots } from "@/app/lib/TypeDefinations";
import getCroppedImageUrl from "@/app/lib/image-url";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Box, Heading } from "@radix-ui/themes";

type Props = {
    screenShotResults: ScreenShots;
};

const ShowScreenShots = ({ screenShotResults }: Props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
    const emptyImages = [1, 2, 3];
    return (
        <>
            <Slider {...settings} className="slider-container">
                {screenShotResults.results.length != 0
                    ? screenShotResults.results.map((ss: any) => (
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
                      ))
                    : emptyImages.map((id) => (
                          <div key={id} className="m-3 p-3">
                              <Image
                                  src={"/stock_image.jpeg"}
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
