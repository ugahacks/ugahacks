import Image from "next/image";
import Toplandingpage from "./components/Toplandingpage/Toplandingpage";

export default function Home() {
  return (
    <div style={{ backgroundColor: '#C4DB94', minHeight: '100vh' }}>
      <Toplandingpage />
    </div>
  );
}
