"use client";

import * as React from "react";
import { TbTargetArrow } from "react-icons/tb";

import {
  BookOpenCheck,
  Camera,
  Flame,
  LayoutDashboard,
  Mails,
  MessageSquare,
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
