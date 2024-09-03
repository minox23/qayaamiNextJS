import {
  InputwHelp,
  Input,
  Uploadfile,
  DisabledInput,
} from "@components/form/input";
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
import { BlueBtn } from "@components/ui/Buttons";

let regionNames = Object.keys(locationHierarchy);

export default function BusinessInfo() {
  const [region, setRegion] = useState("Select Region");
  const [city, setCity] = useState("Select City");
  const [isCityEnabled, setCityEnabled] = useState(false);

  function handleRegionChange(regionName: string) {
    setRegion(regionName);
    setCity("Select City");
    setCityEnabled(true);
  }

  function handleCityChange(city: string) {
    setCity(city);
  }

  return (
    <div className="bg-gray-100 p-4 sm:p-6 rounded-md">
      <h1 className="font-semibold text-lg">Business Information</h1>
      <form action="">
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 gap-x-8 gap-y-4">
          <div className="col-span-full">
            <InputwHelp
              label="Tags"
              name="tags"
              type="text"
              placeholder=""
              htmlFor="tags"
              helpMsg="Tags help searchers find your services"
            />
          </div>
          <div className="col-span-full">
            <Input
              label="Business name"
              name="business-name"
              type="text"
              required
              htmlFor="business-name"
            />
          </div>
          <Input
            label="Phone number"
            name="phone-number"
            type="text"
            required
            htmlFor="phone-number"
          />
          <Input
            label="Email address"
            name="email-address"
            type="email"
            required
            placeholder="you@example.com"
            htmlFor="email-address"
          />
          <div className="mt-5 col-span-full">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="mt-3 col-span-full">
            <Uploadfile
              label="Upload Business Images"
              uploadMsg="Upload an image"
              fileType="PNG, JPG, GIF up to 2MB"
            />
          </div>
          <div className="mt-5 col-span-full">
            <div className="w-full border-t border-gray-300" />
          </div>
          <h2 className="py-3 font-semibold text-lg col-span-full">
            Location Information
          </h2>
          <DisabledInput
            label="Country"
            name="country"
            type="text"
            placeholder="Cameroon"
            htmlFor="country"
          />
          <div className="flex-1 inline-block">
            <label
              htmlFor="region"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Region
            </label>
            <Listbox value={region} onChange={handleRegionChange}>
              <ListboxButton
                className={clsx(
                  "relative w-full mt-2 shadow-sm rounded-md border-0 bg-white ring-1 ring-inset ring-gray-300 py-1.5 pr-8 pl-3 text-left text-base/6 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-blue-600",
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
          <div className="flex-1 inline-block">
            <label
              htmlFor="region"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              City
            </label>
            <Listbox
              value={city}
              onChange={handleCityChange}
              disabled={!isCityEnabled}
            >
              <ListboxButton
                className={clsx(
                  "relative block w-full mt-2 shadow-sm rounded-md border-0 bg-white ring-1 ring-inset ring-gray-300 py-1.5 pr-8 pl-3 text-left text-base/6 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-blue-600 disabled:bg-gray-100",
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
                  locationHierarchy[region].map((city) => (
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
          <div>
            <DisabledInput name="neighborhood" label="Neighborhood" />
          </div>
        </div>
        <div className="mt-10 mb-3 mx-auto w-fit">
          <BlueBtn type="submit" name="Save Changes" />
        </div>
      </form>
    </div>
  );
}
