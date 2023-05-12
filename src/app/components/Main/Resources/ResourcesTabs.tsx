import React, {Fragment, Dispatch, SetStateAction,useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  
} from "@material-tailwind/react";
interface ResourceObj {
  label: string;
  value: string;
  according: {
    name: string;
    carArray: string[];
  }[];
}
interface props {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  resourceslist: ResourceObj[];
}

function ResourcesTabs({ activeTab, setActiveTab, resourceslist }: props) {
   const [open, setOpen] = useState(0);

   const handleOpen = (value: number) => {
     setOpen(open === value ? 0 : value);
   };
  return (
    <div>
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
          }}
        >
          {resourceslist.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-blue-500" : ""}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {/* {resourceslist.map(({ value, according }) => (
            <TabPanel key={value} value={value}>
              {according.map((item)=>{
                return <div>{item.name}</div>
              })}
            </TabPanel>
          ))} */}
     
        </TabsBody>
      </Tabs>
    </div>
  );
}

export default ResourcesTabs;
