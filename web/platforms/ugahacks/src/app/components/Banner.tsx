import Link from "next/link";
export default function Banner() {
  return (
    <div className="w-full bg-red-600 text-white text-center py-3 shadow-md animate-drop-in">
      <p className="text-sm sm:text-base font-medium animate-pulse">
        <Link
          className="duration-300 hover:text-red-300 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://cadathon.ugahacks.com/"
        >
          CADATHON REGISTRATION NOW OPEN
        </Link>
      </p>
    </div>
  );
}
