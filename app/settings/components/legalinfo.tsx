import { Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Uploadfile, Input, InputwHelp } from "@components/form/input";

const genders = [{ name: "Male" }, { name: "Female" }];

export default function LegalInfo() {
  const [genderChoice, setGenderChoice] = useState();

  return (
    <div className="bg-gray-100 p-4 sm:p-6 rounded-md">
      <h1 className="font-semibold text-lg">Legal Personal Information</h1>
      <form action="">
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 gap-x-8">
          <div className="grid grid-cols-2 gap-4">
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
            <div className="col-span-2">
              <InputwHelp
                label="Phone number"
                name="phone-number"
                type="text"
                required
                htmlFor="phone-number"
                helpMsg="Read-only. Edit this field in the next section."
              />
            </div>
            <div className="col-span-2">
              <InputwHelp
                label="Email address"
                name="email-address"
                type="email"
                placeholder="you@example.com"
                required
                htmlFor="email-address"
                helpMsg="Read-only. Edit this field in the next section."
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
          <div className="mt-8 sm:mt-0">
            <Uploadfile
              label="Upload ID Card"
              uploadMsg="Upload a file"
              fileType="PNG, JPG, GIF up to 2MB"
            />
            <div className="mt-5">
              <Uploadfile
                label="Upload Passport size Image"
                uploadMsg="Upload a file"
                fileType="PNG, JPG, GIF up to 2MB"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 mb-3">
          <button
            type="submit"
            className="block mx-auto rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-md hover:bg-green-600 active:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Verify Now
          </button>
        </div>
      </form>
    </div>
  );
}
