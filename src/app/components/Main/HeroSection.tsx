import React from "react";
import style from "./style.module.css";
type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="bg-[image:var(--image-url-sm)] md:bg-[image:var(--image-url-md)] lg:bg-[image:var(--image-url-lg)] xl:bg-[image:var(--image-url-xl)] bg-cover bg-no-repeat text-center bg-center pt-5 pb-3 md:py-7 relative">
      <div className="pointer-events-none bottom-0 left-0 right-0 top-0 absolute bg-[#15501833] md:bg-[#0000004D]"></div>
      <div className=" container-max-width-3">
        <h1
          data-name="Hero Cars"
          className="text-4xl text-white pt-2 pb-4 md:pt-3 md:mt-5"
        >
          <span className="block">Car buying</span>
          shaped to your life
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
