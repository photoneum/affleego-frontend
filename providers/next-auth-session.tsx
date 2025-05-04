import React, { PropsWithChildren } from "react";

import { SessionProvider } from "next-auth/react";

function NextAuthSessionProvider({ children }: PropsWithChildren<unknown>) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default NextAuthSessionProvider;
