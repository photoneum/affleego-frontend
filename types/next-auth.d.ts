/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth, { DefaultSession, User } from "next-auth";
import { JWT } from "next-auth/jwt";

export interface CustomAuthUser extends User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}

declare module "next-auth" {
  interface Session {
    user?: CustomAuthUser & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user?: CustomAuthUser;
  }
}
