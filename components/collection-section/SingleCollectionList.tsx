"use client";
import { ICollection } from "@/models/collection_types";
import React from "react";
import SingleProduct from "./SingleProduct";
import Slider from "react-slick";
function SingleCollectionList(props: { collection: ICollection }) {
  const collection = props.collection;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="flex md:hidden  w-full items-start flex-wrap gap-x-2 gap-y-4">
        {collection.items.map((item) => (
          <SingleProduct key={item.key} item={item} />
        ))}
      </div>
      <div className="hidden md:grid  grid-flow-row-dense grid-cols-5 gap-4">
        <div className="col-span-1 ">
          <div className="css-6z2zhi ">{collection.title}</div>
          <div className="css-1m2ojv8">{collection.subtitle}</div>
        </div>

        <div className="w-full  col-span-4 slider-container">
          <Slider {...settings}>
            {collection.items.map((item) => (
              <SingleProduct key={item.key} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default SingleCollectionList;
