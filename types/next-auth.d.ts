/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth, { DefaultSession, User } from "next-auth";
import { JWT } from "next-auth/jwt";

export interface CustomAuthUser extends User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  image_url: string;
}

declare module "next-auth" {
  interface Session {
    access: string;
    refresh: string;
    user?: CustomAuthUser & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user?: CustomAuthUser;
  }
}
