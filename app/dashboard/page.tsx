import { Eye, Star, TrendingUp, Users } from "lucide-react";

import InfoCard from "@/components/info-card";
import InfoCardGrid from "@/components/info-card-grid";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0 text-white">
      <div className="w-full">
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Key Metrics</h2>
          <InfoCardGrid>
            <InfoCard
              title="Revenue Share Earnings"
              value="50.8K"
              change={{ value: 28.4, isPositive: true }}
              icon={<Eye size={18} />}
            />
            <InfoCard
              title="Subscription Plan"
              value="2.3K"
              change={{ value: 11.3, isPositive: true }}
              icon={<Star size={18} />}
            />
            <InfoCard
              title="Active Users"
              value="18.4K"
              change={{ value: 5.2, isPositive: true }}
              icon={<Users size={18} />}
            />
            <InfoCard
              title="Monthly Growth"
              value="32.7%"
              change={{ value: 2.1, isPositive: false }}
              icon={<TrendingUp size={18} />}
            />
          </InfoCardGrid>
        </section>
      </div>
    </div>
  );
}
