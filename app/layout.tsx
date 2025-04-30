import type { Metadata } from "next";

import { Space_Grotesk } from "next/font/google";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Affleego - Ultimate Platform for High-Paying CPA",
  description: "The best CPA network for high-paying offers",
  icons: {
    icon: "/img/favicon.ico",
  },
  openGraph: {
    title: "Affleego - Ultimate Platform for High-Paying CPA",
    description: "The best CPA network for high-paying offers",
    images: "/img/png/AffleegoLogo.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affleego - Ultimate Platform for High-Paying CPA",
    description: "The best CPA network for high-paying offers",
    images: "/img/png/AffleegoLogo.png",
    site: "https://affleego.com",
    creator: "@affleego",
  },
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
    noarchive: true,
    nosnippet: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${spaceGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
