import React from "react";
import style from "./style.module.css";
import Search from "../../header/Search";
import HeroLinks from "../../HeroComponents/HeroLinks/HeroLinks";
type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="bg-[image:var(--image-url-sm)] md:bg-[image:var(--image-url-md)] lg:bg-[image:var(--image-url-lg)] xl:bg-[image:var(--image-url-xl)] bg-cover bg-no-repeat text-center bg-center pt-5 pb-3 md:py-7 relative">
      <div className="pointer-events-none bottom-0 left-0 right-0 top-0 absolute bg-[#15501833] md:bg-[#0000004D] z-10"></div>
      <div className="flex items-center justify-center flex-col md:py-11 sm:py-11 md:mb-11 sm:mb-11 relative z-20">
        <h1
          data-name="Hero Cars"
          className="text-4xl text-white pt-2 pb-4 md:pt-3 md:mt-10  mb-4 mt-8"
        >
          <span className="block">Car buying</span>
          shaped to your life
        </h1>
        {/* Search used for navigate to existing pages easily*/}
        <div className="mb-11">
          <Search Searchwidth={"30rem"} />
        </div>

        {/* Hero Link Button for New and Old car list*/}
        <HeroLinks />
      </div>
    </div>
  );
};

export default HeroSection;
