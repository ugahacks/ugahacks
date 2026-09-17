import Image from "next/image";
import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";

const FOOTER_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/ugahacks",
    Icon: RiFacebookFill,
    position: "left-[31.5%]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ugahacks",
    Icon: RiInstagramFill,
    position: "left-[40.2%]",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ugahacks",
    Icon: RiLinkedinFill,
    position: "left-[49%]",
  },
  {
    label: "GitHub",
    href: "https://github.com/ugahacks",
    Icon: RiGithubFill,
    position: "left-[57.8%]",
  },
] as const;

export default function Footer() {
  return (
    <footer className="bg-brick text-paper">
      <div className="relative hidden aspect-[1440/300] w-full md:block">
        <Image
          src="/footer.png"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none object-cover"
          aria-hidden="true"
        />
        <nav aria-label="UGAHacks social links">
          {FOOTER_LINKS.map(({ label, href, position }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`absolute top-[48%] ${position} w-[5.1%] aspect-square rounded-full outline-offset-4 focus-visible:outline-2 focus-visible:outline-paper`}
            />
          ))}
        </nav>
      </div>

      <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-10 text-center md:hidden">
        <p className="text-base tracking-case">© 2027 UGAHacks. All rights reserved.</p>
        <p className="mt-2 text-lg font-bold tracking-case">Follow us</p>
        <nav className="mt-5 flex gap-5" aria-label="UGAHacks social links">
          {FOOTER_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid size-11 place-items-center rounded-full text-3xl transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
            >
              <Icon aria-hidden />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
