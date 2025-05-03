"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { FaCircleArrowRight } from "react-icons/fa6";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

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

  const form = useForm<InitiatePasswordResetFormFields>({
    resolver: zodResolver(InitiatePasswordResetSchema),
    defaultValues: initialValues,
  });

  const onSubmit = (data: InitiatePasswordResetFormFields) => {
    console.log(data);
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

          <Button
            className="mt-2 flex h-[unset] w-full items-center justify-center rounded-full bg-yellow-400 p-4 text-[1rem] font-medium text-zinc-950 [&_svg]:size-4 md:[&_svg]:size-5"
            // isLoading={isSubmitting}
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
