"use client";

import React from "react";

import { PackageOpen } from "lucide-react";

import InfoCard from "@/components/info-card";

import useGetDealsOverview from "@/hooks/queries/useGetDealsOverview";

import getDailyNumber from "@/lib/utils/dailyNumber";

function DealsOverview() {
  const { data, isLoading } = useGetDealsOverview();
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
      <InfoCard
        title="Total Number of Deals"
        value={String(data?.all_deals ?? 0)}
        change={{
          value: getDailyNumber(data?.all_deals),
          isPositive: true,
        }}
        icon={<PackageOpen className="text-yellow-400" size={18} />}
        className="w-full p-4 sm:p-6 md:w-96"
        isLoading={isLoading}
      />
      <InfoCard
        title="Featured Deals"
        value={String(data?.featured_deals ?? 0)}
        change={{
          value: getDailyNumber(data?.featured_deals),
          isPositive: true,
        }}
        icon={<PackageOpen className="text-yellow-400" size={18} />}
        className="w-full p-4 sm:p-6 md:w-96"
        isLoading={isLoading}
      />
      <div className="flex flex-col space-y-2">
        <InfoCard
          title="Top Performing Deals"
          value={String(data?.hot_deals ?? 0)}
          change={{
            value: getDailyNumber(data?.hot_deals),
            isPositive: true,
          }}
          icon={<PackageOpen className="text-yellow-400" size={18} />}
          className="w-full p-4 sm:p-6 md:w-96"
          isLoading={isLoading}
          description={`${data?.week_start} - ${data?.week_end}`}
        />
      </div>
    </div>
  );
}

export default DealsOverview;
