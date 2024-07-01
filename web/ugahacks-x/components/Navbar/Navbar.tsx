import React from "react";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navLeft}>
        <img className={styles.logo} src="/Byte_Transparent.png" alt="Logo" />
        <div className={styles.navLinks}>
          <a href="#">About</a>
          <a href="#">FAQ</a>
          <a href="#">Our Team</a>
          <a href="#">Sponsors</a>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <a href="#"><img src="/icons/instagram.png" alt="Instagram" /></a>
        <a href="#"><img src="/icons/twitter.png" alt="Twitter" /></a>
        <a href="#"><img src="/icons/github.png" alt="GitHub" /></a>
        <a href="#"><img src="/icons/meta.png" alt="Facebook" /></a>
        <a href="#"><img src="/icons/web.png" alt="Website" /></a>
      </div>
    </div>
  );
};

export default Navbar;
