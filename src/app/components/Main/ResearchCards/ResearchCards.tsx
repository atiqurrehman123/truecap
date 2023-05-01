
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
interface ResearchObj {
  id: string;
  name: string;
  desc: string;
  link: string;
  researchimg: string;
}
interface Researchtype {
  Researchlist: ResearchObj[];
}
function ResearchCards({ Researchlist }: Researchtype) {
  return (
    <div className="bg-[#f8f8f8] pt-2">
      <div className="flex flex-wrap mx-4 text-center md:[margin-left:8rem] md:[margin-right:8rem]">
        {Researchlist.map((researchitem) => {
          return (
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6">
              <Link
                className="flex items-center justify-center flex-col md:px-3 md:py-9 md:justify-end shadow-none card-shadow mb-4 ml-3 bg-white"
                href={`/${researchitem.link}`}
              >
                <div className="flex justify-center justify-end">
                  <Image
                    className="h-24 object-contain"
                    // src={require(`../../../../../public/images/SearchImages/${researchitem.researchimg}`)}
                    src={require(`../../../../../public/images/SearchImages/${researchitem.researchimg}`)}
                    key={researchitem.id}
                    alt={`Image ${researchitem.name}`}
                    width={500}
                    height={500}
                  />
                </div>
                <div className="text-4xl font-semibold pb-3 pt-4 px-8">
                  {researchitem.name}
                </div>
                <div className="w-full lg:px-5">
                  <p className="pb-4 text-gray-700 ">{researchitem.desc}</p>
                  <div className="py-3">
                    <button
                      className="text-white  bg-black rounded-full py-2 px-8"
                      tabIndex={-1}
                    >
                      {researchitem.link}
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
     
    </div>
  );
}

export default ResearchCards