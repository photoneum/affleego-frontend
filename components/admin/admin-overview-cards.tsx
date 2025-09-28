import { Megaphone, Package, TrendingUp, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SystemStatsProps {
  totalUsers: number;
  totalDeals: number;
  totalPromotions: number;
  activeDeals: number;
}

const statsConfig = [
  {
    key: "totalUsers" as const,
    title: "Total Users",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    key: "totalDeals" as const,
    title: "Total Deals",
    icon: Package,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    key: "activeDeals" as const,
    title: "Active Deals",
    icon: TrendingUp,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    key: "totalPromotions" as const,
    title: "Total Promotions",
    icon: Megaphone,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

export function AdminOverviewCards({
  totalUsers,
  totalDeals,
  totalPromotions,
  activeDeals,
}: SystemStatsProps) {
  const stats = { totalUsers, totalDeals, totalPromotions, activeDeals };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-8">
      {statsConfig.map(({ key, title, icon: Icon, color, bgColor }) => (
        <Card key={key} className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {title}
            </CardTitle>
            <div className={`rounded-lg p-2 ${bgColor}`}>
              <Icon className={`size-4 ${color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats[key].toLocaleString()}
            </div>
            <Badge
              variant={key === "activeDeals" ? "success" : "secondary"}
              className="mt-2"
            >
              {key === "activeDeals" ? "Live Now" : "All Time"}
            </Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
