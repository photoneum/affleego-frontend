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
  const [dealDetails, setDealDetails] = React.useState<
    import("@/types/generated").DealDetailResponse[]
  >([]);
  const [loadingDetails, setLoadingDetails] = React.useState(false);
  const [detailsError, setDetailsError] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function fetchDetails() {
      if (!topDeals || topDeals.length === 0) return;
      setLoadingDetails(true);
      setDetailsError(null);
      try {
        const responses = await Promise.all(
          topDeals.map((dealStat) =>
            fetch(`/api/v1/deals/${dealStat.deal}`).then((res) =>
              res.ok ? res.json() : null,
            ),
          ),
        );
        setDealDetails(responses.filter(Boolean));
      } catch {
        setDetailsError("Failed to fetch deal details");
      } finally {
        setLoadingDetails(false);
      }
    }
    fetchDetails();
  }, [topDeals]);

  if (isLoadingTop || loadingDetails) {
    return <div className="text-gray-400">Loading top deals...</div>;
  }
  if (topDealsError || detailsError) {
    return <div className="text-red-500">Failed to load top deals</div>;
  }
  if (!dealDetails || dealDetails.length === 0) {
    return <div className="text-gray-400">No top deals available</div>;
  }
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Top Deals</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {dealDetails.map((deal, idx) => (
          <DealsCard
            key={deal.uuid || idx}
            uuid={deal.uuid}
            name={deal.name}
            requirements={deal.requirements}
            keywords={deal.keywords || []}
            projected_payout={deal.projected_payout}
            revenue_share={deal.revenue_share}
            payout_schedule={deal.payout_schedule}
            commission_type={deal.commission_type}
            referral_link={deal.referral_link}
          />
        ))}
      </div>
    </div>
  );
}

export default TopDealsSection;
