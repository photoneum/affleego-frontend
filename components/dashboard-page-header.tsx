"use client";

import React from "react";

import useUser from "@/hooks/use-user";

import { cn } from "@/lib/utils";

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
  titleClassName?: string;
  descriptionClassName?: string;
};
function PageHeader({
  title,
  description,
  titleClassName,
  descriptionClassName,
}: PageHeaderProps) {
  if (!title && !description) {
    return null;
  }
  return (
    <div className="flex flex-col gap-2">
      <p className={cn("text-2xl font-semibold md:text-3xl", titleClassName)}>
        {title}
      </p>
      <p className={cn("text-gray-400", descriptionClassName)}>{description}</p>
    </div>
  );
}

type Props = {
  type: "welcome" | "page-header";
  title?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

function DashboardPageHeader({
  type,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: Props) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {type === "welcome" && <WelcomeHeader />}
      {type === "page-header" && (
        <PageHeader
          title={title}
          description={description}
          titleClassName={titleClassName}
          descriptionClassName={descriptionClassName}
        />
      )}
    </div>
  );
}

export default DashboardPageHeader;
