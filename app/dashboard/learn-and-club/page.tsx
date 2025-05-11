import React from "react";

import { CheckCircleIcon } from "lucide-react";

import DashboardPageHeader from "@/components/dashboard-page-header";
import CourseCard from "@/components/organisms/CourseCard";

function LearningHubPage() {
  const course = {
    title: "Learn & Club",
    image:
      "https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Learn",
    originalPrice: 59.0,
    currentPrice: 20.0,
    instructor: {
      name: "DChessking",
      avatar:
        "https://framerusercontent.com/images/G8XWO7gOxhJHaKYnUAFtQZeH1jM.jpeg?scale-down-to=1024",
    },
  };

  return (
    <div className="container mx-auto flex flex-1 flex-col space-y-6 p-4 pt-0 text-white md:space-y-8 md:px-10 md:py-4">
      <DashboardPageHeader
        type="page-header"
        title="Explore Our World's Best Courses"
        description="Master Affiliate Marketing with Affleego"
      />
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between md:space-x-5 lg:gap-10">
        <div className="flex w-full flex-col items-start justify-center space-y-2 text-white md:w-1/2 lg:w-2/5">
          <h3 className="text-2xl font-bold sm:text-3xl">Learn & Club</h3>
          <span className="text-sm text-gray-400 sm:text-base">
            Powered by Bluwigo x Affleego
          </span>
          <p className="text-sm sm:text-base">
            Step into our private vault - built for performance marketers who
            want to learn fast and earn faster.
          </p>
          <div className="w-full">
            <span className="text-sm sm:text-base">
              Inside, you&apos;ll get:
            </span>
            <ul className="mt-2 list-disc pl-5">
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="mt-0.5 size-4 shrink-0" />
                <span>
                  Access to hidden CPA & RVS deals (up to $2,000 per lead)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="mt-0.5 size-4 shrink-0" />
                <span>Plug-and-earn AI funnels used by top affliates</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="mt-0.5 size-4 shrink-0" />
                <span>Weekly strategy sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="mt-0.5 size-4 shrink-0" />
                <span>Updates directly from Bluwigo pros</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="mt-0.5 size-4 shrink-0" />
                <span>
                  Club member-only discounts on physical events & masterminds
                </span>
              </li>
            </ul>
          </div>
          <p className="flex flex-col gap-1 text-sm sm:text-base">
            <span>
              One-time access: <b>$20 only</b>
            </span>
            <span>No subscriptions. No recurring fees. Just results.</span>
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5">
          <CourseCard {...course} />
        </div>
      </div>
    </div>
  );
}

export default LearningHubPage;
