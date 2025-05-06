"use client";

import React from "react";

import Image from "next/image";

import MessageInfo from "@/public/images/MessageInfo.png";
import { Tags } from "lucide-react";

import { TradeInfoCard } from "./organisms/trade-info-card";
import { Button } from "./ui/button";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function NoDeals() {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center space-y-4 rounded-md bg-[#11111A] py-8 sm:py-12 md:py-16">
      <Image
        alt="Verification Email Sent"
        height={180}
        src={MessageInfo}
        width={180}
      />

      <h2 className="text-xl font-medium text-white sm:text-2xl md:text-3xl">
        No deals found
      </h2>
      <p className="px-4 text-center text-sm text-white sm:text-base">
        You do not have any Active Deal, Apply to get more deals
      </p>
    </div>
  );
}

function DealsSection() {
  const tradeData = [
    {
      id: 1,
      title: "TradePro FX",
      requirements: "FTD Requirements: Min. $250 deposit + 5 trades",
      paymentMethods: ["Wire", "USDT", "Trading", "Hybrid"],
      projectedPayout: "$5,400",
      conversionRate: "8.5%",
      cpaRate: "Up to $1,200",
      lastUpdated: "2 hours ago",
    },
    {
      id: 2,
      title: "CryptoTrader Pro",
      requirements: "FTD Requirements: Min. $250 deposit + 5 trades",
      paymentMethods: ["Wire", "USDT", "Trading", "Hybrid"],
      projectedPayout: "$5,400",
      conversionRate: "8.5%",
      cpaRate: "Up to $1,200",
      lastUpdated: "2 hours ago",
    },
  ];

  const handleCopyLink = (id: number) => {
    console.log(`Copied tracking link for product ${id}`);
    // In a real app, would copy link to clipboard
  };
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex flex-row items-center justify-between">
        <h2 className="mb-4 text-xl font-semibold">Deals</h2>
        <Button variant="cta">
          <Tags size={40} />
          View All
        </Button>
      </div>
      {/* <NoDeals /> */}
      <div className="grid grid-cols-1 justify-between md:grid-cols-2 md:gap-10">
        {tradeData.map((trade) => (
          <TradeInfoCard
            key={trade.id}
            title={trade.title}
            requirements={trade.requirements}
            paymentMethods={trade.paymentMethods}
            projectedPayout={trade.projectedPayout}
            conversionRate={trade.conversionRate}
            cpaRate={trade.cpaRate}
            lastUpdated={trade.lastUpdated}
            onCopyLink={() => handleCopyLink(trade.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default DealsSection;
