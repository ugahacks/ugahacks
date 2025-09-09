import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CustomCursor from './components/CustomCursor';
import Navbar from "./components/Navbar/Navbar";
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
  title: "UGAHacks 11",
  description: "Welcome to UGAHacks 11 aka the best place ever!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <CustomCursor />{children}</body>
    </html>
  );
}
