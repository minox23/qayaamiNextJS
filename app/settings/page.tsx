"use client";

import { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import {
  ArrowLeftCircleIcon,
  Bars3Icon,
  BuildingStorefrontIcon,
  ChatBubbleOvalLeftIcon,
  CreditCardIcon,
  HomeIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import AccCenter from "./acccenter";
import { Subscription } from "./subscription";
import { BusinessCenter } from "./businessCenter";

const screens = [
  { name: "Messages", icon: ChatBubbleOvalLeftIcon },
  { name: "Business Center", icon: BuildingStorefrontIcon },
  { name: "My Subscription", icon: CreditCardIcon },
  { name: "Account Center", icon: UserIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Settings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selected, setSelected] = useState(screens[3]);

  function setScreen() {
    if (selected === screens[0]) {
      return <p>hey messages</p>;
    } else if (selected === screens[1]) {
      return <BusinessCenter />;
    } else if (selected === screens[2]) {
      return <Subscription />;
    } else if (selected === screens[3]) {
      return <AccCenter />;
    }
  }

  return (
    <>
      <div>
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>
              {/* Mobile Sidebar component, swap this element with another sidebar if you like */}

              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white sm:px-6 p-4">
                <div className="flex h-16 shrink-0 items-center">
                  <Image
                    src="/assets/images/qmi-logo.png"
                    height={25}
                    width={25}
                    alt="qayaami-logo"
                  />{" "}
                  <p>ayaami</p>
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <RadioGroup
                        value={selected}
                        onChange={setSelected}
                        aria-label="Server size"
                        className="space-y-3"
                      >
                        {screens.map((screen) => (
                          <Radio
                            key={screen.name}
                            value={screen}
                            className="group relative flex cursor-pointer rounded-lg py-3 hover:bg-gray-100 text-gray-700 transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-gray-100 data-[checked]:text-blue-600 data-[checked]:shadow-md"
                          >
                            <div className="flex w-full items-center justify-between px-3">
                              <div className="flex gap-x-4 items-center">
                                <screen.icon
                                  aria-hidden="true"
                                  className={classNames(
                                    "h-6 w-6 shrink-0 group-hover:text-blue-600"
                                  )}
                                />
                                <p className="font-semibold text-gray-700 text-sm group-data-[checked]:text-blue-600 group-hover:text-blue-600">
                                  {screen.name}
                                </p>
                              </div>
                              {/* <CheckCircleIcon className="size-6 fill-blue-600 opacity-0 transition group-data-[checked]:opacity-100" /> */}
                            </div>
                          </Radio>
                        ))}
                      </RadioGroup>
                    </li>
                    <li className="mt-auto">
                      <Link
                        href="#"
                        className="flex items-center pl-3 gap-x-4 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 hover:text-red-600 rounded-md"
                      >
                        {" "}
                        <ArrowLeftCircleIcon width={25} />
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-2 overflow-y-auto border-r border-gray-200 bg-white sm:px-6 p-4">
            <div className="flex h-16 shrink-0 items-center pl-3">
              <Link href="/" className="flex items-center">
                <Image
                  src="/assets/images/qmi-logo.png"
                  height={25}
                  width={25}
                  alt="qayaami-logo"
                />{" "}
                <p>ayaami</p>
              </Link>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <RadioGroup
                    value={selected}
                    onChange={setSelected}
                    aria-label="Server size"
                    className="space-y-3"
                  >
                    {screens.map((screen) => (
                      <Radio
                        key={screen.name}
                        value={screen}
                        className="group relative flex cursor-pointer rounded-lg py-3 hover:bg-gray-100 text-gray-700 transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-gray-100 data-[checked]:text-blue-600 data-[checked]:shadow-md"
                      >
                        <div className="flex w-full items-center justify-between px-3">
                          <div className="flex gap-x-4 items-center">
                            <screen.icon
                              aria-hidden="true"
                              className={classNames(
                                "h-6 w-6 shrink-0 group-hover:text-blue-600"
                              )}
                            />
                            <p className="font-semibold text-gray-700 text-sm group-data-[checked]:text-blue-600 group-hover:text-blue-600">
                              {screen.name}
                            </p>
                          </div>
                          {/* <CheckCircleIcon className="size-6 fill-blue-600 opacity-0 transition group-data-[checked]:opacity-100" /> */}
                        </div>
                      </Radio>
                    ))}
                  </RadioGroup>
                </li>
                <li className="mt-auto">
                  <Link
                    href="#"
                    className="flex items-center pl-3 gap-x-4 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 hover:text-red-600 rounded-md"
                  >
                    {" "}
                    <ArrowLeftCircleIcon width={25} />
                    Sign Out
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center justify-between gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <div className="hover:bg-gray-200 p-1 rounded-full transition-all">
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </div>
          </button>
          <Link href="/">
            <HomeIcon
              width={25}
              className="rounded-full hover:ring-4 ring-gray-200 hover:bg-gray-200 transition-all"
            />
          </Link>
        </div>

        <main className="py-8 lg:pl-72">
          <p className="pl-4 pb-2 sm:pl-6 font-semibold text-xl">
            Habari Mokonya!
          </p>
          <div className="px-4 sm:px-6 pt-5">{setScreen()}</div>
        </main>
      </div>
    </>
  );
}
