import { Info, Megaphone, Telescope, LogOut } from "lucide-react";
import Link from "next/link";
import { MdPlayArrow } from "react-icons/md";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bars3Icon } from "@heroicons/react/24/outline";
export function NavDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="hover:cursor-pointer">
        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-lg px-4 py-2">
          Qayaami
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="space-y-2">
          <DropdownMenuItem>
            <Megaphone className="mr-2 h-4 w-4" />
            <span>Advertise</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Telescope className="mr-2 h-4 w-4" />
            <span>Explore</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="space-y-2">
          <DropdownMenuItem>
            <Info className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <div className="flex w-full">
          <DropdownMenuItem className="w-full">
            <Link href="/login" className="w-full">
              <Button className="bg-white text-gray-900 border hover:bg-white h-8 w-full gap-x-1">
                <LogOut className="mr-2 h-4 w-4" />
                Log in
              </Button>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="w-full">
            <Link href="/login" className="w-full">
              <Button className="bg-gray-800 text-gray-100 hover:text-white h-8 w-full group gap-x-2">
                Sign Up
                <MdPlayArrow
                  size={11}
                  className="text-gray-400 group-hover:text-white"
                />
              </Button>
            </Link>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
