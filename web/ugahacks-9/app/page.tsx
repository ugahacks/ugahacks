// import Hello from "@/components/Hello";

import Navbar from "@/components/Navbar/Navbar";
import Splash from "./splash/Splash";

export default function Home() {
  return (
    <div className="main">
      <Navbar />
      <Splash />
    </div>
  );
}
