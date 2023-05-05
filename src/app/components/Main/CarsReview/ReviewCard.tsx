import React from "react";

interface props {
  itemobj:{
  id: string;
  name: string;
  image: string;
  link: string;
  }
};

function ReviewCard({ itemobj }: props) {
  console.log(itemobj,"itemobj")
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 bg-gray-50">
      <img
        className="w-72"
        src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-1xl mb-2 whitespace-nowrap overflow-hidden text-ellipsis">{itemobj.name}</div>
      </div>
<div className="flex items-center mb-4 justify-center">
      <img className="w-10 h-10 rounded-full mr-4" 
        src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
       alt="Avatar of Jonathan Reinink"/>
      <div className="text-sm">
        <p className="text-gray-900 leading-none">by Kelly Hellwig</p>
        {/* <p className="text-gray-600">Aug 18</p> */}
      </div>
    </div>
    </div>
  );
}

export default ReviewCard;
