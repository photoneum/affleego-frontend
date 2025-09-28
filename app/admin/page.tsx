"use client";

import { AlertCircle, Shield } from "lucide-react";

import { AdminActivityFeed } from "@/components/admin/admin-activity-feed";
import { AdminOverviewCards } from "@/components/admin/admin-overview-cards";
import { AdminQuickActions } from "@/components/admin/admin-quick-actions";
import DashboardPageHeader from "@/components/dashboard-page-header";
import InfoCardSkeleton from "@/components/info-card-skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { useAdminOverview } from "@/hooks/queries/use-admin-overview";

export default function AdminHomePage() {
  const { data, isLoading, error } = useAdminOverview();

  if (error) {
    return (
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <DashboardPageHeader
          type="page-header"
          title="Admin Dashboard"
          description="Manage your affiliate network and monitor system performance."
          titleClassName="text-yellow-400"
        />
        <Alert variant="destructive">
          <AlertCircle className="size-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Failed to load admin dashboard data. Please try refreshing the page.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <DashboardPageHeader
          type="page-header"
          title="Admin Dashboard"
          description="Manage your affiliate network and monitor system performance."
          titleClassName="text-yellow-400"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <InfoCardSkeleton key={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2 lg:gap-8">
          <InfoCardSkeleton />
          <InfoCardSkeleton />
        </div>
        <InfoCardSkeleton />
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex items-center gap-2">
        <Shield className="size-6 text-red-500" />
        <DashboardPageHeader
          type="page-header"
          title="Admin Dashboard"
          description="Manage your affiliate network and monitor system performance."
          titleClassName="text-yellow-400"
        />
      </div>

      {/* System Overview Cards */}
      <AdminOverviewCards
        totalUsers={data!.systemStats.totalUsers}
        totalDeals={data!.systemStats.totalDeals}
        totalPromotions={data!.systemStats.totalPromotions}
        activeDeals={data!.systemStats.activeDeals}
      />

      {/* Quick Metrics and Actions */}
      <AdminQuickActions
        todaySignups={data!.quickMetrics.todaySignups}
        activePromotions={data!.quickMetrics.activePromotions}
        pendingDeals={data!.quickMetrics.pendingDeals}
        systemHealth={data!.quickMetrics.systemHealth}
      />

      {/* Recent Activity Feed */}
      <AdminActivityFeed activities={data!.recentActivity} />
    </div>
  );
}
