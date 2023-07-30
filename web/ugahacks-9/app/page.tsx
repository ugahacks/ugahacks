import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div></div>
        <div>
          <a
            href="https://ugahacks.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By UGAHacks Team{" "}
            <Image
              src="/hacks9Byte.svg"
              alt="Byte Logo"
              className={styles.vercelLogo}
              width={100}
              height={48}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/hacks9FlyingByte.svg"
          alt="Byte Logo"
          width={180}
          height={270}
          priority
        />
      </div>
      <div>
        <p>
          <code className={styles.title}>UGAHacks 9</code>
        </p>
        <p>
          <code className={styles.subtitle}>Coming soon in 2024! 👀</code>
        </p>
      </div>

      <div className={styles.grid}>
        <a
          href="https://ugahacks.com/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Our Team <span>-&gt;</span>
          </h2>
          <p>SHAWN IS AWESOME 😘🥰</p>
        </a>

        <a
          href="https://8.ugahacks.com/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            UGAHacks 8<span>-&gt;</span>
          </h2>
          <p>Check out our previous year&apos;s hackathon!</p>
        </a>

        <a
          href="https://make8.ugahacks.com/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Makeathon 2022<span>-&gt;</span>
          </h2>
          <p>Check out our first makeathon last year!</p>
        </a>

        <a
          href="https://mybyte.ugahacks.com/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Register! <span>-&gt;</span>
          </h2>
          <p>Registration will open soon!</p>
        </a>
      </div>
    </main>
  );
}
