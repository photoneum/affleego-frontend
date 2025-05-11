"use client";

import React from "react";

import Image from "next/image";

import MessageInfo from "@/public/images/MessageInfo.png";
import { FileDown } from "lucide-react";

import { Button } from "./ui/button";

function NoRewards() {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center space-y-4 rounded-xl bg-[#11111A] py-8 sm:py-12 md:py-16">
      <Image
        alt="Verification Email Sent"
        height={120}
        src={MessageInfo}
        width={120}
      />

      <h2 className="text-xl font-medium text-white sm:text-2xl md:text-3xl">
        No rewards found
      </h2>
      <p className="px-4 text-center text-sm text-white sm:text-base">
        You do not have any rewards yet.
      </p>
    </div>
  );
}

function RewardsSection() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex flex-row items-center justify-between">
        <h2 className="mb-4 text-xl font-semibold">Rewards</h2>
        <Button className="mr-8 rounded-md bg-[#11111A] p-2 text-white hover:bg-yellow-500">
          Export
          <FileDown size={40} />
        </Button>
      </div>
      <NoRewards />
    </div>
  );
}

export default RewardsSection;
