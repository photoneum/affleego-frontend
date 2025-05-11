"use client";

import React from "react";

import DashboardPageHeader from "@/components/dashboard-page-header";
import { DealsCard, DealsCardProps } from "@/components/organisms/deals-card";
import SearchHeader from "@/components/search-header";

const dealsData: DealsCardProps[] = [
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
  {
    id: 3,
    title: "CryptoTrader Pro",
    requirements: "FTD Requirements: Min. $250 deposit + 5 trades",
    paymentMethods: ["Wire", "USDT", "Trading", "Hybrid"],
    projectedPayout: "$5,400",
    conversionRate: "8.5%",
    cpaRate: "Up to $1,200",
    lastUpdated: "2 hours ago",
  },
  {
    id: 4,
    title: "CryptoTrader Pro",
    requirements: "FTD Requirements: Min. $250 deposit + 5 trades",
    paymentMethods: ["Wire", "USDT", "Trading", "Hybrid"],
    projectedPayout: "$5,400",
    conversionRate: "8.5%",
    cpaRate: "Up to $1,200",
    lastUpdated: "2 hours ago",
  },
  {
    id: 5,
    title: "CryptoTrader Pro",
    requirements: "FTD Requirements: Min. $250 deposit + 5 trades",
    paymentMethods: ["Wire", "USDT", "Trading", "Hybrid"],
    projectedPayout: "$5,400",
    conversionRate: "8.5%",
    cpaRate: "Up to $1,200",
    lastUpdated: "2 hours ago",
  },
  {
    id: 6,
    title: "CryptoTrader Pro",
    requirements: "FTD Requirements: Min. $250 deposit + 5 trades",
    paymentMethods: ["Wire", "USDT", "Trading", "Hybrid"],
    projectedPayout: "$5,400",
    conversionRate: "8.5%",
    cpaRate: "Up to $1,200",
    lastUpdated: "2 hours ago",
  },
  {
    id: 7,
    title: "CryptoTrader Pro",
    requirements: "FTD Requirements: Min. $250 deposit + 5 trades",
    paymentMethods: ["Wire", "USDT", "Trading", "Hybrid"],
    projectedPayout: "$5,400",
    conversionRate: "8.5%",
    cpaRate: "Up to $1,200",
    lastUpdated: "2 hours ago",
  },
  {
    id: 8,
    title: "CryptoTrader Pro",
    requirements: "FTD Requirements: Min. $250 deposit + 5 trades",
    paymentMethods: ["Wire", "USDT", "Trading", "Hybrid"],
    projectedPayout: "$5,400",
    conversionRate: "8.5%",
    cpaRate: "Up to $1,200",
    lastUpdated: "2 hours ago",
  },
];

function MarketplacePage() {
  return (
    <div className="container mx-auto flex flex-1 flex-col space-y-8 p-4 pt-0 text-white md:px-10 md:py-4">
      <DashboardPageHeader
        type="page-header"
        title="Deals Marketplace"
        description="Browse & Apply for Exclusive CPA & Revenue Share Deals"
      />
      <SearchHeader />
      <h2 className="mb-4 text-xl font-semibold">Featured Deals</h2>
      <div className="grid grid-cols-1 justify-between md:grid-cols-3 md:gap-10">
        {dealsData.map((trade) => (
          <DealsCard
            key={trade.id}
            title={trade.title}
            label="Apply Now"
            requirements={trade.requirements}
            paymentMethods={trade.paymentMethods}
            projectedPayout={trade.projectedPayout}
            conversionRate={trade.conversionRate}
            cpaRate={trade.cpaRate}
            lastUpdated={trade.lastUpdated}
            // eslint-disable-next-line no-empty-function
            onCopyLink={() => {}}
          />
        ))}
      </div>
    </div>
  );
}

export default MarketplacePage;
