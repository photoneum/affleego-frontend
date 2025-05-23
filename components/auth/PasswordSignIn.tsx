"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { FaCircleArrowRight } from "react-icons/fa6";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRound, Mail } from "lucide-react";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import usePasswordSignIn from "@/hooks/mutations/usePasswordSignIn";

import { PasswordSignInSchema } from "@/lib/validations/PasswordSignIn";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { InputPassword } from "../ui/input-password";

type PasswordSignInFormFields = z.infer<typeof PasswordSignInSchema>;

function PasswordSignIn() {
  const initialValues: PasswordSignInFormFields = {
    email: "",
    password: "",
  };

  const form = useForm<PasswordSignInFormFields>({
    resolver: zodResolver(PasswordSignInSchema),
    defaultValues: initialValues,
  });

  const mutation = usePasswordSignIn();

  const onSubmit = async (data: PasswordSignInFormFields) => {
    await mutation.mutateAsync(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    className="mb-2 mr-2.5 size-full min-h-[44px] rounded-full"
                    icon={<Mail />}
                    iconPosition="left"
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.email?.message || "\u00A0"}
                </FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputPassword
                    autoComplete="current-password"
                    icon={<KeyRound />}
                    className="mb-2 mr-2.5 size-full min-h-[44px] rounded-full"
                    id="password"
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.password?.message || "\u00A0"}
                </FormMessage>
              </FormItem>
            )}
          />
          <Link
            className="text-right text-sm text-yellow-400"
            href="/auth/forgot-password"
          >
            Forgot your password?
          </Link>
          <Button
            className="mt-2 flex h-[unset] w-full items-center justify-center rounded-full bg-yellow-400 p-4 text-[1rem] font-medium text-zinc-950 [&_svg]:size-4 md:[&_svg]:size-5"
            disabled={mutation.isPending}
            isLoading={mutation.isPending}
            type="submit"
          >
            <span className="inline-flex items-center justify-center text-[1rem]">
              Sign in
            </span>
            <FaCircleArrowRight className="ml-1" size={30} />
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default PasswordSignIn;
