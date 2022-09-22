import React, { ReactElement } from "react";
import BugReportIcon from "@material-ui/icons/BugReport";
// import Image from 'next/image';

const facebook: string = "/icons/FooterImages/images/facebook.svg";
const github: string = "/icons/FooterImages/images/github.svg";
const instagram: string = "/icons/FooterImages/images/insta.svg";
const twitter: string = "/icons/FooterImages/images/twitter.svg";
const orgsite: string = "/icons/FooterImages/images/byteicon.svg";

function Footer(): ReactElement {
  return (
    <footer className="section fp-auto-height">
      <a
        href="https://github.com/ugahacks/"
        target="_blank"
        rel="noopener noreferrer"
        className="footericons"
      >
        <img src={github} alt="Ugahacks Github" />
      </a>
      <a
        href="https://www.facebook.com/ugahacks/"
        target="_blank"
        rel="noopener noreferrer"
        className="footericons"
      >
        <img src={facebook} alt="Ugahacks Facebook" />
      </a>
      <a
        href="https://twitter.com/ugahacks"
        target="_blank"
        rel="noopener noreferrer"
        className="footericons"
      >
        <img src={twitter} alt="Ugahacks Twitter" />
      </a>
      <a
        href="https://www.instagram.com/ugahacks/"
        target="_blank"
        rel="noopener noreferrer"
        className="footericons"
      >
        <img src={instagram} alt="Ugahacks Instagram" />
      </a>
      <a
        href="https://www.ugahacks.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="footericons"
      >
        <img id="byte" src={orgsite} alt="Ugahacks Organization Website" />
      </a>
      <p>
        Spotted a <BugReportIcon></BugReportIcon>?{" "}
        <a
          href="https://github.com/ugahacks/ugahacks-8/issues/new"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let us know!
        </a>
      </p>
      <small>
        Icons provided by{" "}
        <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">
          Icons8
        </a>
      </small>
    </footer>
  );
}

export default Footer;
