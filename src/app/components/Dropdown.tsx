import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import  Link  from "next/link";
import { useDetectClickOutside } from "react-detect-click-outside";
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

interface dropdownlist {
  name: string;
  link: string;
};

interface DropdownTypes {
  name: string;
  dropdownlist:dropdownlist[]
}


export default function Dropdown({ name, dropdownlist }: DropdownTypes) {
  console.log(dropdownlist);
  const [open, setOpen] = useState(false);
  const ref=useDetectClickOutside({onTriggered:()=>setOpen(false)})
  return (
    <Menu as="div" className="relative inline-block text-left" 
    ref={ref}
    >
      <Menu.Button
        className="inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-sm font-semibold text-white shadow-sm  outline-none"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {name}
        {!open ? (
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        ) : (
          <ChevronUpIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        )}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {dropdownlist.map((dropvalues, index) => {
              return (
                <>
                  <Menu.Item>
                    {({ active }) => (
                      <Link onClick={()=>{setOpen(false)}}
                        href={`/${dropvalues.link}`}
                        className={classNames(
                          active
                            ? "bg-black underline text-white"
                            : "text-white",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {dropvalues.name}
                      </Link>
                    )}
                  </Menu.Item>
                  {index === 1 && <hr />}
                </>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
