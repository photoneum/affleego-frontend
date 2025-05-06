"use client";

import React from "react";

import useUser from "@/hooks/use-user";

function DashboardWelcomeHeader() {
  const user = useUser();
  return (
    <p className="text-2xl font-normal md:text-3xl">
      Welcome back, {user?.first_name}
    </p>
  );
}

export default DashboardWelcomeHeader;
