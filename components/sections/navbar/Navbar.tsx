import Link from "next/link";
import Image from "next/image";
import { auth } from "@auth";
import { HiCurrencyPound } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { MdPlayArrow } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { LogOut } from "@components/form/sessionbtns";
import Flag from "react-flagkit";
import { NavDropdown } from "@components/sections/navbar/components/nav-dropdown";
import Example from "./components/featuresNav-menu";

const accNavigation: { name: string; href: string; id: number }[] = [
  { name: "Account settings", href: "/settings", id: 1 },
  { name: "Profile", href: "#", id: 2 },
  { name: "Support", href: "#", id: 3 },
];

const Navbar = async () => {
  const session = await auth();
  const userImage: string = session?.user?.image ?? "";
  const userName: string = session?.user?.name ?? "";
  const userEmail: string = session?.user?.email ?? "";

  return (
    <header className=" border-b-[1px] bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between py-2 sm:py-4 px-6"
      >
        {/* DESKTOP Nav LEFT Section */}
        <div className="flex items-center gap-x-4">
          <Link
            href="/"
            className="focus:outline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
          >
            <div className="flex gap-1 items-center">
              <HiCurrencyPound size={22} />
              <p className="text-xl font-semibold text-gray-900">Qayaami</p>
            </div>
          </Link>
          <div className="hidden md:flex ml-4">
            <Example />
          </div>
        </div>

        {/* DESKTOP Nav - RIGHT Section */}
        <div className="gap-x-4 items-center hidden md:flex">
          <Flag country="CM" size={20} />
          {session ? (
            <div>
              <Menu as="div" className="relative text-left">
                <div className="flex space-x-6 items-center">
                  <IoIosNotificationsOutline
                    size={35}
                    className="p-1.5 rounded-full hover:ring-4 ring-inset ring-gray-300 cursor-pointer"
                  />
                  <MenuButton>
                    {userImage ? (
                      <Image
                        src={userImage}
                        alt={userName}
                        width={30}
                        height={30}
                        className="inline-block rounded-full hover:ring-4 ring-gray-300 cursor-pointer"
                      />
                    ) : (
                      <span className="inline-block h-7 w-7 overflow-hidden rounded-full bg-gray-100 hover:ring-4 ring-gray-300 cursor-pointer">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="h-full w-full text-gray-400"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                    )}
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="px-4 py-4">
                    <p className="text-xs mb-4">ACCOUNT</p>
                    <p className="text-sm">{userName}</p>
                    <p className="truncate text-sm font-medium text-gray-900">
                      {userEmail && userEmail}
                    </p>
                  </div>
                  <div className="py-1">
                    {accNavigation.map((item) => (
                      <MenuItem key={item.id}>
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                          {item.name}
                        </Link>
                      </MenuItem>
                    ))}
                  </div>
                  <div className="py-1">
                    <MenuItem>
                      <LogOut
                        className={
                          "block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 hover:bg-gray-100"
                        }
                      />
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </div>
          ) : (
            <div className="flex gap-x-4 items-center">
              <Link
                href="/login"
                className="block px-4 py-2 text-sm font-semibold text-gray-800 hover:text-gray-700"
              >
                Log in
              </Link>
              <Link href="/login">
                <Button
                  size="sm"
                  className="bg-gray-800 text-gray-100 hover:text-white hover:bg-gradient-to-b from-gray-600 to to-gray-900 gap-x-1 group transition-all duration-200"
                >
                  Sign Up
                  <MdPlayArrow
                    size={11}
                    className="text-gray-400 group-hover:text-white"
                  />
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* MOBILE Nav - RIGHT Section */}
        <div className="md:hidden">
          <NavDropdown />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
