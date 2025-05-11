"use client";

import * as React from "react";
import { TbTargetArrow } from "react-icons/tb";

import {
  BookOpenCheck,
  Flame,
  LayoutDashboard,
  MessageSquare,
  Store,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { UserAvatar } from "@/components/user-avatar";

// This is navigation items for the sidebar.
const navigationItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    isActive: true,
  },
  {
    title: "Marketplace",
    url: "/dashboard/marketplace",
    icon: Store,
  },
  {
    title: "Deals & Tracking",
    url: "/dashboard/deals",
    icon: TbTargetArrow,
  },
  {
    title: "Forums",
    url: "https://t.me/+NM9XBU8h7qFmYmI0",
    icon: MessageSquare,
  },
  {
    title: "Learn and Club",
    url: "/dashboard/learn-and-club",
    icon: BookOpenCheck,
  },
  {
    title: "Hot deals",
    url: "#",
    icon: Flame,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <UserAvatar />
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
