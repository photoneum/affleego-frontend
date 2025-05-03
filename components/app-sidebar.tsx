"use client";

import * as React from "react";
import { TbTargetArrow } from "react-icons/tb";

import {
  AudioWaveform,
  BookOpenCheck,
  Command,
  Flame,
  GalleryVerticalEnd,
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

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Marketplace",
      url: "#",
      icon: Store,
    },
    {
      title: "Deals & Tracking",
      url: "#",
      icon: TbTargetArrow,
    },
    {
      title: "Forums",
      url: "#",
      icon: MessageSquare,
    },
    {
      title: "Learning hub",
      url: "#",
      icon: BookOpenCheck,
    },
    {
      title: "Hot deals",
      url: "#",
      icon: Flame,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <UserAvatar />
      </SidebarHeader>
      <SidebarContent className="bg-[#11111A] py-3">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
