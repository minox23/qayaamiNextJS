"use client";

import { useState } from "react";
import { Switch } from "@headlessui/react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

export default function SubStatus() {
  const [enabled, setEnabled] = useState(true);
  return (
    <div className="bg-gray-100 p-5 rounded-md">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <p className="font-semibold">Subscription</p>
          <div className="min-w-14">
            {enabled ? (
              <p className="text-red-600 font-semibold">Active</p>
            ) : (
              <p className="text-gray-500 font-semibold">Inactive</p>
            )}
          </div>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out data-[checked]:bg-green-600"
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
            />
          </Switch>
        </div>
        <div className="flex gap-3 items-center invisible sm:visible">
          <div className="w-5">
            <ArrowPathIcon />
          </div>
          <p>Monthly Cycle</p>
        </div>
      </div>
      <div className="mt-5">
        <div className="relative">
          <div className="w-full border-t border-gray-300" />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-4 text-nowrap">
        <div>
          <p className="font-semibold">Last Payment</p>
          <p className="mt-2">08 May 2024</p>
        </div>
        <div>
          <p className="font-semibold">Next Payment Due</p>
          <p className="mt-2">07 Jun 2024</p>
        </div>
        <div>
          <p className="font-semibold">Payment Method</p>
          <p className="mt-2">Mtn MoMo</p>
        </div>
        <div className="inline sm:hidden">
          <div className="w-5">
            <ArrowPathIcon />
          </div>
          <p className="mt-2">Monthly Cycle</p>
        </div>
      </div>
    </div>
  );
}
