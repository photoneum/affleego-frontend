import Analytics from "@/components/analytics";
import DashboardWelcomeHeader from "@/components/dashboard-welcome-header";
import DealsSection from "@/components/deals-sections";

export default function Page() {
  return (
    <div className="container mx-auto flex flex-1 flex-col gap-4 p-4 pt-0 text-white md:px-10 md:py-4">
      <DashboardWelcomeHeader />
      <Analytics />
      <DealsSection />
    </div>
  );
}
