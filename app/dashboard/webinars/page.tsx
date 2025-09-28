"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Play, Star, Users, Video } from "lucide-react";

import DashboardPageHeader from "@/components/dashboard-page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function WebinarsPage() {
  // Animation variants for smooth entrance
  const containerMotion = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardMotion = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    whileHover: {
      scale: 1.02,
      boxShadow: "0 12px 40px 0 rgba(255, 255, 255, 0.15)",
    },
    whileTap: { scale: 0.98 },
  };

  const iconMotion = {
    initial: { scale: 0, rotate: -180 },
    animate: { scale: 1, rotate: 0 },
    whileHover: { rotate: 15, scale: 1.1 },
  };

  // Memphis design background elements
  const MemphisBackground = () => (
    <div className="absolute inset-0 overflow-hidden rounded-xl">
      {/* Geometric shapes */}
      <motion.div
        className="absolute -right-4 -top-4 size-16 rotate-45 bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-20 sm:size-20 md:size-24"
        animate={{ rotate: [45, 65, 45] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-6 left-6 size-12 rotate-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-25 sm:size-14 md:size-16"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-8 top-1/2 size-8 bg-gradient-to-l from-blue-400 to-cyan-400 opacity-20 sm:size-10 md:size-12"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute bottom-1/4 right-1/4 h-6 w-16 rotate-[30deg] rounded-full bg-gradient-to-r from-green-400 to-emerald-400 opacity-15 sm:h-8 sm:w-20 md:h-10 md:w-24" />

      {/* Decorative lines */}
      <div className="absolute left-4 top-1/3 h-px w-12 rotate-45 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 sm:w-16 md:w-20" />
      <div className="absolute bottom-1/3 right-6 h-px w-8 -rotate-12 bg-gradient-to-r from-transparent via-orange-300 to-transparent opacity-25 sm:w-12 md:w-16" />
    </div>
  );

  const features = [
    {
      icon: Video,
      title: "Live Expert Sessions",
      description:
        "Interactive sessions with top affiliates and industry experts",
    },
    {
      icon: Users,
      title: "Community Networking",
      description: "Connect with like-minded affiliates and build your network",
    },
    {
      icon: Star,
      title: "Exclusive Insights",
      description:
        "Get access to strategies and tips not available anywhere else",
    },
  ];

  return (
    <motion.div
      className="container mx-auto flex flex-1 flex-col space-y-6 p-4 pt-0 text-white md:space-y-8 md:px-10 md:py-4"
      variants={containerMotion}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={cardMotion}>
        <DashboardPageHeader
          type="page-header"
          title="Webinars & Live Events"
          description="Join our upcoming educational sessions"
        />
      </motion.div>

      {/* Main Coming Soon Card */}
      <motion.div
        className="flex flex-1 items-center justify-center py-8 md:py-12"
        variants={cardMotion}
      >
        <Card className="relative w-full max-w-2xl overflow-hidden border-0 bg-gradient-to-br from-orange-400 via-pink-500 to-red-500 text-white shadow-2xl">
          <MemphisBackground />
          <CardContent className="relative z-10 flex flex-col items-center px-6 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16">
            <motion.div
              variants={iconMotion}
              className="mb-4 rounded-full bg-white/10 p-4 backdrop-blur-sm sm:mb-6 sm:p-6"
            >
              <Play size={48} className="sm:size-16" />
            </motion.div>

            <motion.h1
              className="mb-3 text-center text-2xl font-extrabold drop-shadow-lg sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl"
              variants={cardMotion}
            >
              Webinars Coming Soon!
            </motion.h1>

            <motion.p
              className="mb-6 max-w-md text-center text-sm font-medium opacity-90 sm:mb-8 sm:text-base md:text-lg lg:text-xl"
              variants={cardMotion}
            >
              Get ready for live events, expert sessions, and exclusive
              affiliate insights that will take your business to the next level.
            </motion.p>

            <motion.div
              className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
              variants={cardMotion}
            >
              <Button
                variant="secondary"
                size="lg"
                className="bg-white/20 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30 sm:px-8"
              >
                <Calendar className="mr-2 size-4" />
                Notify Me
              </Button>

              <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm sm:px-6 sm:text-base">
                <Clock className="mr-1 inline size-4" />
                Stay tuned for launch!
              </span>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Features Preview */}
      <motion.div
        className="grid gap-4 sm:gap-6 md:grid-cols-3"
        variants={containerMotion}
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={cardMotion}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/70">
              <CardContent className="p-4 sm:p-6">
                <motion.div
                  className="mb-3 inline-flex rounded-lg bg-gradient-to-br from-orange-400/20 to-pink-500/20 p-2 sm:mb-4 sm:p-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <feature.icon className="size-5 text-orange-400 sm:size-6" />
                </motion.div>
                <h3 className="mb-2 text-sm font-semibold text-white sm:text-base md:text-lg">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-400 sm:text-sm md:text-base">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
