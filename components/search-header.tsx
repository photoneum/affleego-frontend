import React from "react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

function SearchHeader() {
  return (
    <div className="flex items-center justify-between rounded-lg bg-[#11111A] p-8">
      <Input
        className="w-9/12 rounded-full border-none bg-[#2C353D] px-4 py-5 text-white placeholder:text-gray-200 md:w-10/12 md:px-6 md:py-8"
        placeholder="Search for deals"
        type="text"
      />

      <Button variant="cta" className="w-3/12 p-3 md:w-1/12 md:px-5 md:py-7">
        Search
      </Button>
    </div>
  );
}

export default SearchHeader;
