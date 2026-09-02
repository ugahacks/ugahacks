import { SITE_NAME } from "~/lib/site";
import { FAQ } from "~/components/FAQ";
import { Navbar } from "~/components/Navbar";
import { Schedule } from "~/components/Schedule";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="flex flex-col items-center justify-center gap-4 p-8">
        <h1 className="text-4xl font-bold">{SITE_NAME}</h1>
        <p className="text-lg">Coming soon.</p>
      </div>
    </main>
  );
}
