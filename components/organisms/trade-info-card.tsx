"use client";

import React from "react";

import { Calendar, Clock, Copy, DollarSign, PercentCircle } from "lucide-react";

import { TagBadge } from "../atoms/tag-badge";
import { MetricDisplay } from "../molecules/metric-display";
import { Button } from "../ui/button";

interface TradeInfoCardProps {
  title: string;
  requirements: string;
  paymentMethods: string[];
  projectedPayout: string;
  conversionRate: string;
  cpaRate: string;
  lastUpdated: string;
  onCopyLink: () => void;
}

export const TradeInfoCard: React.FC<TradeInfoCardProps> = ({
  title,
  requirements,
  paymentMethods,
  projectedPayout,
  conversionRate,
  cpaRate,
  lastUpdated,
  onCopyLink,
}) => {
  return (
    <div className="mx-auto w-full max-w-lg rounded-xl bg-[#11111A] p-6 text-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="space-y-4">
        <div>
          <h3 className="mb-1 text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-400">{requirements}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {paymentMethods.map((method) => (
            <TagBadge key={method} label={method} />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <MetricDisplay
            icon={<Calendar size={20} />}
            label="Projected Payout"
            value={projectedPayout}
          />

          <MetricDisplay
            icon={<PercentCircle size={20} />}
            label="Conversion Rate"
            value={conversionRate}
          />

          <MetricDisplay
            icon={<DollarSign size={20} />}
            label="CPA Rate"
            value={cpaRate}
          />

          <MetricDisplay
            icon={<Clock size={20} />}
            label="Last Updated"
            value={lastUpdated}
          />
        </div>

        <Button variant="cta" onClick={onCopyLink}>
          <Copy size={40} />
          Copy Tracking Link
        </Button>
      </div>
    </div>
  );
};
