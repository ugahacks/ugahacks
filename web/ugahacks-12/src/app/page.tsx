import { SITE_NAME } from "~/lib/site";
import SponsorSection from "~/components/SponsorSection";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8 w-full">
      <h1 className="text-4xl font-bold">{SITE_NAME}</h1>
      <p className="text-lg">Coming soon.</p>
      
      <SponsorSection />
    </main>
  );
}