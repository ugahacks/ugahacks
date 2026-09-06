import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="relative flex items-center p-4">
      <Image 
        src="/NavLog.svg"
        alt="Navbar Background" 
        layout="fill" 
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10">
        <Image 
          src="/navgrassL.svg" 
          alt="Left Decorative Grass" 
          width={100} 
          height={50}
          className="ml-3"
        />
      </div>
      <div className="relative z-10 flex space-x-6 mx-auto">
        <a href="/" className="text-white hover:text-blue-300">Home</a>
        <a href="/schedule" className="text-white hover:text-blue-300">Schedule</a>
        <a href="/faq" className="text-white hover:text-blue-300">FAQ</a>
        <a href="/hackathon" className="text-white hover:text-blue-300">Hackathon</a>
      </div>
      <div className="relative z-10">
        <Image 
          src="/navgrassR.svg" 
          alt="Right Decorative Grass" 
          width={100}
          height={50}
          className="mr-3"
        />
      </div>
    </nav>
  );
};

export default Navbar;
