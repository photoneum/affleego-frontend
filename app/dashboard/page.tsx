import Analytics from "@/components/analytics";
import DashboardPageHeader from "@/components/dashboard-page-header";
import DealsSection from "@/components/deals-sections";
import { DealsCardProps } from "@/components/organisms/deals-card";
import ComissionSection from "@/components/rewards-sections";

const dealsData: DealsCardProps[] = [
  {
    id: 1,
    title: "TradePro FX",
    requirements: "FTD Requirements: Min. $250 deposit + 5 trades",
    paymentMethods: ["Wire", "USDT", "Trading", "Hybrid"],
    projectedPayout: "$5,400",
    conversionRate: "8.5%",
    cpaRate: "Up to $1,200",
    lastUpdated: "2 hours ago",
  },
  {
    id: 2,
    title: "CryptoTrader Pro",
    requirements: "FTD Requirements: Min. $250 deposit + 5 trades",
    paymentMethods: ["Wire", "USDT", "Trading", "Hybrid"],
    projectedPayout: "$5,400",
    conversionRate: "8.5%",
    cpaRate: "Up to $1,200",
    lastUpdated: "2 hours ago",
  },
];

export default function Page() {
  return (
    <div className="container mx-auto flex flex-1 flex-col space-y-8 p-4 pt-0 text-white md:px-10 md:py-4">
      <DashboardPageHeader type="welcome" />
      <Analytics />
      <DealsSection deals={dealsData} />
      <ComissionSection />
    </div>
  );
}
