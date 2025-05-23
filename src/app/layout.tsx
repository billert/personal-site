import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from 'next-view-transitions'
import { Analytics } from "@vercel/analytics/next"

import Navbar from "./navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Owen Cai Portfolio",
  description: "Personal Website of Owen Cai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          
            <Navbar/>
            {children}
            <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}
