import { LayoutDashboard } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export default function ProfilePage() {
  return (
    <div className="flex h-full items-center justify-center">
      <Card className="animate-fade-in border-0 bg-gradient-to-br from-purple-500 via-pink-400 to-indigo-600 text-white shadow-2xl">
        <CardContent className="flex flex-col items-center px-8 py-12">
          <LayoutDashboard size={64} className="mb-6 animate-bounce" />
          <h1 className="mb-2 text-4xl font-extrabold drop-shadow-lg">
            Profile Features Coming Soon!
          </h1>
          <p className="mb-4 text-lg font-medium opacity-90">
            Manage your account, update your avatar, and connect external
            affiliates soon.
          </p>
          <span className="mt-2 rounded bg-white/20 px-4 py-2 text-base font-semibold">
            Personalization is on the way!
          </span>
        </CardContent>
      </Card>
    </div>
  );
}
