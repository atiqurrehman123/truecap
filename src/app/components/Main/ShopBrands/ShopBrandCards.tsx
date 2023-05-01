import React from "react";
import Image from "next/image";
import Link from "next/link";
interface brandObj {
  id: string;
  name: string;
  image: string;
  link: string;
}
interface Brandtype {
  shopbrandlist: brandObj[];
}
function ShopBrandCards({ shopbrandlist }: Brandtype) {
  return (
    <div className="bg-[#f8f8f8] pt-1">
      <div className="p-0  text-center md:[margin-left:8rem] md:[margin-right:8rem] bg-white ">
        <div className="text-3xl my-5 font-semibold text-center font-semibold pb-3 pt-4 px-2">
          Shop your favorite brand
        </div>
        <div className="text-1xl my-5  text-center  pb-3 pt-4 px-2">
          <span className="text-black  bg-[#f2f2f2] rounded-full  py-2 ">
            <button className="bg-black rounded-full text-white py-1  px-4">
              New Cars
            </button>
            <button className="bg-[#f2f2f2] rounded-full text-black px-4 py-1">
              Used Cars
            </button>{" "}
          </span>
        </div>
        <div className="flex flex-wrap mx-4 text-center md:[margin-left:8rem] md:[margin-right:8rem] bg-white p-3">
          {shopbrandlist.map((branditem) => {
            return (
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
                <Link
                  className="flex items-center justify-center flex-col md:px-3 md:py-9 md:justify-end shadow-none card-shadow mb-4 ml-3 bg-white shadow-md"
                  href={`/${branditem.link}`}
                >
                  <div className="flex justify-center items-center h-12">
                    {/* <Image
                    className="h-24 object-contain"
                    // src={require(`../../../../../public/images/SearchImages/${branditem.researchimg}`)}
                    src={require(`../../../../../public/images/SearchImages/${branditem.researchimg}`)}
                    key={branditem.id}
                    alt={`Image ${branditem.name}`}
                    width={500}
                    height={500}
                  /> */}
                    <div>few</div>
                    <span className="text-1xl text-base pb-3 pt-4 px-2">
                      {branditem.name}
                    </span>
                  </div>

                  <div className="w-full lg:px-5">
                    {/* <p className="pb-4 text-gray-700 ">{branditem.desc}</p> */}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="text-1xl my-4 text-center pb-3 pt-4 px-2">
          <button
            className="text-black border border-[#000000] rounded-full py-1 px-14 "
            tabIndex={-1}
          >
            See more ^
          </button>{" "}
        </div>
        <div className="flex text-xs text-gray-700 flex-wrap mx-4 text-start break-all md:[margin-left:8rem] md:[margin-right:8rem] bg-white p-3">
          *Vehicle incentives and rebates are programs made available by car
          manufacturers to encourage vehicle sales by providing consumers with
          cash allowances or favorable financing/lease rates. Incentives can
          vary by location, vehicle configuration, as well as the buyer's method
          of payment (cash purchase, financing, lease). Some incentives can be
          stacked with other incentive programs, and some have eligibility
          conditions that must be met to qualify. Additional incentives are
          sometimes targeted to customer segment groups like college graduates,
          military members, etc. Incentives are normally subject to change and
          governed by specific eligibility rules. Please see your local dealer
          for details on incentives that might be available to you.
        </div>
        <div className="flex flex-wrap p-0  bg-white ">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 ">
            <div className="mr-1 flex justify-center  py-12 items-center bg-black rounded-lg bg-[image:var(--image-url-sm)] md:bg-[image:var(--image-url-md)] lg:bg-[image:var(--image-url-lg)] xl:bg-[image:var(--image-url-xl)] bg-cover bg-no-repeat text-center bg-center">
              <div className="py-3 text-white">
                <div className="py-3 text-3xl font-medium">Sell and trade</div>
                <div className="text-1xl text-xs py-3">
                  Answer a few questions and get an instant offer.
                </div>
                <div className="text-1xl my-4 text-center pb-3 pt-4 px-2">
                  <button
                    className="text-black bg-white rounded-full py-2 px-8 "
                    tabIndex={-1}
                  >
                    Learn more ^
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 ">
            <div className=" flex justify-center  py-12 items-center bg-black rounded-lg bg-[image:var(--image-url-sm)] md:bg-[image:var(--image-url-md)] lg:bg-[image:var(--image-url-lg)] xl:bg-[image:var(--image-url-xl)] bg-cover bg-no-repeat text-center bg-center">
              <div className="py-3 text-white">
                <div className="py-3 text-3xl font-medium">Sell and trade</div>
                <div className="text-1xl text-xs py-3">
                  Answer a few questions and get an instant offer.
                </div>
                <div className="text-1xl my-4 text-center pb-3 pt-4 px-2">
                  <button
                    className="text-black bg-white rounded-full py-2 px-8 "
                    tabIndex={-1}
                  >
                    Learn more ^
                  </button>{" "}
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopBrandCards;
