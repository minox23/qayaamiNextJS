"use client";

import { Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { BlueBtn } from "@components/ui/Buttons";
import { Input, Uploadfile } from "@components/form/input";

const genders = [{ name: "Male" }, { name: "Female" }];

export default function PersonalInfo() {
  const [genderChoice, setGenderChoice] = useState();

  return (
    <div className="bg-gray-100 p-5 rounded-md mt-5">
      <h1 className="py-3 font-semibold text-lg">Personal Information</h1>
      <form action="">
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-3 gap-x-8">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <div className="col-span-1">
              <Input
                label="First name"
                name="first-name"
                type="text"
                required
                htmlFor="first-name"
              />
            </div>
            <div className="col-span-1">
              <Input
                label="Last name"
                name="last-name"
                type="text"
                required
                htmlFor="last-name"
              />
            </div>
            <div className="col-span-full">
              <Input
                label="Phone number"
                name="phone-number"
                type="text"
                required
                htmlFor="phone-number"
              />
            </div>
            <div className="col-span-full">
              <Input
                label="Email address"
                name="email-address"
                type="email"
                required
                placeholder="you@example.com"
                htmlFor="email-address"
              />
            </div>
            <div className="col-span-full">
              <div className="flex gap-4 justify-between">
                <div className="flex-1 min-w-10">
                  <Input
                    label="Age"
                    name="age"
                    type="text"
                    required
                    htmlFor="age"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Gender
                  </label>
                  <RadioGroup
                    // by="name"
                    value={genderChoice}
                    onChange={setGenderChoice}
                    aria-label="Server size"
                    className="flex gap-x-2 mt-2"
                  >
                    {genders.map((gender) => (
                      <Radio
                        key={gender.name}
                        value={gender}
                        className="group w-full relative flex cursor-pointer rounded-md border-0 ring-1 ring-inset ring-gray-300 py-2 px-5 bg-white shadow-sm transition focus:outline-none data-[focus]:outline-1 focus:ring-2 focus:ring-inset focus:ring-blue-600 data-[checked]:text-blue-700"
                      >
                        <div className="flex items-center justify-between w-full">
                          <div className="text-sm pr-2 ">
                            <p className="font-semibold text-gray-90">
                              {gender.name}
                            </p>
                          </div>
                          <CheckCircleIcon className=" size-5 fill-green-700 opacity-0 transition group-data-[checked]:opacity-100" />
                        </div>
                      </Radio>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:mt-0 mt-8 items-center justify-center">
            <Uploadfile
              label="Upload Profile picture"
              uploadMsg="Upload a file"
              fileType="PNG, JPG, GIF up to 2MB"
            />
          </div>
        </div>
        <div className="mt-8 mb-3 md:mx-0 mx-auto w-fit">
          <BlueBtn name="Save Changes" type="submit" />
        </div>
      </form>
    </div>
  );
}
