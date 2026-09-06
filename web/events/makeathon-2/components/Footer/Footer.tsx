import React from "react";
import styles from "../../styles/Footer.module.css";

function Footer() {
  return (
    <section className={styles.body}>
      <div className={styles.container}>
        <div className={styles.icon_row}>
          <div className={styles.icon}>
            <a
              href="https://www.instagram.com/ugahacks/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/instagram_icon.svg" alt="instagram" />
            </a>
          </div>
          <div className={styles.icon}>
            <a
              href="https://www.facebook.com/ugahacks/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/facebook_icon.svg" alt="facebook" />
            </a>
          </div>
          <div className={styles.icon}>
            <a
              href="https://www.linkedin.com/company/ugahacks"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/linkedin_icon.svg" alt="linkedin" />
            </a>
          </div>
          <div className={styles.icon}>
            <a
              href="https://www.github.com/ugahacks/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/github_icon.svg" alt="github" />
            </a>
          </div>
          <div className={styles.icon}>
            <a href="https://ugahacks.com/" target="_blank" rel="noreferrer">
              <img src="/icons/site_icon.svg" alt="site" />
            </a>
          </div>
        </div>
        <div className={styles.subtitle}>
          <p>
            designed and coded by the{" "}
            <span className={styles.uh9_rainbow}>ugahacks 9 team</span>
          </p>
        </div>
        <div className={styles.subtitle}>
          <p>
            Spot a bug?{" "}
            <span className={styles.mail}>
              <a href="mailto:hello@ugahacks.com">Let us know!</a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
