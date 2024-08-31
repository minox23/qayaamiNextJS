import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@auth";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { LogOut } from "@components/form/sessionbtns";

const navigation: { name: string; href: string; id: number }[] = [
  { name: "Advertise", href: "#", id: 1 },
  { name: "Affiliate", href: "#", id: 2 },
];
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
    <header className="bg-gray-50 drop-shadow-sm">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8"
      >
        <Link
          href="/"
          className="hidden md:block transition duration-150 active:transition-none rounded-md px-2 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 active:bg-gray-100"
        >
          About
        </Link>
        <div className="md:hidden">
          <Menu as="div" className="relative text-left">
            <div className="flex items-center rounded-full hover:bg-gray-200 p-1 transition-all">
              <MenuButton>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </MenuButton>
            </div>
            <MenuItems
              transition
              className="absolute left-0 z-10 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                {navigation.map((item) => (
                  <MenuItem key={item.id}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  </MenuItem>
                ))}
                <MenuItem>
                  <Link
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    About
                  </Link>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
        <div className="flex gap-x-6 md:gap-x-8 items-center">
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
          {session ? (
            <Menu as="div" className="relative text-left">
              <div>
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
