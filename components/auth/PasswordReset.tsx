"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCircleArrowRight } from "react-icons/fa6";

import { useSearchParams } from "next/navigation";

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

import useConfirmPasswordReset from "@/hooks/mutations/useConfirmPasswordReset";

import { PasswordResetSchema } from "@/lib/validations/PasswordReset";

import { Button } from "../ui/button";
import { InputPassword } from "../ui/input-password";
import PasswordResetSuccess from "./PasswordResetSuccess";

type PasswordResetFormFields = z.infer<typeof PasswordResetSchema>;

function PasswordReset() {
  const initialValues: PasswordResetFormFields = {
    password: "",
    confirmPassword: "",
  };

  const [isPasswordResetSuccess, setIsPasswordResetSuccess] = useState(false);

  const mutation = useConfirmPasswordReset();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const code = searchParams.get("code");

  const form = useForm<PasswordResetFormFields>({
    resolver: zodResolver(PasswordResetSchema),
    defaultValues: initialValues,
  });

  const onSubmit = (data: PasswordResetFormFields) => {
    mutation.mutate(
      {
        password: data.password,
        code: code as string,
        email: email as string,
      },
      {
        onSuccess: () => {
          setIsPasswordResetSuccess(true);
        },
      },
    );
  };

  if (isPasswordResetSuccess) {
    return <PasswordResetSuccess />;
  }

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
            isLoading={mutation.isPending}
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
