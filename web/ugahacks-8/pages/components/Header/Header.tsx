import Link from "next/link";
import Image from "next/image";

import { BsFacebook, BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
import { ppid } from "node:process";

const NavLink = (props: HeaderLinkProps) => (
  <Link href={props.href}>
    <a>{props.name}</a>
  </Link>
);

interface HeaderLinkProps {
  href: string;
  name: string;
}

interface HeaderReactIconProps {
  image: JSX.Element;
  href: string;
}

const NavIcon = (props: HeaderReactIconProps) => (
  <a href={props.href}>{props.image}</a>
);
export default function Header() {
  return (
    <>
      <div className="w-full h-20 bg-goblin-500 font-bold items-center grid grid-cols-2 drop-shadow-xl">
        <div className="flex items-center">
          {" "}
          <div className="pl-4 pt-[7px]">
            <Image
              src={"/icons/HeaderImages/images/byte_mini.png"}
              width={48}
              height={50}
            />
          </div>
          <div className="pl-10 flex gap-5 text-lg text-white text-center font-extralight">
            <NavLink href={"/About"} name={"About"} />
            <NavLink href={"/FAQ"} name={"FAQ"} />
            <NavLink href={"/Out_Team"} name={"Our Team"} />
            <NavLink href={"/Sponsors"} name={"Sponsors"} />
            <NavLink href={"/Register"} name={"Register"} />
          </div>
        </div>

        <div className="flex flex-row-reverse gap-4 text-white items-center pr-4">
          <NavIcon
            href={"https://www.instagram.com/ugahacks/?hl=en"}
            image={<BsInstagram size={40} />}
          />
          <NavIcon
            href={"https://twitter.com/ugahacks?lang=en"}
            image={<BsTwitter size={40} />}
          />

          <NavIcon
            href={"https://github.com/ugahacks"}
            image={<BsGithub size={40} />}
          />
          <NavIcon
            href={"https://www.facebook.com/ugahacks/"}
            image={<BsFacebook size={40} />}
          />
        </div>
        <div className="h-24 w-24 right-5 absolute top-20">
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"
            alt="Major League Hacking 2022 Hackathon Season"
          />
        </div>
      </div>
    </>
  );
}
