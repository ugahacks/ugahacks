import React, { ReactElement } from "react";
import BugReportIcon from "@material-ui/icons/BugReport";
// import Image from 'next/image';

const facebook: string = "/icons/FooterImages/images/facebook.svg";
const github: string = "/icons/FooterImages/images/github.svg";
const instagram: string = "/icons/FooterImages/images/insta.svg";
const twitter: string = "/icons/FooterImages/images/twitter.svg";
const orgsite: string = "/icons/FooterImages/images/byteicon.svg";

interface footerIconProps {
  image: string;
  href: string;

  alt: string;
}

const FooterIcon = (props: footerIconProps) => (
  <a
    href={props.href}
    rel="noopener noreferrer"
    className="p-1 fill-celery-500"
  >
    <img
      src={props.image}
      alt={props.alt}
      className="h-16 w-16 fill-celery-500"
    />
  </a>
);

function Footer(): ReactElement {
  return (
    <footer className="grid grid-rows-2">
      <div className="flex flex-row align-middle items-center justify-center">
        <FooterIcon
          image={github}
          href={"https://www.github.com/ugahacks"}
          alt={"UGAHacks github"}
        />
        <FooterIcon
          image={facebook}
          href={"https://www.facebook.com/ugahacks/"}
          alt={"UGAHacks Facebook"}
        />
        <FooterIcon
          image={instagram}
          href={"https://www.instagram.com/ugahacks/"}
          alt={"UGAHacks Instagram"}
        />
        <FooterIcon
          image={twitter}
          href={"https://twitter.com/ugahacks"}
          alt={"UGAHacks Twitter"}
        />
        <FooterIcon
          image={orgsite}
          href={"https://www.ugahacks.com/"}
          alt={"UGAHacks Site"}
        />
      </div>

      <div>
        {" "}
        <p className="text-goblin-300">
          Spotted a <BugReportIcon></BugReportIcon>?{" "}
          <a
            href="https://github.com/ugahacks/ugahacks-8/issues/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let us know!
          </a>
        </p>
        <small className="text-goblin-300">
          Icons provided by{" "}
          <a
            href="https://icons8.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Icons8
          </a>
        </small>
      </div>
    </footer>
  );
}

export default Footer;
