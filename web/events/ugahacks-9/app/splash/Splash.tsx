import React from "react";
import Image from "next/image";
import styles from "../../styles/Splash.module.css";
import Link from "next/link";

function Splash() {
  return (
    <div>
      {/** byte punching through banner: */}
      <div className={styles.banner}>
        <div className={styles.imageContainer}>
          <Image
            src="/banner2.svg"
            alt="uh9 banner"
            layout="responsive"
            width={700}
            height={200}
          />
        </div>
      </div>

      {/** comic nav: */}
      <div className={styles.comic_nav}>
        <div className={styles.button_container}>
          <Link href={"/about"} style={{ textDecoration: "none" }}>
            <Image
              className={styles.button}
              src="/buttons/about.svg"
              layout="responsive"
              alt="about button"
              width={125}
              height={161.8}
            />
            <div className={styles.button_text}>ABOUT</div>
          </Link>
        </div>
        <div className={styles.button_container}>
          <Link href={"/faq"} style={{ textDecoration: "none" }}>
            <Image
              src="/buttons/faq.svg"
              layout="responsive"
              alt="faq button"
              width={125}
              height={161.8}
            />
            <div className={styles.button_text}>FAQ</div>
          </Link>
        </div>
        <div className={styles.button_container}>
          <Link
            href={"https://ugahacks.com/#team"}
            style={{ textDecoration: "none" }}
          >
            <Image
              src="/buttons/our_team.svg"
              layout="responsive"
              alt="our team button"
              width={125}
              height={161.8}
            />
            <div className={styles.button_text}>OUR TEAM</div>
          </Link>
        </div>
        <div className={styles.button_container}>
          <Link href={"/sponsors"} style={{ textDecoration: "none" }}>
            <Image
              src="/buttons/sponsors.svg"
              layout="responsive"
              alt="sponsor button"
              width={125}
              height={161.8}
            />
            <div className={styles.button_text}>SPONSORS</div>
          </Link>
        </div>
      </div>

      {/** speech bubbles: */}
      <div className={styles.speech_bubble1}>
        <Image
          src="/speech_bubble_1.png"
          layout="responsive"
          alt="speech bubble"
          width={280}
          height={200}
        />
      </div>
      <div className={styles.speech_bubble2}>
        <Image
          src="/speech_bubble_2.png"
          layout="responsive"
          alt="speech bubble"
          width={247}
          height={165}
        />
      </div>
      <div className={styles.exclamation}>
        <Image
          src="/exclamation.svg"
          alt="exclamation point"
          width={225}
          height={225}
        />
      </div>

      {/** register button: */}
      <div className={styles.register_container}>
        <div className={styles.register_button}>
          <Link
            href="https://mybyte.ugahacks.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/buttons/register_button.svg"
              layout="responsive"
              alt="registration button"
              width={400}
              height={159.22}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Splash;
