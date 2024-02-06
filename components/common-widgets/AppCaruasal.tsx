import React, { PropsWithChildren } from "react";
import Slider from "react-slick";

function AppCaruasal(props: PropsWithChildren) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        className: "center",
        centerMode: true,
        // slidesToScroll: 3
        centerPadding: "200px",
      };
      return (
        <div className="slider-container">
          <Slider {...settings}>
            <div className="relative w-full h-full">
          {props.children}
          </div>
          </Slider>
        </div>
      );
  
}

export default AppCaruasal;
