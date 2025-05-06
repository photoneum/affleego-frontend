import React from "react";

import { Eye, Star } from "lucide-react";

import InfoCard from "./info-card";
import InfoCardGrid from "./info-card-grid";

function Analytics() {
  return (
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
      </InfoCardGrid>
    </section>
  );
}

export default Analytics;
