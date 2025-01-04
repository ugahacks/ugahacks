
import styles from "../../styles/Splash.module.css";

const Splash = () => {
  return (
    <div>
     

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
            <p className="text-lg md:text-2xl font-bold">FEBRUARY<br />7-9,<br />2025</p>
          </div>
        </div>
        <div className="inline-block my-4 py-2 px-2 py-1 border-4 border-white text-white font-bold text-lg tracking-wider rounded-ee-3xl rounded-ss-3xl hover:animate-pulse hover:text-black transition duration-300">
          <button >
            <a href="https://mybyte.ugahacks.com/" target="_blank" rel="noopener noreferrer" className={styles.registerButton}>
              REGISTER NOW
            </a>
          </button>

        </div>
        <div className="mt-100" id="about"></div>
      </div>
      {/* EVERYTHING OUTSIDE HERE IS OUTSIDE OF THE BACKGROUND IMAGE */}

    </div>
  );
};

export default Splash;
