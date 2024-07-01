import React from "react";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src="/Byte_Transparent.png" alt="Logo" />
      <div className={styles.navLinks}>
        <a href="#">About</a>
        <a href="#">FAQ</a>
        <a href="#">Our Team</a>
        <a href="#">Sponsors</a>
      </div>
    </div>
  );
};

export default Navbar;
