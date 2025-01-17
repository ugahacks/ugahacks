import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Splash from "./splash/Splash";


export default function Home() {
  return (
    <div className="main">
      <Splash />
    </div>
  );
}
