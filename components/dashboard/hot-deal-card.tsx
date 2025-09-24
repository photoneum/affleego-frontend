"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import { Award, BadgeCheck, DollarSign, Percent } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import useDealClick from "@/hooks/mutations/useDealClick";
import useDealImpression from "@/hooks/mutations/useDealImpression";

import { getImageUrl } from "@/lib/utils/imageUrl";

import type { DealDetailResponse } from "@/types/generated";

interface HotDealCardProps {
  deal: DealDetailResponse;
}

export function HotDealCard({ deal }: HotDealCardProps) {
  // Framer Motion animation variants for entrance and interaction
  const cardMotion = {
    initial: { opacity: 0, scale: 0.96 },
    animate: { opacity: 1, scale: 1 },
    whileHover: {
      scale: 1.02,
      boxShadow: "0 8px 32px 0 rgba(255, 193, 7, 0.25)",
    },
    whileTap: { scale: 0.98 },
  };

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
    window.open(deal.referral_link, "_blank");
  };

  return (
    <motion.div
      initial={cardMotion.initial}
      animate={cardMotion.animate}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={cardMotion.whileHover}
      whileTap={cardMotion.whileTap}
      style={{ minHeight: 300 }}
    >
      <Card
        className="relative flex flex-col justify-between overflow-hidden border-2 border-yellow-400 bg-[#18181b] shadow-2xl backdrop-blur-lg"
        aria-label="Featured Hot Deal"
      >
        <CardHeader className="flex flex-row items-start gap-3 pb-0">
          <div className="flex items-center justify-center rounded-full bg-white p-0.5 shadow-lg">
            {deal.logo_url ? (
              <Image
                src={getImageUrl(deal.logo_url)}
                alt={deal.name + " logo"}
                width={300}
                height={300}
                className="size-12 rounded-full object-cover"
                style={{ background: "#fff" }}
              />
            ) : (
              <div className="flex size-12 items-center justify-center rounded-full bg-gray-200 text-gray-500 shadow-lg">
                <Award size={32} className="text-yellow-500" />
              </div>
            )}
          </div>
          <div className="flex flex-col space-y-3">
            <CardTitle className="line-clamp-2 text-3xl font-extrabold text-white drop-shadow-lg">
              {deal.name}
            </CardTitle>
            {deal.is_featured && (
              <span className="w-fit animate-[pulse_1.5s_infinite] rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-3 py-1 text-xs font-bold text-yellow-900 shadow ring-2 ring-yellow-300/60">
                Featured
              </span>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col justify-between pt-2">
          <div>
            <span className="mb-2 block text-base font-medium leading-relaxed text-white/90">
              {deal.description}
            </span>
            <div className="mb-4 flex flex-row flex-wrap gap-2 overflow-x-auto pb-1">
              {deal.keywords?.map((kw) => (
                <span
                  key={kw}
                  className="inline-flex items-center whitespace-nowrap rounded-full border border-yellow-200 bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-900 shadow-sm"
                >
                  {kw}
                </span>
              ))}
            </div>
            <div className="mb-4 flex flex-row flex-wrap items-center justify-start gap-4 rounded-lg bg-gray-100/80 px-4 py-3">
              {deal.projected_payout && (
                <span className="flex items-center gap-2 rounded bg-white px-3 py-2 text-sm font-bold text-gray-800 shadow-sm">
                  <DollarSign size={18} className="text-yellow-500" />
                  {deal.projected_payout}
                </span>
              )}
              {deal.revenue_share && (
                <span className="flex items-center gap-2 rounded bg-white px-3 py-2 text-sm font-bold text-gray-800 shadow-sm">
                  <Percent size={18} className="text-yellow-500" />
                  {deal.revenue_share}
                </span>
              )}
              {deal.commission_type && (
                <span className="flex items-center gap-2 rounded bg-white px-3 py-2 text-sm font-bold text-gray-800 shadow-sm">
                  <BadgeCheck size={18} className="text-yellow-500" />
                  {deal.commission_type}
                </span>
              )}
            </div>
          </div>
          <div className="mt-auto flex w-full items-end justify-center">
            <Button
              variant="cta"
              size="lg"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-white py-4 text-xl font-bold text-black shadow-xl ring-2 ring-yellow-300/40 transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl hover:ring-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2"
              onClick={handleClick}
              aria-label={`View deal: ${deal.name}`}
            >
              <Award
                size={28}
                className="animate-[pulse_2s_infinite] text-black drop-shadow"
              />
              View Deal
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
