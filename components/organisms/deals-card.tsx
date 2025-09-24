"use client";

import React, { useEffect, useRef } from "react";

import { useRouter } from "next/navigation";

import { Calendar, Clock, Copy, PercentCircle } from "lucide-react";

import useDealClick from "@/hooks/mutations/useDealClick";
import useDealImpression from "@/hooks/mutations/useDealImpression";

import { DealDetailResponse } from "@/types/generated";

import { TagBadge } from "../atoms/tag-badge";
import { MetricDisplay } from "../molecules/metric-display";
import { Button } from "../ui/button";

export interface DealsCardProps extends Omit<DealDetailResponse, "uuid"> {
  uuid: string;
  label?: string;
}

export const DealsCard: React.FC<DealsCardProps & { uuid: string }> = ({
  uuid,
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
  const cardRef = useRef<HTMLDivElement>(null);
  const impressionSent = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { mutateAsync: sendImpression } = useDealImpression();
  const { mutateAsync: sendClick } = useDealClick();

  // Impression tracking: fires only if card is in view for 4s
  useEffect(() => {
    const node = cardRef.current;
    if (!node || impressionSent.current) return;

    const observer = new window.IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting && !impressionSent.current) {
          timerRef.current = setTimeout(async () => {
            await sendImpression(uuid);
            impressionSent.current = true;
            observer.disconnect();
          }, 4000);
        } else if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [uuid, sendImpression]);

  // Click tracking
  const handleReferralLink = async () => {
    if (uuid) {
      await sendClick(uuid);
    }
    if (referral_link) {
      router.push(referral_link);
    }
  };

  return (
    <div
      ref={cardRef}
      className="mx-auto w-full max-w-lg rounded-xl bg-[#11111A] p-6 text-white shadow-lg transition-all duration-300 hover:shadow-xl"
    >
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
