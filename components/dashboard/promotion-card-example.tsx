"use client";

import { PromotionCard } from "./promotion-card";

export function PromotionCardExample() {
  const handleWebinarClick = () => {
    console.log("Webinar CTA clicked");
    // Here you would typically navigate or open a modal
  };

  const handleNewsletterClick = () => {
    console.log("Newsletter CTA clicked");
    // Here you would typically open a subscription form
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Example 1: With background image */}
      <PromotionCard
        title="Join Our Weekly Webinar"
        content="Learn advanced affiliate marketing strategies from industry experts. Get insider tips and exclusive deals every Tuesday at 2 PM EST."
        imageUrl="/images/webinar-bg.jpg"
        ctaText="Register Now"
        onCtaClick={handleWebinarClick}
      />

      {/* Example 2: Without background image (Memphis design) */}
      <PromotionCard
        title="Subscribe to Newsletter"
        content="Stay updated with the latest deals, market trends, and exclusive offers. Join over 10,000 successful affiliates."
        ctaText="Subscribe Free"
        onCtaClick={handleNewsletterClick}
      />

      {/* Example 3: Custom styling */}
      <PromotionCard
        title="Limited Time Offer"
        content="Get 50% bonus on your first deal commission this month. Don't miss out on this exclusive opportunity!"
        ctaText="Claim Bonus"
        onCtaClick={() => console.log("Bonus claimed")}
        className="md:col-span-2"
        ctaProps={{
          className:
            "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500",
        }}
      />
    </div>
  );
}
