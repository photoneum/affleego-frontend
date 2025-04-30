"use client";

import { IconType } from "react-icons/lib";

import { type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon | IconType;
    isActive?: boolean;
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem className="rounded-md" key={item.title}>
            <SidebarMenuButton data-active={item.isActive} tooltip={item.title}>
              {item.icon && <item.icon className="text-white" />}
              <a className="text-[1rem] text-white" href={item.url}>
                {item.title}
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
