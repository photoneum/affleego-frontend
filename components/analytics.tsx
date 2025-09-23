"use client";

import React from "react";

import { Star, User2 } from "lucide-react";

import { useDashboardOverview } from "@/hooks/queries/use-dashboard-overview";

import getDailyNumber from "@/lib/utils/dailyNumber";

import InfoCard from "./info-card";
import InfoCardGrid from "./info-card-grid";

function Analytics() {
  const { data, isLoading, isError } = useDashboardOverview();
  const usersCount = parseInt(data?.total_affiliates ?? "0");
  const dealsCount = parseInt(data?.total_deals ?? "0");
  const topGeo = data?.top_geo ?? "-";
  const weeklyFtds = data?.weekly_ftds ?? 0;
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-semibold">Community Stats</h2>
      <InfoCardGrid>
        <InfoCard
          isLoading={isLoading}
          title="Number of affiliates"
          value={isLoading ? "..." : isError ? "N/A" : usersCount.toString()}
          change={{
            value: getDailyNumber(usersCount),
            isPositive: getDailyNumber(usersCount) > 0,
          }}
          icon={<User2 size={18} />}
        />
        <InfoCard
          isLoading={isLoading}
          title="Number of deals"
          value={isLoading ? "..." : isError ? "N/A" : dealsCount.toString()}
          change={{
            value: getDailyNumber(dealsCount),
            isPositive: getDailyNumber(dealsCount) > 0,
          }}
          icon={<Star size={18} />}
        />
        <InfoCard
          isLoading={isLoading}
          title="Top GEO"
          value={isLoading ? "..." : isError ? "N/A" : topGeo}
          icon={<Star size={18} />}
        />
        <InfoCard
          isLoading={isLoading}
          title="Weekly FTDs"
          value={isLoading ? "..." : isError ? "N/A" : weeklyFtds.toString()}
          change={{ value: getDailyNumber(), isPositive: getDailyNumber() > 0 }}
          icon={<Star size={18} />}
        />
      </InfoCardGrid>
    </section>
  );
}

export default Analytics;
