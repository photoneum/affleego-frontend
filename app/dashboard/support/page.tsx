"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Headphones,
  HelpCircle,
  Mail,
  MessageCircle,
  Phone,
  Search,
  Users,
} from "lucide-react";

import DashboardPageHeader from "@/components/dashboard-page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SupportPage() {
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
      boxShadow: "0 12px 40px 0 rgba(16, 185, 129, 0.2)",
    },
    whileTap: { scale: 0.98 },
  };

  const iconMotion = {
    initial: { scale: 0, rotate: -180 },
    animate: { scale: 1, rotate: 0 },
    whileHover: { rotate: 15, scale: 1.1 },
  };

  // Memphis design background elements with support theme
  const MemphisBackground = () => (
    <div className="absolute inset-0 overflow-hidden rounded-xl">
      {/* Geometric shapes with support theme colors */}
      <motion.div
        className="absolute -right-4 -top-4 size-16 rotate-45 bg-gradient-to-br from-emerald-400 to-green-600 opacity-20 sm:size-20 md:size-24"
        animate={{ rotate: [45, 65, 45] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-6 left-6 size-12 rotate-12 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 opacity-25 sm:size-14 md:size-16"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-8 top-1/2 size-8 bg-gradient-to-l from-blue-400 to-teal-500 opacity-20 sm:size-10 md:size-12"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute bottom-1/4 right-1/4 h-6 w-16 rotate-[30deg] rounded-full bg-gradient-to-r from-green-400 to-teal-500 opacity-15 sm:h-8 sm:w-20 md:h-10 md:w-24" />

      {/* Support-themed decorative elements */}
      <motion.div
        className="absolute left-8 top-1/4 size-6 rounded-full bg-gradient-to-r from-yellow-400 to-green-500 opacity-30 sm:size-8 md:size-10"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Decorative lines */}
      <div className="absolute left-4 top-1/3 h-px w-12 rotate-45 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 sm:w-16 md:w-20" />
      <div className="absolute bottom-1/3 right-6 h-px w-8 -rotate-12 bg-gradient-to-r from-transparent via-teal-300 to-transparent opacity-25 sm:w-12 md:w-16" />
    </div>
  );

  const features = [
    {
      icon: HelpCircle,
      title: "Knowledge Base",
      description:
        "Comprehensive guides, tutorials, and FAQs to help you succeed",
    },
    {
      icon: MessageCircle,
      title: "Live Chat Support",
      description: "Real-time assistance from our dedicated support team",
    },
    {
      icon: Users,
      title: "Account Management",
      description: "Direct access to your personal account manager and support",
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
          title="Support & Help Center"
          description="Get the assistance you need to succeed"
        />
      </motion.div>

      {/* Main Coming Soon Card */}
      <motion.div
        className="flex flex-1 items-center justify-center py-8 md:py-12"
        variants={cardMotion}
      >
        <Card className="relative w-full max-w-2xl overflow-hidden border-0 bg-gradient-to-br from-green-400 via-teal-500 to-blue-600 text-white shadow-2xl">
          <MemphisBackground />
          <CardContent className="relative z-10 flex flex-col items-center px-6 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16">
            <motion.div
              variants={iconMotion}
              className="mb-4 rounded-full bg-white/10 p-4 backdrop-blur-sm sm:mb-6 sm:p-6"
            >
              <Headphones size={48} className="sm:size-16" />
            </motion.div>

            <motion.h1
              className="mb-3 text-center text-2xl font-extrabold drop-shadow-lg sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl"
              variants={cardMotion}
            >
              Support Center Coming Soon!
            </motion.h1>

            <motion.p
              className="mb-6 max-w-md text-center text-sm font-medium opacity-90 sm:mb-8 sm:text-base md:text-lg lg:text-xl"
              variants={cardMotion}
            >
              Get help, connect with managers, and access comprehensive
              resources for your affiliate journey and success.
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
                <Mail className="mr-2 size-4" />
                Contact Support
              </Button>

              <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm sm:px-6 sm:text-base">
                <HelpCircle className="mr-1 inline size-4" />
                We&apos;re here for you!
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
                  className="mb-3 inline-flex rounded-lg bg-gradient-to-br from-green-400/20 to-teal-500/20 p-2 sm:mb-4 sm:p-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <feature.icon className="size-5 text-emerald-400 sm:size-6" />
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

      {/* Support Channels Preview */}
      <motion.div
        className="rounded-xl border border-gray-800 bg-gray-900/30 p-6 backdrop-blur-sm sm:p-8"
        variants={cardMotion}
      >
        <motion.h2
          className="mb-4 text-center text-lg font-bold text-white sm:text-xl md:text-2xl"
          variants={cardMotion}
        >
          How We&apos;ll Support You
        </motion.h2>
        <motion.div
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerMotion}
        >
          {[
            { icon: Phone, label: "Phone Support", color: "text-green-400" },
            { icon: MessageCircle, label: "Live Chat", color: "text-teal-400" },
            { icon: Mail, label: "Email Help", color: "text-blue-400" },
            {
              icon: BookOpen,
              label: "Resource Library",
              color: "text-emerald-400",
            },
          ].map((channel) => (
            <motion.div
              key={channel.label}
              className="flex items-center gap-2 rounded-lg bg-gray-800/50 p-3 text-sm font-medium text-gray-300 sm:text-base"
              variants={cardMotion}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(55, 65, 81, 0.8)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <channel.icon className={`size-4 ${channel.color} sm:size-5`} />
              <span>{channel.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Quick Access Preview */}
      <motion.div
        className="grid gap-4 sm:grid-cols-2"
        variants={containerMotion}
      >
        <motion.div
          variants={cardMotion}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Card className="border-gray-800 bg-gradient-to-r from-green-900/50 to-teal-900/50 backdrop-blur-sm transition-all duration-300 hover:border-green-700">
            <CardContent className="p-4 sm:p-6">
              <div className="mb-3 flex items-center gap-3">
                <Search className="size-5 text-green-400 sm:size-6" />
                <h3 className="text-sm font-semibold text-white sm:text-base md:text-lg">
                  Quick Search
                </h3>
              </div>
              <p className="text-xs text-gray-400 sm:text-sm">
                Instantly find answers to common questions and issues
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={cardMotion}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Card className="border-gray-800 bg-gradient-to-r from-teal-900/50 to-blue-900/50 backdrop-blur-sm transition-all duration-300 hover:border-teal-700">
            <CardContent className="p-4 sm:p-6">
              <div className="mb-3 flex items-center gap-3">
                <Users className="size-5 text-teal-400 sm:size-6" />
                <h3 className="text-sm font-semibold text-white sm:text-base md:text-lg">
                  Account Manager
                </h3>
              </div>
              <p className="text-xs text-gray-400 sm:text-sm">
                Connect directly with your dedicated account manager
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
