import { auth } from "@/auth";
import { Separator } from "@radix-ui/react-separator";
import { Bell } from "lucide-react";

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

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ segment?: string }>;
}) {
  const { segment } = await params;
  const session = await auth();
  const user = session?.user;
  const PageNamesMap: Record<string, string> = {
    dashboard: "Dashboard",
    settings: "Settings",
    profile: "Profile",
    account: "Account",
  };

  const currentSegment = segment || "dashboard";
  const pageName =
    PageNamesMap[currentSegment as keyof typeof PageNamesMap] ||
    "Page Not Found";

  return (
    <SidebarProvider>
      <AppSidebar />
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
                  <BreadcrumbLink href="#">{pageName}</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-4 rounded-full p-4">
            <SidebarTriggerMobile className="size-8 hover:bg-yellow-400 md:hidden [&_svg]:size-full [&_svg]:text-white [&_svg]:hover:text-black" />
            <div className="relative text-white transition-colors duration-200">
              <Bell className="size-6" />
              <span className="absolute -right-1 -top-1 flex size-2 items-center justify-center rounded-full bg-primary text-[10px] text-white" />
            </div>

            <Avatar>
              <AvatarImage src={user?.image_url} alt="User Avatar" />
              <AvatarFallback>
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
DashboardLayout.displayName = "DashboardLayout";
