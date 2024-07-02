import Image from "next/image";
import Splash from "./splash/Splash"
import Navbar from "../components/Navbar/Navbar";


export default function Home() {
  return (
    <div className="main">
      <Splash />
    </div>
  );
}
