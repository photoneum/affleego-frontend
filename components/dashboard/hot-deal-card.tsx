"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  DollarSign,
  Percent,
  Sparkles,
  TrendingUp,
} from "lucide-react";

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
      boxShadow:
        "0 20px 40px 0 rgba(59, 130, 246, 0.15), 0 8px 32px 0 rgba(236, 72, 153, 0.1)",
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
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={cardMotion.whileHover}
      whileTap={cardMotion.whileTap}
      style={{ minHeight: 320 }}
    >
      <Card
        className="group relative flex flex-col justify-between overflow-hidden border-0 bg-gradient-to-br from-slate-900 via-blue-950/90 to-purple-950/80 shadow-2xl backdrop-blur-sm"
        aria-label="Featured Hot Deal"
      >
        {/* Premium glow border */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 p-px">
          <div className="size-full rounded-lg bg-gradient-to-br from-slate-900 via-blue-950/90 to-purple-950/80" />
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -right-4 -top-4 size-20 animate-pulse rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl" />
          <div
            className="absolute -bottom-6 -left-6 size-24 animate-pulse rounded-full bg-gradient-to-r from-pink-400/20 to-violet-400/20 blur-xl"
            style={{ animationDelay: "1s" }}
          />
          <Sparkles className="absolute right-4 top-4 size-4 animate-pulse text-blue-300/40" />
          <TrendingUp
            className="absolute bottom-6 left-4 size-4 animate-bounce text-purple-300/40"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        <CardHeader className="relative z-10 pb-4">
          <div className="flex items-start gap-4">
            {/* Enhanced logo container */}
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-blue-400/50 to-purple-400/50 blur-md" />
              <div className="relative flex items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-100 p-1 shadow-xl ring-2 ring-white/20">
                {deal.logo_url ? (
                  <Image
                    src={getImageUrl(deal.logo_url)}
                    alt={deal.name + " logo"}
                    width={300}
                    height={300}
                    className="size-14 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-purple-100">
                    <Award size={24} className="text-blue-600" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1 space-y-3">
              <CardTitle className="line-clamp-2 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                {deal.name}
              </CardTitle>
              {deal.is_featured && (
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 px-4 py-1.5 shadow-lg">
                  <Sparkles size={12} className="animate-spin text-white" />
                  <span className="text-xs font-bold text-white">
                    FEATURED DEAL
                  </span>
                </div>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="relative z-10 flex flex-1 flex-col justify-between pt-0">
          <div className="space-y-4">
            {/* Description */}
            <p className="text-sm leading-relaxed text-slate-200/90 md:text-base">
              {deal.description}
            </p>

            {/* Keywords */}
            {deal.keywords && deal.keywords.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {deal.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="inline-flex items-center rounded-full border border-blue-400/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-3 py-1 text-xs font-medium text-blue-200 backdrop-blur-sm"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            )}

            {/* Enhanced metrics section */}
            <div className="flex flex-col space-y-3">
              {deal.projected_payout && (
                <div className="group/metric relative overflow-hidden rounded-xl border border-emerald-500/20 bg-gradient-to-r from-emerald-900/30 to-green-900/30 p-3 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-green-400/5 opacity-0 transition-opacity group-hover/metric:opacity-100" />
                  <div className="relative flex items-center gap-2">
                    <div className="rounded-lg bg-emerald-500/20 p-1.5">
                      <DollarSign size={16} className="text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs text-emerald-200/70">Payout</p>
                      <p className="font-bold text-emerald-300">
                        {deal.projected_payout}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {deal.revenue_share && (
                <div className="group/metric relative overflow-hidden rounded-xl border border-blue-500/20 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-3 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 opacity-0 transition-opacity group-hover/metric:opacity-100" />
                  <div className="relative flex items-center gap-2">
                    <div className="rounded-lg bg-blue-500/20 p-1.5">
                      <Percent size={16} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-blue-200/70">Revenue</p>
                      <p className="font-bold text-blue-300">
                        {deal.revenue_share}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {deal.commission_type && (
                <div className="group/metric relative overflow-hidden rounded-xl border border-purple-500/20 bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-3 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-pink-400/5 opacity-0 transition-opacity group-hover/metric:opacity-100" />
                  <div className="relative flex items-center gap-2">
                    <div className="rounded-lg bg-purple-500/20 p-1.5">
                      <BadgeCheck size={16} className="text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs text-purple-200/70">Type</p>
                      <p className="font-bold text-purple-300">
                        {deal.commission_type}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced CTA button */}
          <div className="mt-6">
            <Button
              variant="cta"
              size="lg"
              className="group/btn relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-px text-white shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/25 focus:ring-4 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-slate-900"
              onClick={handleClick}
              aria-label={`View deal: ${deal.name}`}
            >
              <div className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-6 py-4 transition-all duration-300 group-hover/btn:from-blue-500 group-hover/btn:via-purple-500 group-hover/btn:to-pink-500">
                <span className="text-lg font-bold">View Deal</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover/btn:opacity-100" />
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
