import React from "react";

import Image from "next/image";

import MessageInfo from "@/public/images/MessageInfo.png";
import { Inbox } from "lucide-react";

import openMailApp from "@/lib/utils/openMail";

import { Button } from "../ui/button";

type Props = {
  email: string;
};

function UserEmailVerification({ email }: Props) {
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
      <h2 className="text-4xl font-medium text-white">Verify it&apos;s you!</h2>
      <p className="text-xl text-white">You’re just one step away!</p>
      <p className="text-sm text-white">
        We have sent a Verification link to {email}. If you have not received
        the verification link, please check your “Spam” or “Junk” folder.
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

export default UserEmailVerification;
