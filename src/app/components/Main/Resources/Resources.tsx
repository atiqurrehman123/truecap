"use client";
import React,{useEffect, useState} from "react";
import PeopleReviewCard from "./ResourcesTabs";
import ResourcesTabs from "./ResourcesTabs";
import AccordingResource from "./ResourceAccording";

interface ResourceObj {
  label: string;
  value: string;
  according: {
    name: string;
    carArray: string[];
  }[];
}


interface Brandtype {
  resourceslist: ResourceObj[];
}
function Resources({ resourceslist }: Brandtype) {
    const [activeTab, setActiveTab] = React.useState<string>("helpful links");
    const [accordingArray, setAccordingArray] = React.useState<ResourceObj["according"]>(
      []
    );

      const getAccordinglist=()=>{
        const accordingarray=resourceslist.filter((item)=>item.value===activeTab);
        console.log(accordingarray,"accordingarray");
        if (accordingarray.length!==0) {
          setAccordingArray(accordingarray[0].according);
        }

      }
      useEffect(() => {console.log(activeTab) 
        getAccordinglist()
      console.log(accordingArray);}, [activeTab]);

  return (
    <div className="bg-[#f8f8f8] pt-1">
      <div className="p-0  md:[margin-left:8rem] md:[margin-right:8rem] bg-white ">
        <div className="text-3xl my-5 font-semibold text-center font-semibold pb-3  py-14 px-2 ">
          Get car reviews from our experts
        </div>

        <div className="  mx-4 md:[margin-left:8rem] md:[margin-right:8rem]  p-3">
          <div>
            <ResourcesTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              resourceslist={resourceslist}
            />
          </div>
          {/* According Resource */}
          <div>
            <AccordingResource
              accordingArray={accordingArray}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
