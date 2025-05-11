import React from "react";

import { PackageOpen } from "lucide-react";

import DashboardPageHeader from "@/components/dashboard-page-header";
import DealsSection from "@/components/deals-sections";
import InfoCard from "@/components/info-card";
import SearchHeader from "@/components/search-header";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dealsData = [
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

function DealsPage() {
  return (
    <div className="container mx-auto flex flex-1 flex-col space-y-8 p-4 pt-0 text-white md:px-10 md:py-4">
      <DashboardPageHeader
        type="page-header"
        title="My Deals & Performance"
        description="Track your approved deals and performance metrics"
      />
      <InfoCard
        title="Active Deals"
        value="5"
        change={{ value: 5, isPositive: true }}
        icon={<PackageOpen className="text-yellow-400" size={18} />}
        className="w-full md:w-96"
      />
      <SearchHeader />
      <DealsSection deals={[]} />
    </div>
  );
}

export default DealsPage;
