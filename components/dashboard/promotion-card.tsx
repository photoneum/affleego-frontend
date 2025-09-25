"use client";

import { ButtonHTMLAttributes } from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { cn } from "@/lib/utils";

interface PromotionCardProps {
  title: string;
  content: string;
  imageUrl?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
  ctaProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;
}

export function PromotionCard({
  title,
  content,
  imageUrl,
  ctaText = "Learn More",
  onCtaClick,
  className,
  ctaProps,
}: PromotionCardProps) {
  // Animation variants for smooth entrance and interactions
  const cardMotion = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    whileHover: {
      scale: 1.02,
      boxShadow: "0 8px 32px 0 rgba(255, 193, 7, 0.2)",
    },
    whileTap: { scale: 0.98 },
  };

  // Memphis design elements for fallback background
  const MemphisBackground = () => (
    <div className="absolute inset-0 overflow-hidden rounded-lg">
      {/* Geometric shapes */}
      <div className="absolute -right-6 -top-6 size-24 rotate-45 bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-20" />
      <div className="absolute bottom-4 left-4 size-16 rotate-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-25" />
      <div className="absolute right-8 top-1/2 size-8 -rotate-12 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-30" />
      <div className="absolute bottom-8 right-12 size-6 rotate-45 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 opacity-25" />

      {/* Dotted pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid size-full grid-cols-8 gap-4 p-4">
          {Array.from({ length: 32 }, (_, i) => (
            <div
              key={i}
              className="size-1 rounded-full bg-white/40"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating icons */}
      <Sparkles className="absolute right-4 top-4 size-5 animate-pulse text-yellow-300/30" />
      <Star className="absolute bottom-12 left-8 size-4 animate-bounce text-purple-300/40" />
      <Zap className="absolute left-4 top-1/3 size-4 animate-pulse text-blue-300/35" />
    </div>
  );

  return (
    <motion.div
      initial={cardMotion.initial}
      animate={cardMotion.animate}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={cardMotion.whileHover}
      whileTap={cardMotion.whileTap}
      className={cn("w-full", className)}
    >
      <Card className="group relative overflow-hidden border-2 border-gray-200/20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-xl transition-all duration-300 hover:border-yellow-400/40 hover:shadow-2xl">
        {/* Background Image or Memphis Design */}
        <div className="absolute inset-0">
          {imageUrl ? (
            <div className="relative size-full">
              <Image
                src={imageUrl}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={false}
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
            </div>
          ) : (
            <>
              {/* Dark gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black" />
              {/* Memphis design overlay */}
              <MemphisBackground />
            </>
          )}
        </div>

        <CardContent className="relative z-10 flex min-h-[280px] flex-col justify-between p-6 md:p-8">
          {/* Content Section */}
          <div className="space-y-4">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold leading-tight text-white drop-shadow-lg md:text-3xl">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-200/90 md:text-base">
                {content}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6 flex justify-start">
            <Button
              variant="cta"
              size="lg"
              onClick={onCtaClick}
              className={cn(
                "group/btn rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 font-bold text-black shadow-lg transition-all duration-200 hover:scale-105 hover:from-yellow-300 hover:to-yellow-400 hover:shadow-xl focus:ring-4 focus:ring-yellow-400/50 focus:ring-offset-2 focus:ring-offset-gray-900",
                ctaProps?.className,
              )}
              aria-label={`${ctaText}: ${title}`}
              {...ctaProps}
            >
              <span className="relative z-10">{ctaText}</span>
              <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </Button>
          </div>
        </CardContent>

        {/* Subtle animated border glow */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </Card>
    </motion.div>
  );
}
