import React from "react";

import { PackageOpen } from "lucide-react";

import DashboardPageHeader from "@/components/dashboard-page-header";
import InfoCard from "@/components/info-card";
import SearchHeader from "@/components/search-header";

import DealsWrapper from "./deals-wrapper";
import FeaturedDealsSection from "./featured-deals-section";
import TopDealsSection from "./top-deals-section";

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
        value="2"
        change={{ value: 1, isPositive: true }}
        icon={<PackageOpen className="text-yellow-400" size={18} />}
        className="w-full md:w-96"
      />
      <SearchHeader />
      {/* Hot/Featured Deal Section */}
      <FeaturedDealsSection />

      {/* Top Deals Section */}
      <TopDealsSection />
      {/* Deals Grid Section */}
      <DealsWrapper />
    </div>
  );
}

export default DealsPage;
