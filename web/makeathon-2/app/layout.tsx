import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Makeathon II",
  description:
    "UGAHacks Makeathon II is here! Get ready to dive into a sea of possibilities with us during this 24-hour mini hackathon on October 21st-22nd at Driftmier Engineering Center!",
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
