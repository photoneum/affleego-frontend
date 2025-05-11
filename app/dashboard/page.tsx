import Analytics from "@/components/analytics";
import ComissionSection from "@/components/commissions-sections";
import DashboardPageHeader from "@/components/dashboard-page-header";
import DealsSection from "@/components/deals-sections";

export default function Page() {
  return (
    <div className="container mx-auto flex flex-1 flex-col space-y-8 p-4 pt-0 text-white md:px-10 md:py-4">
      <DashboardPageHeader type="welcome" />
      <Analytics />
      <DealsSection />
      <ComissionSection />
    </div>
  );
}
