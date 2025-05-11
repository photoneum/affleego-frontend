import React from "react";

import { Eye, Star } from "lucide-react";

import getDailyNumber from "@/lib/utils/dailyNumber";

import InfoCard from "./info-card";
import InfoCardGrid from "./info-card-grid";

function Analytics() {
  const dailyNumber = getDailyNumber();
  const clubMembersCount = dailyNumber - 0.75;
  const usersCount = dailyNumber;
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-semibold">Membership Stats</h2>
      <InfoCardGrid>
        <InfoCard
          title="Number of users"
          value="20.8K"
          change={{ value: usersCount, isPositive: usersCount > 0 }}
          icon={<Eye size={18} />}
        />
        <InfoCard
          title="Club members"
          value="3.5K"
          change={{
            value: clubMembersCount,
            isPositive: clubMembersCount > 0,
          }}
          icon={<Star size={18} />}
        />
      </InfoCardGrid>
    </section>
  );
}

export default Analytics;
