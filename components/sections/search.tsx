"use client";
import { SearchInput } from "@components/form/input";
import { CityDropdown, RegionDropdown } from "@components/search/searchUtils";
import { BlueBtn } from "@components/ui/Buttons";

export default function SearchBar() {
  return (
    <form
      action=""
      className="flex justify-center flex-col gap-7 drop-shadow-md mb-36 px-5 max-w-5xl mx-auto"
    >
      <div className="flex flex-col md:flex-row gap-2 md:gap-0">
        <div className="flex-1">
          <SearchInput className="rounded-r-none" />
        </div>
        <div className="flex-1">
          <RegionDropdown />
        </div>
        <div className="flex-1 inline-block">
          <CityDropdown />
        </div>
      </div>
      <div className="w-32 mx-auto">
        <BlueBtn name="Search" type="submit" />
      </div>
    </form>
  );
}
