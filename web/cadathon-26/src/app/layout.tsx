import type { Metadata } from "next";
import {
  Orbitron,
  Barlow_Condensed,
  Inter,
  Zalando_Sans_Expanded,
} from "next/font/google";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "~/lib/site";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const zalandoSansExpanded = Zalando_Sans_Expanded({
  variable: "--font-zalando-sans-expanded",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Drive Design Forward`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "UGAHacks",
    "CADathon",
    "hackathon",
    "CAD",
    "design competition",
    "University of Georgia",
    "Athens GA",
    "engineering",
  ],
  authors: [{ name: "UGAHacks", url: "https://ugahacks.com" }],
  creator: "UGAHacks",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Drive Design Forward`,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Drive Design Forward`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${barlowCondensed.variable} ${zalandoSansExpanded.variable} ${inter.variable} h-full bg-black antialiased`}
    >
      <body className="mx-auto flex min-h-full max-w-360 flex-col">
        {children}
      </body>
    </html>
  );
}
