"use client";

import * as React from "react";

import Logo from "./ui/logo";

export function UserAvatar() {
  return (
    <div className="my-4 flex aspect-square h-12 w-full items-center gap-2 overflow-hidden p-2">
      <Logo variant="xl" />
    </div>
  );
}
