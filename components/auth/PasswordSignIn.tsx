"use client";

import React, { useState } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

import Link from "next/link";

import { KeyRound, Mail } from "lucide-react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { InputPassword } from "../ui/input-password";

function PasswordSignIn() {
  const [isSubmitting] = useState(false);
  return (
    <>
      <form className="mb-4" noValidate={true} onSubmit={() => {}}>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <label className="text-zinc-950 dark:text-white" htmlFor="email">
              Email
            </label>
            <Input
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              className="mb-2 mr-2.5 size-full min-h-[44px] rounded-full"
              icon={<Mail />}
              iconPosition="left"
              id="email"
              name="email"
              placeholder="name@example.com"
              type="email"
            />
            <label
              className="mt-2 text-zinc-950 dark:text-white"
              htmlFor="password"
            >
              Password
            </label>
            <InputPassword
              autoComplete="current-password"
              icon={<KeyRound />}
              className="mb-2 mr-2.5 size-full min-h-[44px] rounded-full"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <Link
            className="text-right text-sm text-yellow-400"
            href="/dashboard/signin/forgot_password"
          >
            Forgot your password?
          </Link>
          <Button
            className="mt-2 flex h-[unset] w-full items-center justify-center rounded-full bg-yellow-400 p-4 text-[1rem] font-medium text-zinc-950 [&_svg]:size-4 md:[&_svg]:size-5"
            type="submit"
          >
            {isSubmitting ? (
              <svg
                aria-hidden="true"
                className="mr-2 inline size-4 animate-spin text-zinc-950 duration-500"
                fill="none"
                role="status"
                viewBox="0 0 100 101"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="white"
                ></path>
              </svg>
            ) : (
              <>
                <span className="inline-flex items-center justify-center text-[1rem]">
                  Sign in
                </span>
                <FaCircleArrowRight className="ml-1" size={30} />
              </>
            )}
          </Button>
        </div>
      </form>
      <p>
        <Link
          className="text-sm font-medium text-zinc-950 dark:text-white"
          href="/dashboard/signin/forgot_password"
        >
          Forgot your password?
        </Link>
      </p>
      {/* {allowEmail && (
        <p>
          <Link
            className="text-sm font-medium text-zinc-950 dark:text-white"
            href="/dashboard/signin/email_signin"
          >
            Sign in via magic link
          </Link>
        </p>
      )} */}
      <p>
        <Link
          className="text-sm font-medium text-zinc-950 dark:text-white"
          href="/dashboard/signin/signup"
        >
          Don&apos;t have an account? Sign up
        </Link>
      </p>
    </>
  );
}

export default PasswordSignIn;
