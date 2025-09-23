import { Flame } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export default function WebinarsPage() {
  return (
    <div className="flex h-full items-center justify-center">
      <Card className="animate-fade-in border-0 bg-gradient-to-br from-orange-400 via-pink-500 to-red-500 text-white shadow-2xl">
        <CardContent className="flex flex-col items-center px-8 py-12">
          <Flame size={64} className="mb-6 animate-bounce" />
          <h1 className="mb-2 text-4xl font-extrabold drop-shadow-lg">
            Webinars Coming Soon!
          </h1>
          <p className="mb-4 text-lg font-medium opacity-90">
            Get ready for live events, expert sessions, and exclusive affiliate
            insights.
          </p>
          <span className="mt-2 rounded bg-white/20 px-4 py-2 text-base font-semibold">
            Stay tuned for launch!
          </span>
        </CardContent>
      </Card>
    </div>
  );
}
