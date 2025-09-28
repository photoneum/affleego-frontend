"use client";

import { HotDealCard } from "@/components/dashboard/hot-deal-card";

import useGetFeaturedDeals from "@/hooks/queries/useGetFeaturedDeals";

function FeaturedDealsSection() {
  const {
    data,
    isLoading: isLoadingFeatured,
    error: featuredError,
  } = useGetFeaturedDeals();

  const featuredDeals = data?.results ?? [];

  if (!featuredDeals || featuredDeals.length === 0) {
    return null;
  }

  if (isLoadingFeatured) {
    return <div className="text-gray-400">Loading hot deal...</div>;
  }
  if (featuredError) {
    return <div className="text-red-500">Failed to load hot deal</div>;
  }

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Featured Deals</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
        {featuredDeals.map((featuredDeal) => (
          <HotDealCard key={featuredDeal.uuid} deal={featuredDeal} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedDealsSection;
