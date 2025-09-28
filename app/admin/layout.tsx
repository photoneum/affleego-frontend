import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { Separator } from "@radix-ui/react-separator";
import { Bell, Shield } from "lucide-react";

import { AppSidebar } from "@/components/app-sidebar";
import { NavHeader } from "@/components/nav-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import Logo from "@/components/ui/logo";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  SidebarTriggerMobile,
} from "@/components/ui/sidebar";

import { getInitials } from "@/lib/utils/avatar";

export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ segment?: string }>;
}) {
  const { segment } = await params;
  const session = await auth();

  // Admin type validation
  if (!session?.user) {
    redirect("/auth/login");
  }

  if (session.user.type !== "admin") {
    redirect("/dashboard");
  }

  const { user } = session;
  const PageNamesMap: Record<string, string> = {
    admin: "Admin Dashboard",
    deals: "Deals Management",
    promotions: "Promotions Management",
    users: "User Management",
    analytics: "Analytics",
  };

  const currentSegment = segment || "admin";
  const pageName =
    PageNamesMap[currentSegment as keyof typeof PageNamesMap] ||
    "Admin Dashboard";

  return (
    <SidebarProvider>
      <AppSidebar isAdmin={true} />
      <SidebarInset>
        <header className="flex h-24 shrink-0 items-center justify-between gap-2 bg-[#11111A] px-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-24 md:px-1">
          <div className="flex items-center gap-2 px-4">
            <div className="flex items-center space-x-5">
              <Logo className="block md:hidden" variant="lg" />
              <SidebarTrigger className="-ml-1 hidden bg-white md:flex" />
            </div>
            <Separator className="mr-2 h-4" orientation="vertical" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#" className="flex items-center gap-2">
                    <Shield className="size-4 text-red-500" />
                    {pageName}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-4 rounded-full p-4">
            <SidebarTriggerMobile className="size-8 hover:bg-yellow-400 md:hidden [&_svg]:size-full [&_svg]:text-white [&_svg]:hover:text-black" />
            <div className="relative text-white transition-colors duration-200">
              <Bell className="size-6" />
              <span className="absolute -right-1 -top-1 flex size-2 items-center justify-center rounded-full bg-red-500 text-[10px] text-white" />
            </div>

            <Avatar>
              <AvatarImage src={user?.image_url} alt="Admin Avatar" />
              <AvatarFallback className="bg-red-500 text-white">
                {getInitials(user?.first_name, user?.last_name)}
              </AvatarFallback>
            </Avatar>
            <NavHeader />
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
AdminLayout.displayName = "AdminLayout";
