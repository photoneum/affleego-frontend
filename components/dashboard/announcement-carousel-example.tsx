"use client";

import type { DealDetailResponse } from "@/types/generated";

import { DealsCard } from "../organisms/deals-card";
import { AnnouncementCarousel } from "./announcement-carousel";
import { HotDealCard } from "./hot-deal-card";
import { PromotionCard } from "./promotion-card";

// Example usage component showing how to use AnnouncementCarousel with different card types
export function AnnouncementCarouselExample() {
  // Sample data for demonstration
  const sampleHotDeal: DealDetailResponse = {
    uuid: "hot-deal-1",
    name: "Premium Trading Platform",
    description:
      "Advanced trading platform with real-time analytics and automated trading features.",
    logo_url: "/images/logo-sample.png",
    referral_link: "https://example.com/trading-platform",
    projected_payout: "$250",
    revenue_share: "45%",
    commission_type: "CPA",
    keywords: ["Trading", "Finance", "Investment"],
    is_featured: true,
    requirements: "Minimum deposit $100",
    payout_schedule: "Weekly",
  };

  const sampleDeal = {
    uuid: "deal-1",
    name: "E-commerce Solution",
    description: "Complete e-commerce platform with inventory management",
    logo_url: "/images/ecommerce-logo.png",
    referral_link: "https://example.com/ecommerce",
    projected_payout: "$150",
    revenue_share: "35%",
    commission_type: "Revenue Share",
    keywords: ["E-commerce", "SaaS", "Business"],
    requirements: "Valid business license",
    payout_schedule: "Monthly",
  };

  // Example 1: Mixed card types carousel
  const mixedCards = [
    <PromotionCard
      key="promo-1"
      title="🎉 Welcome Bonus Campaign"
      content="Get started with our exclusive welcome bonus. Earn up to $500 in your first month with qualifying referrals!"
      ctaText="Get Started"
      onCtaClick={() => console.log("Welcome bonus clicked")}
    />,
    <HotDealCard key="hot-deal-1" deal={sampleHotDeal} />,
    <PromotionCard
      key="promo-2"
      title="🚀 Premium Webinar Series"
      content="Join our exclusive webinar series covering advanced affiliate marketing strategies and industry insights."
      imageUrl="/images/webinar-bg.jpg"
      ctaText="Register Now"
      onCtaClick={() => console.log("Webinar registration clicked")}
    />,
    <DealsCard key="deal-1" {...sampleDeal} label="Secure the Deal" />,
  ];

  // Example 2: Only promotion cards
  const promotionOnlyCards = [
    <PromotionCard
      key="promo-only-1"
      title="📈 Q4 Performance Boost"
      content="Double your earnings with our Q4 special commission rates. Limited time offer for top performers."
      ctaText="View Details"
      onCtaClick={() => console.log("Q4 boost clicked")}
    />,
    <PromotionCard
      key="promo-only-2"
      title="🎯 Targeted Campaigns"
      content="Access exclusive high-converting campaigns tailored to your audience demographics."
      ctaText="Browse Campaigns"
      onCtaClick={() => console.log("Campaigns clicked")}
    />,
  ];

  // Example 3: Only deal cards
  const dealOnlyCards = [
    <DealsCard key="deal-only-1" {...sampleDeal} label="Get This Deal" />,
    <DealsCard
      key="deal-only-2"
      {...{
        ...sampleDeal,
        uuid: "deal-2",
        name: "SaaS Analytics Tool",
        description: "Comprehensive analytics dashboard for SaaS businesses",
        projected_payout: "$200",
        revenue_share: "40%",
        keywords: ["Analytics", "SaaS", "Dashboard"],
      }}
      label="Claim Deal"
    />,
  ];

  return (
    <div className="space-y-12 p-8">
      <div className="text-center">
        <h1 className="mb-4 text-3xl font-bold text-white">
          Announcement Carousel Examples
        </h1>
        <p className="mx-auto max-w-2xl text-gray-400">
          Demonstrations of the AnnouncementCarousel component with different
          combinations of PromotionCard, HotDealCard, and DealsCard components.
        </p>
      </div>

      {/* Example 1: Mixed Cards Carousel */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Mixed Card Types</h2>
        <p className="text-sm text-gray-400">
          Combination of promotion cards, hot deals, and regular deals with
          custom settings
        </p>
        <AnnouncementCarousel
          cards={mixedCards}
          autoRotateInterval={6000}
          pauseOnHover={true}
          showDots={true}
          showArrows={true}
          showPlayPause={true}
          enableKeyboardNav={true}
          onSlideChange={(index) => console.log("Mixed carousel slide:", index)}
          className="mx-auto max-w-4xl"
        />
      </section>

      {/* Example 2: Promotion Cards Only */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">
          Promotion Cards Only
        </h2>
        <p className="text-sm text-gray-400">
          Fast rotation with minimal controls for promotional content
        </p>
        <AnnouncementCarousel
          cards={promotionOnlyCards}
          autoRotateInterval={4000}
          pauseOnHover={false}
          showDots={true}
          showArrows={false}
          showPlayPause={false}
          enableKeyboardNav={false}
          className="mx-auto max-w-3xl"
        />
      </section>

      {/* Example 3: Deal Cards Only */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Deal Cards Only</h2>
        <p className="text-sm text-gray-400">
          Manual navigation focus for deal browsing
        </p>
        <AnnouncementCarousel
          cards={dealOnlyCards}
          autoRotateInterval={8000}
          pauseOnHover={true}
          showDots={true}
          showArrows={true}
          showPlayPause={true}
          enableKeyboardNav={true}
          className="mx-auto max-w-2xl"
        />
      </section>

      {/* Example 4: Single Card (No Carousel) */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Single Card</h2>
        <p className="text-sm text-gray-400">
          When only one card is provided, carousel controls are automatically
          hidden
        </p>
        <AnnouncementCarousel
          cards={[
            <PromotionCard
              key="single"
              title="🎁 Exclusive Offer"
              content="This is a single card display without carousel functionality."
              ctaText="Learn More"
              onCtaClick={() => console.log("Single card clicked")}
            />,
          ]}
          className="mx-auto max-w-2xl"
        />
      </section>

      {/* Usage Information */}
      <section className="space-y-4 rounded-lg bg-gray-900/50 p-6">
        <h3 className="text-xl font-semibold text-white">Usage Instructions</h3>
        <div className="space-y-2 text-sm text-gray-300">
          <p>
            <strong>Keyboard Navigation:</strong>
          </p>
          <ul className="ml-4 list-inside list-disc space-y-1">
            <li>Arrow keys: Navigate between slides</li>
            <li>Spacebar: Toggle play/pause</li>
            <li>Home/End: Jump to first/last slide</li>
          </ul>
          <p>
            <strong>Mouse Interaction:</strong>
          </p>
          <ul className="ml-4 list-inside list-disc space-y-1">
            <li>Hover: Pause auto-rotation (when enabled)</li>
            <li>Click arrows: Manual navigation</li>
            <li>Click dots: Jump to specific slide</li>
            <li>Click play/pause: Toggle auto-rotation</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
