"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { FaCircleArrowRight } from "react-icons/fa6";

import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRound } from "lucide-react";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { PasswordResetSchema } from "@/lib/validations/PasswordReset";

import { Button } from "../ui/button";
import { InputPassword } from "../ui/input-password";

type PasswordResetFormFields = z.infer<typeof PasswordResetSchema>;

type Props = {
  token: string;
};

function PasswordReset({ token }: Props) {
  const initialValues: PasswordResetFormFields = {
    password: "",
    confirmPassword: "",
  };

  const form = useForm<PasswordResetFormFields>({
    resolver: zodResolver(PasswordResetSchema),
    defaultValues: initialValues,
  });

  const onSubmit = (data: PasswordResetFormFields) => {
    console.log(data, token);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-3">
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputPassword
                    autoComplete="current-password"
                    icon={<KeyRound />}
                    className="mb-2 mr-2.5 size-full min-h-[44px] rounded-full"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.confirmPassword?.message || "\u00A0"}
                </FormMessage>
              </FormItem>
            )}
          />
          <Button
            className="mt-2 flex h-[unset] w-full items-center justify-center rounded-full bg-yellow-400 p-4 text-[1rem] font-medium text-zinc-950 [&_svg]:size-4 md:[&_svg]:size-5"
            // isLoading={isSubmitting}
            type="submit"
          >
            <span className="inline-flex items-center justify-center text-[1rem]">
              Change Password
            </span>
            <FaCircleArrowRight className="ml-1" size={30} />
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default PasswordReset;
