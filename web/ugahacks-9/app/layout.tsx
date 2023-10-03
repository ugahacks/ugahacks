import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UGAHacks 9",
  description:
    "UGAHacks 9 - UGA's premier hackathon at MLC on February 9 - 11, 2024",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <link rel="icon" href="/icons/favicon.ico" />
    </html>
  );
}
