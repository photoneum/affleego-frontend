import { TbTargetArrow } from "react-icons/tb";

import { Card, CardContent } from "@/components/ui/card";

export default function SupportPage() {
  return (
    <div className="flex h-full items-center justify-center">
      <Card className="animate-fade-in border-0 bg-gradient-to-br from-green-400 via-teal-500 to-blue-600 text-white shadow-2xl">
        <CardContent className="flex flex-col items-center px-8 py-12">
          <TbTargetArrow size={64} className="mb-6 animate-bounce" />
          <h1 className="mb-2 text-4xl font-extrabold drop-shadow-lg">
            Support Center Coming Soon!
          </h1>
          <p className="mb-4 text-lg font-medium opacity-90">
            Get help, connect with managers, and access resources for your
            affiliate journey.
          </p>
          <span className="mt-2 rounded bg-white/20 px-4 py-2 text-base font-semibold">
            We&apos;re here for you!
          </span>
        </CardContent>
      </Card>
    </div>
  );
}
