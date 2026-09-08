import Image from "next/image";
import Navbar from "../Navbar/Navbar";
export default function Toplandingpage() {
  return (
    <>
        <Navbar></Navbar>
        <Image 
        src="/LandingPage.svg"
        alt="Landing Page image"
        width={1920}            
        height={1080}
        />
    </>
  );
}
