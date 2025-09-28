"use client";

import * as React from "react";
import { TbTargetArrow } from "react-icons/tb";

import {
  BarChart3,
  BookOpenCheck,
  Camera,
  Flame,
  LayoutDashboard,
  Mails,
  Megaphone,
  MessageSquare,
  Shield,
  Users,
} from "lucide-react";

import { BusinessLogoHeader } from "@/components/business-logo-header";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// User navigation items for the sidebar.
const userNavigationItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    isActive: true,
  },
  {
    title: "Hot Deals",
    url: "/dashboard/deals",
    icon: Flame,
  },
  {
    title: "Forums",
    url: "https://t.me/+NM9XBU8h7qFmYmI0",
    icon: MessageSquare,
  },
  {
    title: "Academy",
    url: "/dashboard/academy",
    icon: BookOpenCheck,
  },
  {
    title: "Webinars",
    url: "/dashboard/webinars",
    icon: Camera,
  },
  {
    title: "News",
    url: "/dashboard/news",
    icon: Mails,
  },
  {
    title: "Support",
    url: "/dashboard/support",
    icon: TbTargetArrow,
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: LayoutDashboard,
  },
];

// Admin navigation items for the sidebar.
const adminNavigationItems = [
  {
    title: "Admin Dashboard",
    url: "/admin",
    icon: Shield,
    isActive: true,
  },
  {
    title: "Deals Management",
    url: "/admin/deals",
    icon: Flame,
  },
  {
    title: "Promotions",
    url: "/admin/promotions",
    icon: Megaphone,
  },
  {
    title: "User Management",
    url: "/admin/users",
    icon: Users,
  },
  {
    title: "Analytics",
    url: "/admin/analytics",
    icon: BarChart3,
  },
  // Separator for user dashboard access
  {
    title: "User Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: LayoutDashboard,
  },
];

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  isAdmin?: boolean;
}

export function AppSidebar({ isAdmin = false, ...props }: AppSidebarProps) {
  const navigationItems = isAdmin ? adminNavigationItems : userNavigationItems;

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <BusinessLogoHeader />
      </SidebarHeader>
      <SidebarContent className="bg-[#11111A] py-3">
        <NavMain items={navigationItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
