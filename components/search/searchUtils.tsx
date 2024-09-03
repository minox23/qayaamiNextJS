import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";
import { locationHierarchy } from "@server/database/data";

let regionNames = Object.keys(locationHierarchy);

export const RegionDropdown = () => {
  const [region, setRegion] = useState("Select Region");
  function handleRegionChange(regionName: string) {
    setRegion(regionName);
  }
  return (
    <div>
      <Listbox value={region} onChange={handleRegionChange}>
        <ListboxButton
          className={clsx(
            "relative block w-full rounded-md md:rounded-none border-0 bg-white ring-1 h-11 ring-inset ring-gray-300 py-2.5 pr-8 pl-3 text-left text-base/6 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-blue-600",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/5"
          )}
        >
          {region}
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-blue/60"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "w-[var(--button-width)] rounded-md border bg-white p-1 mt-1 [--anchor-gap:var(--spacing-1)] focus:outline-none",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
          )}
        >
          {regionNames.map((regionName) => (
            <ListboxOption
              key={regionName}
              value={regionName}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-gray-100"
            >
              <CheckIcon className="invisible size-4 fill-blue group-data-[selected]:visible" />
              <div className="text-base/6">{regionName}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export const CityDropdown = () => {
  const [city, setCity] = useState("Select City");
  const [isCityEnabled, setCityEnabled] = useState(false);

  function handleCityChange(city: string) {
    setCity("Select City");
    setCityEnabled(true);
    setCity(city);
  }

  return (
    <div>
      <Listbox
        value={city}
        onChange={handleCityChange}
        disabled={!isCityEnabled}
      >
        <ListboxButton
          className={clsx(
            "relative block w-full rounded-md md:rounded-l-none border-0 bg-white ring-1 h-11 ring-inset ring-gray-300 py-2.5 pr-8 pl-3 text-left text-base/6 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-blue-600 disabled:bg-gray-100",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/5"
          )}
        >
          {city}
          {isCityEnabled && (
            <ChevronDownIcon
              className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-blue/60"
              aria-hidden="true"
            />
          )}
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "w-[var(--button-width)] rounded-md border bg-white p-1 mt-1 [--anchor-gap:var(--spacing-1)] focus:outline-none",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
          )}
        >
          {isCityEnabled &&
            locationHierarchy[1].map((city) => (
              <ListboxOption
                key={city}
                value={city}
                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-gray-100"
              >
                <CheckIcon className="invisible size-4 fill-blue group-data-[selected]:visible" />
                <div className="text-base/6">{city}</div>
              </ListboxOption>
            ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};
