"use client";

import { ReactElement, useCallback, useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface AnnouncementCarouselProps {
  /**
   * Array of card components (PromotionCard, HotDealCard, DealsCard)
   * Each element should be a fully rendered component
   */
  cards: ReactElement[];
  /**
   * Auto-rotation interval in milliseconds
   * @default 5000
   */
  autoRotateInterval?: number;
  /**
   * Whether to pause auto-rotation on hover
   * @default true
   */
  pauseOnHover?: boolean;
  /**
   * Whether to show navigation dots
   * @default true
   */
  showDots?: boolean;
  /**
   * Whether to show navigation arrows
   * @default true
   */
  showArrows?: boolean;
  /**
   * Whether to show play/pause button
   * @default true
   */
  showPlayPause?: boolean;
  /**
   * Whether to enable keyboard navigation
   * @default true
   */
  enableKeyboardNav?: boolean;
  /**
   * Custom className for the carousel container
   */
  className?: string;
  /**
   * Called when the active slide changes
   */
  onSlideChange?: (index: number) => void;
}

export function AnnouncementCarousel({
  cards,
  autoRotateInterval = 5000,
  pauseOnHover = true,
  showDots = true,
  showArrows = true,
  showPlayPause = true,
  enableKeyboardNav = true,
  className,
  onSlideChange,
}: AnnouncementCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-rotation logic
  const startAutoRotation = useCallback(() => {
    if (cards.length <= 1 || !isPlaying || isPaused) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % cards.length;
        onSlideChange?.(nextIndex);
        return nextIndex;
      });
    }, autoRotateInterval);
  }, [cards.length, isPlaying, isPaused, autoRotateInterval, onSlideChange]);

  const stopAutoRotation = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Navigation functions
  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      onSlideChange?.(index);
      // Restart auto-rotation after manual navigation
      if (isPlaying && !isPaused) {
        stopAutoRotation();
        setTimeout(startAutoRotation, autoRotateInterval);
      }
    },
    [
      isPlaying,
      isPaused,
      onSlideChange,
      stopAutoRotation,
      startAutoRotation,
      autoRotateInterval,
    ],
  );

  const goToPrevious = useCallback(() => {
    const prevIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
    goToSlide(prevIndex);
  }, [currentIndex, cards.length, goToSlide]);

  const goToNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % cards.length;
    goToSlide(nextIndex);
  }, [currentIndex, cards.length, goToSlide]);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // Auto-rotation effect
  useEffect(() => {
    if (isPlaying && !isPaused) {
      startAutoRotation();
    } else {
      stopAutoRotation();
    }

    return stopAutoRotation;
  }, [isPlaying, isPaused, startAutoRotation, stopAutoRotation]);

  // Keyboard navigation
  useEffect(() => {
    if (!enableKeyboardNav) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.target !== containerRef.current &&
        !containerRef.current?.contains(event.target as Node)
      ) {
        return;
      }

      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          goToPrevious();
          break;
        case "ArrowRight":
          event.preventDefault();
          goToNext();
          break;
        case " ":
          event.preventDefault();
          togglePlayPause();
          break;
        case "Home":
          event.preventDefault();
          goToSlide(0);
          break;
        case "End":
          event.preventDefault();
          goToSlide(cards.length - 1);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    enableKeyboardNav,
    goToPrevious,
    goToNext,
    togglePlayPause,
    goToSlide,
    cards.length,
  ]);

  // Handle mouse enter/leave for pause on hover
  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  }, [pauseOnHover]);

  // Don't render if no cards
  if (!cards || cards.length === 0) {
    return null;
  }

  // Single card - no carousel needed
  if (cards.length === 1) {
    return <div className={cn("relative", className)}>{cards[0]}</div>;
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50",
        className,
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={enableKeyboardNav ? 0 : -1}
      role="region"
      aria-label="Announcement carousel"
      aria-live="polite"
    >
      {/* Main carousel container */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="w-full"
          >
            {cards[currentIndex]}
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        {showArrows && cards.length > 1 && (
          <>
            {/* Previous button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-black/20 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/40 focus:opacity-100 group-hover:opacity-100"
              onClick={goToPrevious}
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </Button>

            {/* Next button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-black/20 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/40 focus:opacity-100 group-hover:opacity-100"
              onClick={goToNext}
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </Button>
          </>
        )}

        {/* Play/Pause button */}
        {showPlayPause && cards.length > 1 && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-20 bg-black/20 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/40 focus:opacity-100 group-hover:opacity-100"
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </Button>
        )}
      </div>

      {/* Navigation dots */}
      {showDots && cards.length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              className={cn(
                "size-3 rounded-full border-2 border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black/20",
                index === currentIndex
                  ? "bg-white shadow-lg"
                  : "bg-white/30 hover:bg-white/60",
              )}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </div>
      )}

      {/* Progress indicator */}
      {isPlaying && !isPaused && cards.length > 1 && (
        <div className="absolute bottom-0 left-0 h-1 w-full bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: autoRotateInterval / 1000,
              ease: "linear",
              repeat: Infinity,
            }}
            key={currentIndex}
          />
        </div>
      )}
    </div>
  );
}
