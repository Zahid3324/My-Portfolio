import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ChatWidget from "@/components/ui/ChatWidget";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zahid Abbas — Full-stack Web Developer",
  description:
    "Zahid Abbas builds thoughtful full-stack web experiences, from responsive interfaces to backend APIs.",
  icons: {
    icon: "/ZA logo.png",
    shortcut: "/ZA logo.png",
    apple: "/ZA logo.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
