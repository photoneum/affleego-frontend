"use client";

import React from "react";

import { Loader2 } from "lucide-react";

import useGetPromotions from "@/hooks/queries/useGetPromotions";
import useGetTopDeals from "@/hooks/queries/useGetTopDeals";

import { getImageUrl } from "@/lib/utils/imageUrl";

import { AnnouncementCarousel } from "./announcement-carousel";
import { HotDealCard } from "./hot-deal-card";
import { PromotionCard } from "./promotion-card";

function AnnouncementsWrapper() {
  const { data: promotions, isLoading: isLoadingPromotions } =
    useGetPromotions();

  const { data: topDeals, isLoading: isLoadingTop } = useGetTopDeals();

  if (isLoadingPromotions || isLoadingTop) {
    return (
      <div className="flex h-full flex-col items-center justify-center space-y-3">
        <Loader2 className="size-10 animate-spin" />
        <p className="text-sm text-gray-200">Loading promotions for you...</p>
      </div>
    );
  }

  const promotionsCards = promotions.map((promo) => (
    <PromotionCard
      key={promo.uuid}
      title={promo.title}
      content={promo.content}
      imageUrl={getImageUrl(promo.image_background ?? "")}
      onCtaClick={() => window.open(promo.cta_url, "_blank")}
    />
  ));

  const topDealsCards = topDeals.map((deal) => (
    <HotDealCard key={deal.uuid} deal={deal.deal} />
  ));

  const cards = [...promotionsCards, ...topDealsCards];

  return (
    <section className="space-y-4">
      <AnnouncementCarousel
        cards={cards}
        autoRotateInterval={6000}
        pauseOnHover={true}
        showDots={true}
        showArrows={true}
        showPlayPause={true}
        enableKeyboardNav={true}
        className="mx-auto w-full"
      />
    </section>
  );
}

export default AnnouncementsWrapper;
