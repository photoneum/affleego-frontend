"use client";

import { HotDealCard } from "@/components/dashboard/hot-deal-card";

import useGetFeaturedDeals from "@/hooks/queries/useGetFeaturedDeals";

function FeaturedDealsSection() {
  const {
    data: featuredDeals,
    isLoading: isLoadingFeatured,
    error: featuredError,
  } = useGetFeaturedDeals();

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Hot Deal</h2>
      {isLoadingFeatured ? (
        <div className="text-gray-400">Loading hot deal...</div>
      ) : featuredError ? (
        <div className="text-red-500">Failed to load hot deal</div>
      ) : featuredDeals && featuredDeals.length > 0 && featuredDeals[0] ? (
        <HotDealCard deal={featuredDeals[0]} />
      ) : (
        <div className="text-gray-400">No hot deal available</div>
      )}
    </div>
  );
}

export default FeaturedDealsSection;
