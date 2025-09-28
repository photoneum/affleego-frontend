import { useQuery } from "@tanstack/react-query";

interface AdminOverviewData {
  systemStats: {
    totalUsers: number;
    totalDeals: number;
    totalPromotions: number;
    activeDeals: number;
  };
  recentActivity: {
    id: string;
    type:
      | "user_registration"
      | "deal_created"
      | "promotion_updated"
      | "user_action";
    message: string;
    timestamp: string;
    user?: string;
  }[];
  quickMetrics: {
    todaySignups: number;
    activePromotions: number;
    pendingDeals: number;
    systemHealth: "healthy" | "warning" | "critical";
  };
}

// Placeholder data since APIs are not ready yet
const mockAdminOverviewData: AdminOverviewData = {
  systemStats: {
    totalUsers: 2847,
    totalDeals: 156,
    totalPromotions: 23,
    activeDeals: 89,
  },
  recentActivity: [
    {
      id: "1",
      type: "user_registration",
      message: "New user registered: john.doe@example.com",
      timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(), // 5 minutes ago
      user: "john.doe@example.com",
    },
    {
      id: "2",
      type: "deal_created",
      message: "New deal created: Super Casino Bonus",
      timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(), // 15 minutes ago
      user: "admin@affleego.com",
    },
    {
      id: "3",
      type: "promotion_updated",
      message: "Promotion updated: Welcome Bonus Campaign",
      timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 minutes ago
      user: "admin@affleego.com",
    },
    {
      id: "4",
      type: "user_action",
      message: "User clicked deal: Luxury Resort Package",
      timestamp: new Date(Date.now() - 45 * 60 * 1000).toISOString(), // 45 minutes ago
      user: "jane.smith@example.com",
    },
    {
      id: "5",
      type: "deal_created",
      message: "New deal created: Crypto Trading Platform",
      timestamp: new Date(Date.now() - 60 * 60 * 1000).toISOString(), // 1 hour ago
      user: "admin@affleego.com",
    },
  ],
  quickMetrics: {
    todaySignups: 12,
    activePromotions: 8,
    pendingDeals: 5,
    systemHealth: "healthy",
  },
};

async function fetchAdminOverview(): Promise<AdminOverviewData> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // In the future, this will be:
  // const response = await http.get('/api/v1/admin/dashboard/overview');
  // return response.data;

  return mockAdminOverviewData;
}

export function useAdminOverview() {
  return useQuery({
    queryKey: ["admin", "overview"],
    queryFn: fetchAdminOverview,
    staleTime: 30 * 1000, // 30 seconds
    refetchInterval: 60 * 1000, // Refetch every minute
  });
}
