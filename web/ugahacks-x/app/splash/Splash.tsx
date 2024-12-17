import logo from "../../public/bytelogo.png";
import fb from "../../public/social_logos/fb_logo.png";
import gh from "../../public/social_logos/gh_logo.png";
import ig from "../../public/social_logos/ig_logo.png";
import x from "../../public/social_logos/x_logo.png";
import styles from "../../styles/Splash.module.css";

const Splash = () => {
  return (
    <div>
      <header className="top-0 px-4 md:px-6 lg:px-8 h-16 flex items-center text-white z-50" style={{ fontFamily: "'Distortion Dos Analogue', sans-serif" }}>
        <a className="flex items-center justify-center" href="#">
          <img src={logo.src} alt="Logo" className="h-12 md:h-14 lg:h-16" />
        </a>
        <nav className="ml-4 md:ml-6 lg:ml-10 flex gap-4 sm:gap-6 md:gap-8 tracking-wider font-bold uppercase">
          <a className="text-xs md:text-sm lg:text-base hover:text-pink-500 transition-colors duration-300" href="#about">
            About
          </a>
          <a className="text-xs md:text-sm lg:text-base hover:text-pink-500 transition-colors duration-300" href="#faq">
            FAQ
          </a>
          <a className="text-xs md:text-sm lg:text-base hover:text-pink-500 transition-colors duration-300" href="#team">
            Our Team
          </a>
          <a className="text-xs md:text-sm lg:text-base hover:text-pink-500 transition-colors duration-300" href="#sponsors">
            Sponsors
          </a>
        </nav>

        <nav className="ml-auto flex gap-2 hidden sm:flex md:gap-3 lg:gap-4">
          <a href="https://www.facebook.com/ugahacks" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:animate-spin">
            <img src={fb.src} alt="Facebook" className="h-8 md:h-9 lg:h-10 px-1" />
          </a>
          <a href="https://github.com/ugahacks" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:animate-spin">
            <img src={gh.src} alt="GitHub" className="h-8 md:h-9 lg:h-10 px-1" />
          </a>
          <a href="https://twitter.com/ugahacks" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="hover:animate-spin">
            <img src={x.src} alt="Twitter" className="h-8 md:h-9 lg:h-10 px-1" />
          </a>
          <a href="https://instagram.com/ugahacks" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:animate-spin">
            <img src={ig.src} alt="Instagram" className="h-8 md:h-9 lg:h-10 px-1" />
          </a>
        </nav>
      </header>

      <div className={styles.splashContainer}>
        <a style={{ alignSelf: "end", marginRight: "50px" }} target="blank" href="http://hackp.ac/coc"><img style={{ height: "100px" }} src="/2025Badges/mlh-trust-badge-2025-white.png"></img></a>
        <div className={styles.logoContainer}>
          <img
            className={styles.mainLogo}
            src="/UHX_Transparent_White 1.png"
            alt="UGA Hacks Logo"
          />
        </div>

        <div className={styles.locationAndDateText}>
          <div className="grid md:grid-cols-2 gap-4 items-center" style={{ fontFamily: "'Distortion Dos Analogue', sans-serif" }}>
            <p
              className="text-lg md:text-2xl font-bold">
              UGA MILLER <br /> LEARNING CENTER
            </p>
            <p className="text-lg md:text-2xl font-bold">FEBRUARY<br />9-11,<br />2025</p>
          </div>
        </div>
        <div className="inline-block my-4 py-2 px-2 py-1 border-4 border-white text-white font-bold text-lg tracking-wider rounded-ee-3xl rounded-ss-3xl hover:animate-pulse hover:text-black transition duration-300">
          <button >
            <a href="https://mybyte.ugahacks.com/" target="_blank" rel="noopener noreferrer" className={styles.registerButton}>
              REGISTER NOW
            </a>
          </button>

        </div>
      </div>
      {/* EVERYTHING OUTSIDE HERE IS OUTSIDE OF THE BACKGROUND IMAGE */}

    </div>
  );
};

export default Splash;
