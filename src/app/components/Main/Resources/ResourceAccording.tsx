import { Fragment, useEffect, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }: { id: number; open: number | undefined }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
interface itemobj {
  name: string;
  carArray: string[];
}
interface AccordingProps {
  accordingArray: itemobj[];
}

export default function ResourceAccording({ accordingArray }: AccordingProps) {
  const [open, setOpen] = useState<number | undefined>(undefined);

  const handleOpen = (value: number) => {
    setOpen(value === open ? undefined : value);
  };
  useEffect(() => {}, [accordingArray]);

  return (
    <Fragment>
      {accordingArray.map((item, index) => (
        <Accordion open={open === index} icon={<Icon id={index} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(index)}>
            {item.name}
          </AccordionHeader>
          <AccordionBody>
            <div className=" flex flex-wrap">
              {item.carArray.map((item) => (
                <div className="w-1/4 p-2">{item} </div>
              ))}
            </div>
          </AccordionBody>
        </Accordion>
      ))}
    </Fragment>
  );
}
