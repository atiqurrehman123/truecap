import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import {AiOutlineMail} from "react-icons/ai"
import {SiFacebook} from "react-icons/si"
import {FcGoogle} from "react-icons/fc"
export default function Signup() {

  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex max-h-full  items-end justify-center p-5 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative  transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4  ">
                  <div className="sm:flex sm:items-start"></div>
                  {/* top close icon */}
                  <div className="flex flex-col justify-end items-end">
                    <span>x</span>
                  </div>
                  {/* Steps div */}
                  <div className="flex justify-center my-4">
                    <span className="text-xs text-gray-700">Step 1 of 2</span>
                  </div>
                  {/* Sign up Heading and description */}
                  <div className="flex flex-col items-center justify-center my-2">
                    <h1 data-qa="heading" className=" text-3xl">
                      Sign Up
                    </h1>
                    <p className="text-center my-4 w-3/4 ">
                      Sign up with your email address or continue to sign in
                      with your Facebook or Google account.
                    </p>
                  </div>
                  {/* Buttons sections */}
                  <div className="flex flex-col my-4 justify-center items-center">
                    <div>
                      <button className=" border-2  shadow-sm mb-3">
                        <div className="flex w-56 items-center px-5 py-2 gap-3">
                          <div>
                            <AiOutlineMail />
                          </div>
                          <div className=" text-sm">Continue with Email</div>
                        </div>
                      </button>
                    </div>
                    <div>
                      <button className=" border-2  shadow-sm mb-3">
                        <div className="flex w-56 items-center px-4 py-2 gap-3">
                          <div>
                            <SiFacebook />
                          </div>
                          <div className="text-sm">Continue with Google</div>
                        </div>
                      </button>
                    </div>{" "}
                    <div>
                      <button className=" border-2  shadow-sm mb-3">
                        <div className="flex w-56 items-center px-2 py-2 gap-3">
                          <div>
                            <FcGoogle />
                          </div>
                          <div className="text-sm">Continue with Facebook</div>
                        </div>
                      </button>
                    </div>
                  </div>
                  {/* Navigate link section */}
                  <div>
                    <a className="flex justify-center mb-4 text-sm underline">Already have an account</a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
