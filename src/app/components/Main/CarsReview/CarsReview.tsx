"use client";
import React from "react";
import CarousalCard from "../../HeroComponents/CarousalCard";
import ReviewCard from "./ReviewCard";
import { settings } from "./CustomStyleForSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface topRatedObj {
  id: string;
  name: string;
  image: string;
  link: string;
}
interface Brandtype {
  shopbrandlist: topRatedObj[];
}
function CarsReview({ shopbrandlist }: Brandtype) {
  return (
    <div className="bg-[#f8f8f8] pt-1">
      <div className="p-0  text-center md:[margin-left:8rem] md:[margin-right:8rem] bg-white ">
        <div className="text-3xl my-5 font-semibold text-center font-semibold pb-3  py-14 px-2 ">
          Get car reviews from our experts
        </div>

        <div className=" mx-4 text-center md:[margin-left:8rem] md:[margin-right:8rem]  p-3">
          <Slider {...settings}>
            {shopbrandlist.map((item) => {
              return <ReviewCard itemobj={item} />;
            })}
          </Slider>
        </div>
        <div className="text-1xl my-4 text-center pb-3 pt-4 px-2">
          <button
            className="text-black border border-[#000000] rounded-full py-1 px-14 "
            tabIndex={-1}
          >
            See All{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarsReview;
