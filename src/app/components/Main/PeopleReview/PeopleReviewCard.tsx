import React from "react";

interface props {
  itemobj: {
    id: string;
    name: string;
    username: string;
    desc: string;
    image:string
  };
}

function PeopleReviewCard({ itemobj }: props) {
  console.log(itemobj, "itemobj");
  return (
    <div className="w-1/2 relative ">
      <div className="flex  rounded shadow-lg bg-gray-50 m-3 h-52 my-2">
        {/* Image Div */}
        <div className="w-1/3 relative top-0 bottom-0 right-5 left-0">
          <img
            className="h-20 w-20 rounded-full "
            src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
            alt="Sunset in the mountains"
          />
        </div>
        {/* card object */}
        <div className="w-2/3">
          <div className="flex flex-col">
            {/* desc */}
            <div className=" h-full text-1xl mb-2 ">
              <p> {itemobj.desc}</p>
            </div>
            <div className="text-1xl mb-2 float-left ">{itemobj.name}</div>
            <div className="flex items-center mb-4 ">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                alt="Twitter Icon"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">{itemobj.username}</p>
                {/* <p className="text-gray-600">Aug 18</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PeopleReviewCard;
