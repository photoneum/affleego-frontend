"use client";

import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import MessageInfo from "@/public/images/MessageInfo.png";
import { Tags } from "lucide-react";

import { DealDetailResponse } from "@/types/generated";

import { DealsCard } from "./organisms/deals-card";
import { Button } from "./ui/button";

export function NoDeals() {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center space-y-4 rounded-md bg-[#11111A] py-8 sm:py-12 md:py-16">
      <Image
        alt="Verification Email Sent"
        height={120}
        src={MessageInfo}
        width={120}
      />

      <h2 className="text-xl font-medium text-white sm:text-2xl md:text-3xl">
        No deals found
      </h2>
      <p className="px-4 text-center text-sm text-white sm:text-base">
        You do not have any Active Deal, Apply to get more deals
      </p>
    </div>
  );
}

type Props = {
  deals: DealDetailResponse[] | undefined;
};

function DealsSection({ deals }: Props) {
  const router = useRouter();

  if (!deals) {
    return <NoDeals />;
  }

  const renderDeals = () => {
    if (deals.length === 0) {
      return <NoDeals />;
    }

    return (
      <div className="grid grid-cols-1 justify-between md:grid-cols-2 md:gap-10">
        {deals.map((deal) => (
          <DealsCard
            key={deal.uuid}
            uuid={deal.uuid}
            name={deal.name}
            requirements={deal.requirements}
            keywords={deal.keywords}
            projected_payout={deal.projected_payout}
            revenue_share={deal.revenue_share}
            payout_schedule={deal.payout_schedule}
            commission_type={deal.commission_type}
            referral_link={deal.referral_link}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex flex-row items-center justify-between">
        <h2 className="mb-4 text-xl font-semibold">Deals</h2>
        <Button onClick={() => router.push("/dashboard/deals")} variant="cta">
          <Tags size={40} />
          View All
        </Button>
      </div>
      {renderDeals()}
    </div>
  );
}

export default DealsSection;
