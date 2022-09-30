import Link from "next/link";
import Image from "next/image";

import { BsFacebook, BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
import { ppid } from "node:process";

const NavLink = (props: HeaderLinkProps) => (
  <Link href={props.href}>
    <a className="custom_hover">{props.name}</a>
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
  <a className="custom_hover_icon" href={props.href}>
    {props.image}
  </a>
);

import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};
export default function Header() {
  const scrollPos = useScrollPosition();
  return (
    <>
      <div className="sticky top-0 z-50 justify-items-center">
        <div
          className={
            scrollPos > 0
              ? "w-full h-20 bg-goblin-500  font-bold  drop-shadow-xl duration-500 ease-in-out"
              : "w-full h-20  font-bold  bg-celery-500 duration-500 ease-in-out"
          }
        >
          <div className="pl-4 pt-[7px] flex flex-row md:flex-col md:flex-wrap items-center">
            <Link href="#Hero">
              <Image
                src={"/icons/HeaderImages/images/byte_mini.png"}
                width={48}
                height={50}
                alt={"Byte Mini"}
              />
            </Link>
            <div className="pl-10 flex gap-5 md:text-base text-xs text-white text-center font-extralight">
              <NavLink href={"/#About"} name={"About"} />
              <NavLink href={"/#FAQ"} name={"FAQ"} />
              <NavLink href={"/#Out_Team"} name={"Our Team"} />
              <NavLink href={"/#Sponsors"} name={"Sponsors"} />
              <NavLink href={"/#Register"} name={"Register"} />
            </div>
            <div className="flex ml-auto pr-4">
              <div className=" right-0 flex flex-row-reverse gap-4">
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
            </div>
          </div>
        </div>
        <div className="md:h-24 md:w-24 h-12 w-12 right-5 absolute top-20 shadow-none ">
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"
            alt="Major League Hacking 2023 Hackathon Season"
          />
        </div>
      </div>
    </>
  );
}
