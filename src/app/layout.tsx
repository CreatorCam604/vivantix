import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBall";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vivantix – Software & AI Automations Agency",
  description: "Custom software, AI automations, dashboards and intelligent systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030a13] text-white`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
