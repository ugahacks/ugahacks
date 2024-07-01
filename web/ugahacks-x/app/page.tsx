import Image from "next/image";

export default function Home() {
  return (
    <div style={{width: "100vw" , height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundImage: 'url("../UHX_Background_No_Text 1.png")', display: "flex", flexDirection: "column", alignItems: "center"}}>
    <img style={{width: "700px", height: "300px"}}src="../UHX_Transparent_White 1.png"></img>
    <h1>Yo</h1>
    </div>
  );
}
