"use client";

import { useEffect, useRef } from "react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import useDealClick from "@/hooks/mutations/useDealClick";
import useDealImpression from "@/hooks/mutations/useDealImpression";

import type { DealDetailResponse } from "@/types/generated";

interface HotDealCardProps {
  deal: DealDetailResponse;
}

export function HotDealCard({ deal }: HotDealCardProps) {
  const impressionSent = useRef(false);
  const { mutate: sendImpression } = useDealImpression();
  const { mutate: sendClick } = useDealClick();

  useEffect(() => {
    if (!impressionSent.current) {
      const timer = setTimeout(() => {
        sendImpression(deal.uuid);
        impressionSent.current = true;
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [deal.uuid, sendImpression]);

  const handleClick = () => {
    sendClick(deal.uuid);
    toast.success("Deal clicked!");
    window.open(deal.referral_link, "_blank");
  };

  return (
    <Card className="border-2 border-yellow-400 bg-gradient-to-br from-yellow-100 to-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-yellow-700">
          🔥 Hot Deal
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <span className="text-lg font-semibold">{deal.name}</span>
          <span className="text-sm text-gray-600">{deal.description}</span>
          <div className="mt-2 flex gap-4">
            <Button variant="default" onClick={handleClick}>
              View Deal
            </Button>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            {deal.projected_payout && (
              <>Projected Payout: {deal.projected_payout} | </>
            )}
            {deal.revenue_share && <>Revenue Share: {deal.revenue_share} | </>}
            {deal.commission_type && <>Type: {deal.commission_type}</>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
