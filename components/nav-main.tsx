"use client";

import { IconType } from "react-icons/lib";

import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const currentPath = pathname.split("/").pop();
  const isActive = (url: string) => currentPath === url.split("/").pop();
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem className="rounded-md" key={item.title}>
            <SidebarMenuButton
              data-active={isActive(item.url) ?? item.isActive}
              tooltip={item.title}
            >
              {item.icon && <item.icon className="text-white" size={20} />}
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
