import type { Metadata } from "next";
import { Courier_Prime, Oswald } from "next/font/google";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "~/lib/site";

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  variable: "--font-courier-prime",
  subsets: ["latin"],
});

/**
 * Secondary display face -- the `--font-stamp` token in globals.css. The
 * design uses **Post No Bills Colombo ExtraBold** for the Sponsor Tracks
 * folder titles and the "TOP SECRET" stamps.
 *
 * That family cannot be loaded here. `Post No Bills Colombo` is a Google
 * Fonts *early-access* release: it is not served by the standard Google
 * Fonts CSS API and is absent from `next/font/google`'s family manifest
 * (verified against next 16.2.10 -- `Post_No_Bills_Colombo` is not an
 * export, and the compiled font-data lists no family matching /colombo/).
 * Importing it is a hard build error, not a runtime fallback.
 *
 * So this loads **Oswald 700** as the stand-in: the nearest available
 * condensed poster grotesque, which is what the Latin cut of Post No Bills
 * reads as at the one size the design uses it (32px). It is deliberately
 * published under the `--font-post-no-bills` variable the token expects, so
 * dropping in the real face -- self-hosted via `next/font/local` once the
 * woff2 is licensed and committed -- is this one declaration and nothing
 * else. **Flagged for design review**: Page 2 uses this face on a single
 * element, so it may be a stray rather than a system decision, in which case
 * both this import and `--font-stamp` should be deleted rather than fixed.
 */
const stampFont = Oswald({
  weight: "700",
  variable: "--font-post-no-bills",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "UGAHacks",
    "UGAHacks 12",
    "hackathon",
    "University of Georgia",
    "Athens GA",
    "students",
  ],
  authors: [{ name: "UGAHacks", url: "https://ugahacks.com" }],
  creator: "UGAHacks",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
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
      className={`${courierPrime.variable} ${stampFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
