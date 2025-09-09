import NextAuth, { AuthError, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

import { env } from "@/env";
import axios from "axios";

import { PASSWORD_SIGN_IN_ROUTE, TOKEN_REFRESH_ROUTE } from "@/lib/constants";
import { http } from "@/lib/http";

import { CustomAuthUser } from "./types/next-auth";

export class CustomAuthError extends AuthError {
  constructor(msg: string) {
    super();
    this.message = msg;
    this.stack = undefined;
  }
}

async function refreshAccessToken(token: JWT): Promise<JWT> {
  try {
    const response = await axios.post<{ access: string }>(
      `${env.NEXT_PUBLIC_API_BASE_URL}${TOKEN_REFRESH_ROUTE}`,
      { refresh: token.refresh },
      { headers: { "Content-Type": "application/json" } },
    );
    return {
      ...token,
      access: response.data.access,
      accessTokenExpires: Date.now() + 30 * 60 * 1000, // 30 minutes
    };
  } catch (error) {
    // Determine error type if possible
    const errorMessage =
      error instanceof Error ? error.message : "Token refresh failed";
    return {
      message: errorMessage,
      code: "token_refresh_failed",
    };
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
    async jwt({ token, user: authResponse, account }) {
      // Initial sign in
      if (authResponse) {
        const { user, access, refresh } = authResponse as Session;
        token.user = user;
        token.access = access;
        token.refresh = refresh;
        token.accessTokenExpires =
          Date.now() + (account?.expires_in ?? 30 * 60) * 1000;

        return token;
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < (token.accessTokenExpires as number)) {
        return token;
      }

      // Access token has expired, try to update it
      return refreshAccessToken(token);
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
