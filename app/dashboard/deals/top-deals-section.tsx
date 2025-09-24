"use client";

import React from "react";

import { DealsCard } from "@/components/organisms/deals-card";

import useGetTopDeals from "@/hooks/queries/useGetTopDeals";

function TopDealsSection() {
  const {
    data: topDeals,
    isLoading: isLoadingTop,
    error: topDealsError,
  } = useGetTopDeals();

  if (isLoadingTop) {
    return <div className="text-gray-400">Loading top deals...</div>;
  }
  if (topDealsError) {
    return <div className="text-red-500">Failed to load top deals</div>;
  }

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Top Deals</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {topDeals.map((topDeal, idx) => (
          <DealsCard
            key={topDeal.uuid || idx}
            name={topDeal.deal.name}
            requirements={topDeal.deal.requirements}
            keywords={topDeal.deal.keywords || []}
            projected_payout={topDeal.deal.projected_payout}
            revenue_share={topDeal.deal.revenue_share}
            payout_schedule={topDeal.deal.payout_schedule}
            commission_type={topDeal.deal.commission_type}
            referral_link={topDeal.deal.referral_link}
          />
        ))}
      </div>
    </div>
  );
}

export default TopDealsSection;
