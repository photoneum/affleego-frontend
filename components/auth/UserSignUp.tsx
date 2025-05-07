"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCircleArrowRight } from "react-icons/fa6";

import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRound, Mail, Smartphone, SquareUserRound } from "lucide-react";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import useRegisterUser from "@/hooks/mutations/useRegisterUser";

import { UserSignUpSchema } from "@/lib/validations/UserSignUp";

import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { InputPassword } from "../ui/input-password";
import UserEmailVerification from "./UserEmailVerification";

type UserSignUpFormFields = z.infer<typeof UserSignUpSchema>;

function UserSignUp() {
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);
  const initialValues: UserSignUpFormFields = {
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    termsAndConditions: false,
  };

  const form = useForm<UserSignUpFormFields>({
    resolver: zodResolver(UserSignUpSchema),
    defaultValues: initialValues,
  });

  const mutation = useRegisterUser();

  const onSubmit = async (data: UserSignUpFormFields) => {
    const names = data.fullName.split(" ");
    await mutation.mutateAsync(
      {
        email: data.email,
        password: data.password,
        first_name: names[0] || "",
        last_name: names[1] || "",
        phone_number: data.phoneNumber,
      },
      {
        onSuccess: () => {
          setIsSignupSuccess(true);
        },
      },
    );
  };

  if (isSignupSuccess) {
    return <UserEmailVerification email={form.getValues("email")} />;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    className="mb-2 mr-2.5 size-full min-h-[44px] rounded-full"
                    icon={<SquareUserRound />}
                    iconPosition="left"
                    id="fullName"
                    placeholder="Full Name"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.fullName?.message || "\u00A0"}
                </FormMessage>
              </FormItem>
            )}
          />
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
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    className="mb-2 mr-2.5 size-full min-h-[44px] rounded-full"
                    icon={<Smartphone />}
                    iconPosition="left"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.phoneNumber?.message || "\u00A0"}
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

          <FormField
            control={form.control}
            name="termsAndConditions"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4">
                <FormControl>
                  <Checkbox
                    className="size-4"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    I agree to Affleego&apos;s User Aggreement and Privacy
                    Policy
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <Button
            className="mt-2 flex h-[unset] w-full items-center justify-center rounded-full bg-yellow-400 p-4 text-[1rem] font-medium text-zinc-950 [&_svg]:size-4 md:[&_svg]:size-5"
            isLoading={mutation.isPending}
            type="submit"
          >
            <span className="inline-flex items-center justify-center text-[1rem]">
              Sign up
            </span>
            <FaCircleArrowRight className="ml-1" size={30} />
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default UserSignUp;
