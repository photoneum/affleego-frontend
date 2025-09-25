import Analytics from "@/components/analytics";
import DashboardPageHeader from "@/components/dashboard-page-header";
import { AnnouncementCarouselExample } from "@/components/dashboard/announcement-carousel-example";
import ComissionSection from "@/components/rewards-sections";

import DealsWrapper from "./deals/deals-wrapper";

export default function Page() {
  return (
    <div className="container mx-auto flex flex-1 flex-col space-y-8 p-4 pt-0 text-white md:px-10 md:py-4">
      <DashboardPageHeader type="welcome" />
      <Analytics />
      <DealsWrapper showViewAll={true} />
      <AnnouncementCarouselExample />
      <ComissionSection />
    </div>
  );
}
