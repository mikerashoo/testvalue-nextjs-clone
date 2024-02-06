
"use client";

import React, { MutableRefObject, useRef, useState } from 'react'
import BannerArrowButton from '../common-widgets/BannerArrowButton';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Slider from 'react-slick';
import { IBannerData } from '@/models/banner_data';
import Link from 'next/link';

function DesktopBannerWrapper(props: { banners: IBannerData[] }) {

  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);  

  let sliderRef: MutableRefObject<Slider | null> = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    className: "center",
    centerMode: true,
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
    centerPadding: "260px",
    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current: any, next: React.SetStateAction<number>) =>
      setSlideIndex(next),
  };

  return (
    <div className=" slider-container">
    <Slider
      ref={(slider) => {
        sliderRef.current = slider;
      }}
      {...settings}
    >
      {props.banners.map((item, index) => {
        let shouldShow = index == slideIndex;
        let nextIndex = slideIndex + 1;
        let prevIndex = slideIndex - 1;
        return (
          <div
            key={item.mainBannerId}
            className={"w-full h-full " + shouldShow ? "px-4" : "px-0"}
          >
            <div className="relative w-full h-96">
              {shouldShow ? (
                <>
                  <Link
                    href={item.linkUrl}
                    key={item.linkUrl}
                    className="absolute w-full h-full z-10"
                  />

                  <div className="absolute left-4 top-40 z-10">
                    <BannerArrowButton
                      icon={<LeftOutlined />}
                      action={() => sliderRef.current?.slickGoTo(prevIndex)}
                    />
                  </div>

                  <div className="absolute right-4 top-40 z-10">
                    <BannerArrowButton
                      icon={<RightOutlined />}
                      action={() => sliderRef.current?.slickGoTo(nextIndex)}
                    />
                  </div>
                </>
              ) : (
                <div className="absolute w-full h-full z-10 bg-gray-400 bg-opacity-50"></div>
              )}

              <Image
                fill
                className="object-cover w-full"
                src={item.pcImageUrl}
                alt={item.title}
              />
            </div>
          </div>
        );
      })}
    </Slider>
  </div>
  )
}

export default DesktopBannerWrapper