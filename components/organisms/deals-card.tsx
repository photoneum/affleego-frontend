"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { Calendar, Clock, Copy, PercentCircle } from "lucide-react";

import { DealDetailResponse } from "@/types/generated";

import { TagBadge } from "../atoms/tag-badge";
import { MetricDisplay } from "../molecules/metric-display";
import { Button } from "../ui/button";

export interface DealsCardProps extends Omit<DealDetailResponse, "uuid"> {
  label?: string;
}

export const DealsCard: React.FC<DealsCardProps> = ({
  name,
  requirements,
  keywords,
  referral_link,
  projected_payout,
  revenue_share,
  payout_schedule,
  commission_type,
  label = "Secure the deal",
}) => {
  const router = useRouter();
  const handleReferralLink = () => {
    router.push(referral_link);
  };

  return (
    <div className="mx-auto w-full max-w-lg rounded-xl bg-[#11111A] p-6 text-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="space-y-4">
        <div>
          <h3 className="mb-1 text-xl font-semibold">{name}</h3>
          {requirements && (
            <p className="text-sm text-gray-400">{requirements}</p>
          )}
          {commission_type && (
            <p className="text-sm text-gray-400">{commission_type}</p>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword) => (
            <TagBadge key={keyword} label={keyword} />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <MetricDisplay
            icon={<Calendar size={20} />}
            label="Projected Payout"
            value={projected_payout}
          />

          <MetricDisplay
            icon={<PercentCircle size={20} />}
            label="Revenue Share"
            value={revenue_share}
          />

          {/* <MetricDisplay
            icon={<DollarSign size={20} />}
            label="CPA Rate"
            value={cpa_rate}
          /> */}

          <MetricDisplay
            icon={<Clock size={20} />}
            label="Payout Schedule"
            value={payout_schedule}
          />
        </div>

        <Button variant="cta" onClick={handleReferralLink}>
          <Copy size={40} />
          {label}
        </Button>
      </div>
    </div>
  );
};
