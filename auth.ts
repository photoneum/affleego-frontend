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
          if (
            error === "Your request couldn't be processed. Please try again."
          ) {
            throw new CustomAuthError(
              "Due to multiple failed attempts, your account has been locked. Please try again later.",
            );
          }
          throw new CustomAuthError(error as string);
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
