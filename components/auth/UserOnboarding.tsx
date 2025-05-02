"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { FaCircleArrowRight } from "react-icons/fa6";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { UserOnboardingSchema } from "@/lib/validations/UserOnboarding";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

type UserOnboardingFormFields = z.infer<typeof UserOnboardingSchema>;

function UserOnboarding() {
  const heardFromOptions = [
    { label: "Social Media", value: "social_media" },
    { label: "Search Engine", value: "search_engine" },
    { label: "Friend Referral", value: "friend_referral" },
    { label: "Advertisement", value: "advertisement" },
    { label: "Other", value: "other" },
  ];

  const initialValues: UserOnboardingFormFields = {
    brandName: "",
    feedbackMessage: "",
    heardFrom: "",
    marketingMethods: "",
    website: "",
  };
  const form = useForm<UserOnboardingFormFields>({
    resolver: zodResolver(UserOnboardingSchema),
    defaultValues: initialValues,
  });

  const onSubmit = (data: UserOnboardingFormFields) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="brandName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand Name</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-full p-6"
                      placeholder="Enter your brand name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-full p-6"
                      placeholder="https://..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="marketingMethods"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Marketing Methods</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-full p-6"
                      placeholder="Enter your marketing methods"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="heardFrom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How did you hear about us?</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="rounded-full p-6">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {heardFromOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="feedbackMessage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Feedback</FormLabel>
                  <FormControl>
                    <Textarea
                      className="rounded-lg p-6"
                      placeholder="Enter your feedback"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            className="mt-2 flex h-[unset] w-full items-center justify-center rounded-full bg-yellow-400 p-4 text-[1rem] font-medium text-zinc-950 [&_svg]:size-4 md:[&_svg]:size-5"
            type="submit"
          >
            <span>Proceed</span>
            <FaCircleArrowRight className="ml-1" size={30} />
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default UserOnboarding;
