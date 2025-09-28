import Link from "next/link";

import {
  AlertTriangle,
  BarChart3,
  CheckCircle,
  Plus,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface QuickMetricsProps {
  todaySignups: number;
  activePromotions: number;
  pendingDeals: number;
  systemHealth: "healthy" | "warning" | "critical";
}

const healthConfig = {
  healthy: {
    icon: CheckCircle,
    color: "text-green-600",
    variant: "success" as const,
    text: "Healthy",
  },
  warning: {
    icon: AlertTriangle,
    color: "text-yellow-600",
    variant: "warning" as const,
    text: "Warning",
  },
  critical: {
    icon: AlertTriangle,
    color: "text-red-600",
    variant: "destructive" as const,
    text: "Critical",
  },
};

export function AdminQuickActions({
  todaySignups,
  activePromotions,
  pendingDeals,
  systemHealth,
}: QuickMetricsProps) {
  const healthStatus = healthConfig[systemHealth];
  const HealthIcon = healthStatus.icon;

  return (
    <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2 lg:gap-8">
      {/* Quick Metrics Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Quick Metrics
            <Badge
              variant={healthStatus.variant}
              className="flex items-center gap-1"
            >
              <HealthIcon className="size-3" />
              {healthStatus.text}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Today&apos;s Signups
            </span>
            <Badge variant="info">{todaySignups}</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Active Promotions
            </span>
            <Badge variant="secondary">{activePromotions}</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Pending Deals</span>
            <Badge variant={pendingDeals > 0 ? "outline" : "secondary"}>
              {pendingDeals}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions Card */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-3">
          <Button
            asChild
            className="h-12 bg-violet-400 text-white hover:bg-violet-500"
          >
            <Link href="/admin/deals" className="flex items-center gap-2">
              <Plus className="size-4" />
              New Deal
            </Link>
          </Button>
          <Button
            asChild
            className="h-12 bg-sky-400 text-white hover:bg-sky-500"
          >
            <Link href="/admin/promotions" className="flex items-center gap-2">
              <Plus className="size-4" />
              New Promotion
            </Link>
          </Button>
          <Button
            asChild
            variant="default"
            className="h-12 bg-teal-400 text-white hover:bg-teal-500"
          >
            <Link href="/admin/users" className="flex items-center gap-2">
              <Users className="size-4" />
              Manage Users
            </Link>
          </Button>
          <Button
            asChild
            className="h-12 bg-green-400 text-white hover:bg-green-500"
          >
            <Link href="/admin/analytics" className="flex items-center gap-2">
              <BarChart3 className="size-4" />
              Analytics
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
