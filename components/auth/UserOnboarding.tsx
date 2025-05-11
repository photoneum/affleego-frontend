"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCircleArrowRight } from "react-icons/fa6";

import { useSearchParams } from "next/navigation";

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

import useCollectUserOnboardingData from "@/hooks/mutations/useCollectUserOnboardingData";

import { UserOnboardingSchema } from "@/lib/validations/UserOnboarding";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import AccountCreatedSuccess from "./AccountCreatedSuccess";

type UserOnboardingFormFields = z.infer<typeof UserOnboardingSchema>;

function UserOnboarding() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

  const heardFromOptions = [
    { label: "Social Media", value: "social_media" },
    { label: "Search Engine", value: "search_engine" },
    { label: "Friend Referral", value: "friend_referral" },
    { label: "Advertisement", value: "advertisement" },
    { label: "Other", value: "other" },
  ];

  const typeOfDealsWantedOptions = [
    { label: "Forex CPA", value: "forex_cpa" },
    { label: "Forex Revenue Share", value: "forex_revenue_share" },
    { label: "Options", value: "options" },
    { label: "Sport betting", value: "sport_betting" },
    { label: "Casino", value: "casino" },
    { label: "All", value: "all" },
  ];

  const affliateExperienceOptions = [
    { label: "I am new to affiliate marketing", value: "new" },
    {
      label: "I have been in the affiliate marketing industry for a while",
      value: "experienced",
    },
    {
      label: "I am an expert in the affiliate marketing industry",
      value: "expert",
    },
  ];

  const mutation = useCollectUserOnboardingData();

  const initialValues: UserOnboardingFormFields = {
    brandName: "",
    feedbackMessage: "",
    heardFrom: "",
    marketingMethods: "",
    website: "",
    ftdsDeliverabilityPerMonth: 0,
    affliateExperience: "I am new to affiliate marketing",
    typeOfDealsWanted: "forex_cpa",
  };
  const form = useForm<UserOnboardingFormFields>({
    resolver: zodResolver(UserOnboardingSchema),
    defaultValues: initialValues,
  });

  const onSubmit = (data: UserOnboardingFormFields) => {
    mutation.mutate(
      {
        user_email: email as string,
        brand_name: data.brandName,
        feedback_message: data.feedbackMessage,
        heard_from: data.heardFrom,
        marketing_methods: data.marketingMethods,
        website: data.website,
        ftds_deliverability_per_month: data.ftdsDeliverabilityPerMonth,
        affliate_experience: data.affliateExperience,
        type_of_deals_wanted: data.typeOfDealsWanted,
      },
      {
        onSuccess: () => {
          setIsOnboardingComplete(true);
        },
      },
    );
  };

  if (isOnboardingComplete) {
    return <AccountCreatedSuccess />;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid gap-2 md:gap-3">
            <FormField
              control={form.control}
              name="brandName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand Name</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-full p-4 md:p-6"
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
                      className="rounded-full p-4 md:p-6"
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
                      className="rounded-full p-4 md:p-6"
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
              name="ftdsDeliverabilityPerMonth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    How much FTDs can you deliver per month?
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-full p-4 md:p-6"
                      placeholder="Enter your FTDs deliverability per month"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="typeOfDealsWanted"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type of deals wanted</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="rounded-full p-4 text-white md:p-6">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {typeOfDealsWantedOptions.map((option) => (
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
              name="affliateExperience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Affliate experience</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="rounded-full p-4 text-white md:p-6">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {affliateExperienceOptions.map((option) => (
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
              name="heardFrom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How did you hear about us?</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="rounded-full p-4 text-white md:p-6">
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
                      className="rounded-lg p-4 text-white md:p-6"
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
            className="mt-2 flex h-[unset] w-full items-center justify-center rounded-full bg-yellow-400 p-2 text-[1rem] font-medium text-zinc-950 md:p-4 [&_svg]:size-4 md:[&_svg]:size-5"
            disabled={mutation.isPending}
            isLoading={mutation.isPending}
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
