import React from "react";

import DashboardPageHeader from "@/components/dashboard-page-header";
import CourseCard from "@/components/organisms/CourseCard";

function LearningHubPage() {
  const courses = [
    {
      title: "Best Practices for CPA & RevShare Deals",
      image:
        "https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Development",
      originalPrice: 29.0,
      currentPrice: 9.0,
      instructor: {
        name: "David Millar",
        avatar:
          "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      rating: 4.8,
      reviews: 32,
      modules: 5,
      duration: "11h 20m",
      lessons: 22,
    },
    {
      title: "Non-Payment Issues in Affiliate Marketing",
      image:
        "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Business",
      originalPrice: 24.99,
      currentPrice: 12.99,
      instructor: {
        name: "Sarah Chen",
        avatar:
          "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      rating: 4.6,
      reviews: 28,
      modules: 4,
      duration: "8h 45m",
      lessons: 18,
    },
  ];
  return (
    <div className="container mx-auto flex flex-1 flex-col space-y-8 p-4 pt-0 text-white md:px-10 md:py-4">
      <DashboardPageHeader
        type="page-header"
        title="Explore Our World's Best Courses"
        description="Master Affiliate Marketing with Affleego"
      />
      <div className="grid grid-cols-1 justify-between md:grid-cols-2 md:gap-10">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
}

export default LearningHubPage;
