"use client";

import { useSession } from "next-auth/react";

function useUser() {
  const session = useSession();

  return session.data?.user;
}

export default useUser;
