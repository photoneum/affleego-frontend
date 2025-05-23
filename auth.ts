import NextAuth, { AuthError, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { PASSWORD_SIGN_IN_ROUTE } from "@/lib/constants";
import { http } from "@/lib/http";

import { CustomAuthUser } from "./types/next-auth";

export class CustomAuthError extends AuthError {
  constructor(msg: string) {
    super();
    this.message = msg;
    this.stack = undefined;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials.email || !credentials.password) {
            return null;
          }
          const { email, password } = credentials;
          const response = await http.post(PASSWORD_SIGN_IN_ROUTE, {
            email,
            password,
          });

          // response.data contains access token, refresh token, and user data
          return response.data;
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : String(error);

          if (
            errorMessage ===
            "No active account found with the given credentials"
          ) {
            throw new CustomAuthError("Invalid login credentials");
          }

          throw new CustomAuthError(errorMessage);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user: authResponse }) {
      // Initial sign in
      if (authResponse) {
        const { user, access, refresh } = authResponse as Session;
        token.user = user;
        token.access = access;
        token.refresh = refresh;
      }
      return token;
    },
    async session({ session, token }) {
      //   @ts-expect-error: token.user is not typed
      session.user = token.user as CustomAuthUser;
      session.access = token.access as string;
      session.refresh = token.refresh as string;
      return session;
    },
  },
});
