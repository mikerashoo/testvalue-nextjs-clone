"use client";

import { IBannerData } from "@/models/banner_data"; 
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

 function MobileBannerWrapper(props: { banners: IBannerData[] }) {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      autoplay: true,
    autoplaySpeed: 2000,
      cssEase: "linear",
      appendDots: (dots: any) => (
        <div
          style={{
            backgroundColor: "transparent",
            borderRadius: "10px",
            padding: "10px",
            marginTop: "-40px",
            position: "absolute",
            bottom: 10,
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          {props.banners.map((item) => (
            <Link
              href={item.linkUrl}
              key={item.linkUrl}
              className="relative h-56 w-full overflow-hidden"
            >
              <Image
                fill
                className="object-fill h-full w-full"
                src={item.mobileImageUrl}
                alt={item.title}
              />
            </Link>
          ))}
        </Slider>
      </div>
    );
  }

  export default MobileBannerWrapper;