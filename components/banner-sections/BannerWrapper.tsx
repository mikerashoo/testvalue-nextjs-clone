"use client";
import { IBannerData } from "@/models/banner_data";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Image from "next/image";
import BannerArrowButton from "../common-widgets/BannerArrowButton";
import Link from "next/link";
function BannerWrapper() {
  const banners: IBannerData[] = [
    {
      mainBannerId: 98,
      title: "주방가전 진수성찬",
      sort: 1,
      pcImageUrl:
        "https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1706247037894-메인배너_PC_주방가전 진수성찬.png",
      mobileImageUrl:
        "https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1706247042675-메인배너_MO_주방가전 진수성찬.png",
      linkUrl: "https://www.testvalley.kr/event/KITCHENSALE",
      startDate: "2024-01-26T05:29:48.000Z",
      endDate: "2024-02-16T05:29:00.000Z",
      creator: "c0335dba-772b-4e5e-b71c-05b426e69a92",
      updater: "aff502d1-4c24-42f5-9e5b-6c1bf70670e4",
      deleter: null,
      createdAt: "2024-01-26T05:31:04.000Z",
      updatedAt: "2024-02-01T09:55:27.000Z",
      deletedAt: null,
    },
    {
      mainBannerId: 67,
      title: "1월 PC기획전",
      sort: 2,
      pcImageUrl:
        "https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1704879436539-메인배너_PC_기본_PC기기이벤트모음전.png",
      mobileImageUrl:
        "https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1704879441957-메인배너_MO_기본_PC기기이벤트모음전.png",
      linkUrl: "https://www.testvalley.kr/collections/2020",
      startDate: "2023-10-26T08:36:09.000Z",
      endDate: "9999-12-23T00:00:00.000Z",
      creator: "aff502d1-4c24-42f5-9e5b-6c1bf70670e4",
      updater: "aff502d1-4c24-42f5-9e5b-6c1bf70670e4",
      deleter: null,
      createdAt: "2023-10-26T08:41:12.000Z",
      updatedAt: "2024-02-01T09:55:27.000Z",
      deletedAt: null,
    },
    {
      mainBannerId: 97,
      title: "음향기기 BIG SALE",
      sort: 3,
      pcImageUrl:
        "https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1706067794654-메인배너_PC_센터_음향기기빅세일.png",
      mobileImageUrl:
        "https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1706067796938-메인배너_MO_센터_음향기기빅세일.png",
      linkUrl: "https://www.testvalley.kr/collections/2397",
      startDate: "2024-01-23T08:09:38.000Z",
      endDate: "2024-02-08T08:09:00.000Z",
      creator: "c0335dba-772b-4e5e-b71c-05b426e69a92",
      updater: "aff502d1-4c24-42f5-9e5b-6c1bf70670e4",
      deleter: null,
      createdAt: "2024-01-23T08:10:19.000Z",
      updatedAt: "2024-02-01T09:55:27.000Z",
      deletedAt: null,
    },
    {
      mainBannerId: 89,
      title: "생활가전 상시기획",
      sort: 4,
      pcImageUrl:
        "https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1704951781067-메인배너_PC_살림9단생활가전.jpg",
      mobileImageUrl:
        "https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1704951788472-메인배너_MO_살림9단생활가전.jpg",
      linkUrl: "https://www.testvalley.kr/collections/2329",
      startDate: "2024-01-11T05:40:15.000Z",
      endDate: "9999-12-23T00:00:00.000Z",
      creator: "aff502d1-4c24-42f5-9e5b-6c1bf70670e4",
      updater: "aff502d1-4c24-42f5-9e5b-6c1bf70670e4",
      deleter: null,
      createdAt: "2024-01-11T05:43:26.000Z",
      updatedAt: "2024-02-01T09:55:27.000Z",
      deletedAt: null,
    },
  ];
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  let sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    className: "center",
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1400,
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
    <>
      <div className="hidden md:block">
        <div className=" slider-container">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {banners.map((item, index) => {
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
                            action={() => sliderRef.slickGoTo(prevIndex)}
                          />
                        </div>

                        <div className="absolute right-4 top-40 z-10">
                          <BannerArrowButton
                            icon={<RightOutlined />}
                            action={() => sliderRef.slickGoTo(nextIndex)}
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
      </div>
      <div className="block md:hidden">
        <MobileBannerWrapper banners={banners} />
      </div>
    </>
  );
}

export function MobileBannerWrapper(props: { banners: IBannerData[] }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1400,
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
              src={item.pcImageUrl}
              alt={item.title}
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default BannerWrapper;
