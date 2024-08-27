"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigation: { name: string; href: string; id: number }[] = [
    { name: "Advertise", href: "#", id: 1 },
    { name: "Affiliate", href: "#", id: 2 },
  ];
  const accNavigation: { name: string; href: string; id: number }[] = [
    { name: "Account settings", href: "/settings", id: 1 },
    { name: "Profile", href: "#", id: 2 },
    { name: "Support", href: "#", id: 3 },
  ];
  const [providers, setProviders] = useState(null);
  const isUserLoggedIn: boolean = true;

  return (
    <header className="bg-gray-50 drop-shadow-sm">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8"
      >
        <Link
          href="/"
          className="transition duration-150 active:transition-none rounded-md px-2 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 active:bg-gray-100"
        >
          About
        </Link>
        <div className="flex gap-x-6 md:gap-x-8 items-center">
          <div className="md:hidden">
            <Menu as="div" className="relative text-left">
              <div className="flex items-center rounded-full hover:bg-gray-200 p-1 transition-all">
                <MenuButton>
                  <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  {navigation.map((item) => (
                    <MenuItem>
                      <Link
                        key={item.id}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>
          </div>
          <div className="gap-x-6 hidden md:flex">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="rounded-md px-2 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 active:bg-gray-100 transition duration-150 active:transition-none"
              >
                {item.name}
              </Link>
            ))}
          </div>
          {isUserLoggedIn ? (
            <Menu as="div" className="relative text-left">
              <div>
                <MenuButton>
                  <Image
                    src="/assets/images/black-girl-headshot.jpg"
                    width={37}
                    height={37}
                    className="inline-block h-8 w-8 rounded-full hover:ring-4 ring-gray-300 cursor-pointer"
                    alt="profile-picture"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="px-4 py-4">
                  <p className="text-xs mb-4">ACCOUNT</p>
                  <p className="text-sm">Mokonya Njie</p>
                  <p className="truncate text-sm font-medium text-gray-900">
                    mrQ@qayaami.com
                  </p>
                </div>
                <div className="py-1">
                  {accNavigation.map((item) => (
                    <MenuItem>
                      <Link
                        key={item.id}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </MenuItem>
                  ))}
                </div>
                <div className="py-1">
                  <form action="#" method="POST">
                    <MenuItem>
                      <button
                        type="submit"
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        Log Out
                      </button>
                    </MenuItem>
                  </form>
                </div>
              </MenuItems>
            </Menu>
          ) : (
            <Link
              href="/login"
              className="rounded-md px-2 py-1.5 text-sm font-semibold text-gray-900 hover:bg-blue-600 active:bg-blue-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition duration-200 active:transition-none"
            >
              Log In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
