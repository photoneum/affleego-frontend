"use client";

import React from "react";

import { Loader2 } from "lucide-react";

import DealsSection from "@/components/deals-sections";

import useGetDeals from "@/hooks/queries/useGetDeals";

type Props = {
  showViewAll?: boolean;
  pageSize?: number;
};

function DealsWrapper({ showViewAll, pageSize }: Props) {
  const { data, isLoading } = useGetDeals({ page_size: pageSize || 6 });
  const deals = data?.results;

  if (isLoading) {
    return (
      <div className="flex h-full flex-col items-center justify-center space-y-3">
        <Loader2 className="size-10 animate-spin" />
        <p className="text-sm text-gray-200">Loading deals...</p>
      </div>
    );
  }

  return <DealsSection deals={deals} showViewAll={showViewAll} />;
}

export default DealsWrapper;
