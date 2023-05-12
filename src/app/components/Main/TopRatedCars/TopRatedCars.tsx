"use client"
import React,{useRef,useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {MdOutlineArrowForwardIos} from "react-icons/md";
import {MdOutlineArrowBackIosNew} from "react-icons/md"
import CarousalCard from "../../HeroComponents/CarousalCard";

interface brandObj {
  id: string;
  name: string;
  image: string;
  link: string;
}
interface Brandtype {
  shopbrandlist: brandObj[];
}
function TopRatedCars({ shopbrandlist }: Brandtype) {  
     const [isMoved, setIsMoved] = useState(false);
const [slideNumber, setSlideNumber] = useState(0);
     const listRef = React.useRef<HTMLInputElement | null>(null);
  const handleClick = (direction:any) => {

    console.log(direction,listRef.current?.getBoundingClientRect().x)
    setIsMoved(true);  
        let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${120 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-120 + distance}px)`;
    }
  };

  return (
    <div className="bg-[#f8f8f8] pt-1">
      <div className="p-0  text-center md:[margin-left:8rem] md:[margin-right:8rem] bg-white ">
        <div className="text-3xl my-5 font-semibold text-center font-semibold pb-3  py-14 px-2 ">
          Top-rated cars by type
        </div>

        <div className="flex flex-wrap mx-4 text-center md:[margin-left:8rem] md:[margin-right:8rem] bg-white p-3">
          <div className="wrapper relative overflow-hidden flex flex-row justify-center items-center ">
            <div
              className="p-2 bg-white  cursor-pointer h-24 flex flex-row justify-center items-center rounded shadow-lg"
              onClick={() => handleClick("left")}
              // style={{ display: isMoved ? "none" : "flex" }}
            >
              <MdOutlineArrowBackIosNew />
            </div>
            <div
              className=" overflow-hidden flex-grow-1 relative"
              ref={listRef}
            >
              <div className="flex gap-1 flex-nowrap relative overflow-hidden">
                <CarousalCard />
                <CarousalCard />
                <CarousalCard />
                <CarousalCard />
                <CarousalCard />
                <CarousalCard />
                <CarousalCard />
                <CarousalCard />
                <CarousalCard />
                <CarousalCard />
                <CarousalCard />
                <CarousalCard />
                <CarousalCard />
                <CarousalCard />
                <CarousalCard />
                <CarousalCard />

                <CarousalCard />
              </div>
            </div>
            <div
              className="p-2 bg-white cursor-pointer h-24 flex flex-row justify-center items-center rounded shadow-lg"
              onClick={() => handleClick("right")}
            >
              <MdOutlineArrowForwardIos />
            </div>
          </div>
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

export default TopRatedCars;
