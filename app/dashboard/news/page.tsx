import { MessageSquare } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export default function NewsPage() {
  return (
    <div className="flex h-full items-center justify-center">
      <Card className="animate-fade-in border-0 bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 text-white shadow-2xl">
        <CardContent className="flex flex-col items-center px-8 py-12">
          <MessageSquare size={64} className="mb-6 animate-bounce" />
          <h1 className="mb-2 text-4xl font-extrabold drop-shadow-lg">
            News & Alerts Coming Soon!
          </h1>
          <p className="mb-4 text-lg font-medium opacity-90">
            Stay updated with the latest affiliate news, platform updates, and
            exclusive alerts.
          </p>
          <span className="mt-2 rounded bg-white/20 px-4 py-2 text-base font-semibold">
            Watch this space!
          </span>
        </CardContent>
      </Card>
    </div>
  );
}
