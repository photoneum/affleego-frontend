"use client";

import React from "react";

import { DealsCard } from "@/components/organisms/deals-card";

import useGetTopDeals from "@/hooks/queries/useGetTopDeals";

function TopDealsSection() {
  const {
    data,
    isLoading: isLoadingTop,
    error: topDealsError,
  } = useGetTopDeals();

  const topDeals = data?.results ?? [];

  if (isLoadingTop) {
    return <div className="text-gray-400">Loading top deals...</div>;
  }
  if (topDealsError) {
    return <div className="text-red-500">Failed to load top deals</div>;
  }

  if (!topDeals || topDeals.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Top Deals</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {Array.isArray(topDeals) &&
          topDeals.map((topDeal, idx) => (
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
              logo_url={topDeal.deal.logo_url}
            />
          ))}
      </div>
    </div>
  );
}

export default TopDealsSection;
