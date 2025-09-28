import { Megaphone, MousePointer, Package, UserPlus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ActivityItem {
  id: string;
  type:
    | "user_registration"
    | "deal_created"
    | "promotion_updated"
    | "user_action";
  message: string;
  timestamp: string;
  user?: string;
}

interface AdminActivityFeedProps {
  activities: ActivityItem[];
}

const activityIcons = {
  user_registration: UserPlus,
  deal_created: Package,
  promotion_updated: Megaphone,
  user_action: MousePointer,
};

const activityColors = {
  user_registration: "text-green-600",
  deal_created: "text-blue-600",
  promotion_updated: "text-purple-600",
  user_action: "text-orange-600",
};

const activityBadgeColors = {
  user_registration: "default" as const,
  deal_created: "secondary" as const,
  promotion_updated: "outline" as const,
  user_action: "destructive" as const,
};

function formatTimeAgo(timestamp: string): string {
  const now = new Date();
  const past = new Date(timestamp);
  const diffInMinutes = Math.floor(
    (now.getTime() - past.getTime()) / (1000 * 60),
  );

  if (diffInMinutes < 1) return "just now";
  if (diffInMinutes < 60) return `${diffInMinutes} min ago`;
  if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hr ago`;
  return `${Math.floor(diffInMinutes / 1440)} day ago`;
}

export function AdminActivityFeed({ activities }: AdminActivityFeedProps) {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Recent Activities
          <Badge variant="secondary">{activities.length}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80 space-y-4 overflow-y-auto">
          {activities.map((activity) => {
            const Icon = activityIcons[activity.type];
            const timeAgo = formatTimeAgo(activity.timestamp);

            return (
              <div
                key={activity.id}
                className="flex items-start gap-3 rounded-lg bg-muted/50 p-3"
              >
                <div
                  className={`rounded-full bg-background p-2 ${activityColors[activity.type]}`}
                >
                  <Icon className="size-3" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {activity.message}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-muted-foreground">{timeAgo}</p>
                    {activity.user && (
                      <Badge
                        variant={activityBadgeColors[activity.type]}
                        className="text-xs"
                      >
                        {activity.user}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
