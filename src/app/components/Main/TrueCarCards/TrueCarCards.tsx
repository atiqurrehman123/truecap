
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
interface TrueCardObj {
  id: string;
  name: string;
  desc:string,
  image:string;
}
interface Researchtype {
  trueCardlist: TrueCardObj[];
}
function TrueCarCards({ trueCardlist }: Researchtype) {
  return (
    <div className="bg-[#000000] pt-2">
      <h1 className="text-4xl text-center text-white md:mt-10  md:mb-4 font-semibold my-8">
        Why TrueCar?
      </h1>
      <div className="flex flex-wrap mx-4 text-center md:[margin-left:8rem] md:[margin-right:8rem]">
        {trueCardlist.map((truecarditem) => {
          return (
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/6 ">
              <div className="flex items-center justify-center flex-col md:px-3 md:pt-8 md:justify-end shadow-none card-shadow mb-2 ml-3 ">
                <div className="flex justify-center justify-end">
                  <Image
                    className="h-24 object-contain"
                    // src={require(`../../../../../public/images/SearchImages/${researchitem.researchimg}`)}
                    src={require(`../../../../../public/images/TrueCards/${truecarditem.image}`)}
                  
                    key={truecarditem.id}
                    alt={`Image ${truecarditem.name}`}
                    width={500}
                    height={500}
                  />
                </div>
                <h1 className="text-2xl text-center text-white md:mt-10  md:mb-1 ">
                  {truecarditem.name}
                </h1>
                <p className="text-1xl text-center text-white md:mt-2  md:mb-1 ">
                  {truecarditem.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="py-4 text-center">
        <button
          className="text-black  bg-white rounded-full py-2 px-8 "
          tabIndex={-1}
        >
Sign up        </button>
      </div>
    </div>
  );
}

export default TrueCarCards;