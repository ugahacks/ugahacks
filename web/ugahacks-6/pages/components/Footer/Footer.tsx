import React, { ReactElement } from 'react';
//import './Footer.module.css';
import facebook from './images/facebook.svg';
import github from './images/github.svg';
import instagram from './images/insta.svg';
import twitter from './images/twitter.svg';
import orgsite from './images/byteicon.svg';
import BugReportIcon from '@material-ui/icons/BugReport';
import Image from 'next/image';

function Footer(): ReactElement {
  return (
        <footer className='section fp-auto-height'>
            <a href="https://github.com/ugahacks/" target="_blank" rel="noopener noreferrer" className="footericons"><Image src={github} alt="Ugahacks Github"></Image></a>
            <a href="https://www.facebook.com/ugahacks/" target="_blank" rel="noopener noreferrer" className="footericons"><Image src={facebook} alt="Ugahacks Facebook"></Image></a>
            <a href="https://twitter.com/ugahacks" target="_blank" rel="noopener noreferrer" className="footericons"><Image src={twitter} alt="Ugahacks Twitter"></Image></a>
            <a href="https://www.instagram.com/ugahacks/" target="_blank" rel="noopener noreferrer" className="footericons"><Image src={instagram} alt="Ugahacks Instagram"></Image></a>
            <a href="https://www.ugahacks.com/" target="_blank" rel="noopener noreferrer" className="footericons"><Image id="byte" src={orgsite} alt="Ugahacks Organization Website"></Image></a>
            <p>Spotted a <BugReportIcon></BugReportIcon>? <a href="https://github.com/ugahacks/ugahacks-6/issues/new" target="_blank" rel="noopener noreferrer">Let us know!</a></p>
            <small>Icons provided by <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">Icons8</a></small>
        </footer>
  );
}

export default Footer;
