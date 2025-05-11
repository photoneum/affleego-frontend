import React from "react";

import { QueryClient } from "@tanstack/react-query";
import { PackageOpen } from "lucide-react";

import DashboardPageHeader from "@/components/dashboard-page-header";
import InfoCard from "@/components/info-card";
import SearchHeader from "@/components/search-header";

import { DEALS_QUERY_KEY } from "@/lib/constants/query-keys";

import { getDeals } from "@/services/getDeals";

import DealsWrapper from "./deals-wrapper";

async function DealsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [DEALS_QUERY_KEY],
    queryFn: () => getDeals(),
  });

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
      <DealsWrapper />
    </div>
  );
}

export default DealsPage;
