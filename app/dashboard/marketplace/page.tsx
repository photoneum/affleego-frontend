"use client";

import React from "react";

import DashboardPageHeader from "@/components/dashboard-page-header";
import SearchHeader from "@/components/search-header";

import DealsWrapper from "../deals/deals-wrapper";

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
      <DealsWrapper />
    </div>
  );
}

export default MarketplacePage;
