"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Navbar.module.css";
import { usePathname } from "next/navigation";

import {
  BsFacebook,
  BsGithub,
  BsTwitter,
  BsInstagram,
  BsGlobe,
} from "react-icons/bs";

interface NavLinkProps {
  href: string;
  name: string;
}

interface NavReactIconProps {
  image: JSX.Element;
  href: string;
}

const NavLink = (props: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;
  return (
    <Link
      className={isActive ? styles.activeLink : styles.navLink}
      href={props.href}
    >
      {props.name}
    </Link>
  );
};

const NavIcon = (props: NavReactIconProps) => {
  return (
    <Link className={styles.social_icon} href={props.href}>
      {props.image}
    </Link>
  );
};

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <Link href={"/"}>
          <Image
            src="/byte.png"
            alt="byte"
            className={styles.icon}
            width={48}
            height={50}
          />
        </Link>
        <NavLink href={"/about"} name={"About"} />
        <NavLink href={"/faq"} name={"FAQ"} />
        <NavLink href={"https://ugahacks.com/"} name={"Our Team"} />
        <NavLink href={"/sponsors"} name={"Sponsors"} />
      </div>
      <div className={styles.middle}>
        <img
          src="/logo.png"
          alt="ugahacks 9"
          className={styles.logo}
          //   width={100}
          //   height={40}
        />
      </div>
      <div className={styles.right}>
        <NavIcon
          href={"https://www.instagram.com/ugahacks/?hl=en"}
          image={<BsInstagram size={25} />}
        />
        <NavIcon
          href={"https://twitter.com/ugahacks?lang=en"}
          image={<BsTwitter size={25} />}
        />

        <NavIcon
          href={"https://github.com/ugahacks"}
          image={<BsGithub size={25} />}
        />
        <NavIcon
          href={"https://www.facebook.com/ugahacks/"}
          image={<BsFacebook size={25} />}
        />
        <NavIcon href={"https://ugahacks.com/"} image={<BsGlobe size={25} />} />
      </div>
      <a
        id="mlh-trust-badge"
        className="mlh_banner"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
          alt="Major League Hacking 2024 Hackathon Season"
          style={{ width: 100 }}
        />
      </a>
    </div>
  );
}

export default Navbar;
