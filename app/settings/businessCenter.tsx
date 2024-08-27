import React from "react";
import LegalInfo from "./components/legalinfo";
import BusinessProfile from "./components/businessProfile";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import BusinessInfo from "./components/businessInfo";

export const BusinessCenter = () => {
  return (
    <div>
      <LegalInfo />
      <div className="mt-4 sm:mt-6">
        <BusinessInfo />
      </div>
      <div className="mt-4 sm:mt-6">
        <BusinessProfile />
      </div>
      <div className="mt-4 sm:mt-6 relative w-fit mx-auto">
        <button
          type="submit"
          className="block mx-auto rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-md hover:bg-gray-700 active:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700"
        >
          View Profile
        </button>
        <div className="w-5 absolute left-28 bottom-2">
          <ArrowTopRightOnSquareIcon />
        </div>
      </div>
    </div>
  );
};
