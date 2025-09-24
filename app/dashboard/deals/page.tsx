import React from "react";

import DashboardPageHeader from "@/components/dashboard-page-header";
import SearchHeader from "@/components/search-header";

import DealsOverview from "./deals-overview";
import DealsWrapper from "./deals-wrapper";
import FeaturedDealsSection from "./featured-deals-section";
import TopDealsSection from "./top-deals-section";

function DealsPage() {
  return (
    <div className="container mx-auto flex flex-1 flex-col space-y-8 p-4 pt-0 text-white md:px-10 md:py-4">
      <DashboardPageHeader
        type="page-header"
        title="Deals For You"
        description="Track your approved deals and performance metrics"
      />
      {/* Deals Overview Section */}
      <DealsOverview />
      {/* Search Header */}
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
