"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { FaCircleArrowRight } from "react-icons/fa6";

import Image from "next/image";

import MessageInfo from "@/public/images/MessageInfo.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { Inbox, Mail } from "lucide-react";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import useInitiatePasswordReset from "@/hooks/mutations/useInitiatePasswordReset";

import openMailApp from "@/lib/utils/openMail";
import { InitiatePasswordResetSchema } from "@/lib/validations/InitiatePasswordReset";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

type InitiatePasswordResetFormFields = z.infer<
  typeof InitiatePasswordResetSchema
>;

function InitiatePasswordReset() {
  const initialValues: InitiatePasswordResetFormFields = {
    email: "",
  };

  const mutation = useInitiatePasswordReset();

  const form = useForm<InitiatePasswordResetFormFields>({
    resolver: zodResolver(InitiatePasswordResetSchema),
    defaultValues: initialValues,
  });

  const email = form.watch("email");

  const onSubmit = (data: InitiatePasswordResetFormFields) => {
    mutation.mutate(data);
  };

  if (mutation.isSuccess) {
    return (
      <div className="flex flex-col items-start justify-center space-y-4">
        <div className="mx-auto my-6 flex flex-col items-center justify-center">
          <Image
            alt="Verification Email Sent"
            height={180}
            src={MessageInfo}
            width={180}
          />
        </div>
        <h2 className="text-4xl font-medium text-white">
          Password reset initiated!
        </h2>
        <p className="text-sm text-white">
          We have sent a password reset link to {email}. If you have not
          received the password reset link, please check your “Spam” or “Junk”
          folder.
        </p>
        <Button
          onClick={openMailApp}
          className="mt-2 flex h-[unset] w-full items-center justify-center rounded-full bg-yellow-400 p-4 text-[1rem] font-medium text-zinc-950 [&_svg]:size-4 md:[&_svg]:size-5"
          type="button"
        >
          <Inbox className="mr-1" size={30} />
          <span className="inline-flex items-center justify-center text-[1rem]">
            Open mail app
          </span>
        </Button>
      </div>
    );
  }

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

          <Button
            className="mt-2 flex h-[unset] w-full items-center justify-center rounded-full bg-yellow-400 p-4 text-[1rem] font-medium text-zinc-950 [&_svg]:size-4 md:[&_svg]:size-5"
            isLoading={mutation.isPending}
            type="submit"
          >
            <span className="inline-flex items-center justify-center text-[1rem]">
              Send reset link
            </span>
            <FaCircleArrowRight className="ml-1" size={30} />
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default InitiatePasswordReset;
