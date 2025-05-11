"use client";

import React from "react";

import useUser from "@/hooks/use-user";

function WelcomeHeader() {
  const user = useUser();
  return (
    <p className="text-2xl font-normal md:text-3xl">
      Welcome back, {user?.first_name}
    </p>
  );
}

type PageHeaderProps = {
  title?: string;
  description?: string;
};
function PageHeader({ title, description }: PageHeaderProps) {
  if (!title && !description) {
    return null;
  }
  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl font-semibold md:text-3xl">{title}</p>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

type Props = {
  type: "welcome" | "page-header";
  title?: string;
  description?: string;
};

function DashboardPageHeader({ type, title, description }: Props) {
  return (
    <div className="flex flex-col gap-2">
      {type === "welcome" && <WelcomeHeader />}
      {type === "page-header" && (
        <PageHeader title={title} description={description} />
      )}
    </div>
  );
}

export default DashboardPageHeader;
