import { ReactElement } from "react";
import Countdown from "./Countdown";
import styles from "../../styles/splash.module.css";
import Image from 'next/image'
import mlh_badge from '../../public/mlh-trust-badge-2022-blue.svg'

export function Splash(): ReactElement {
  return (
    <div className={styles.body}>
      <a
        id="mlh-trust-badge"
        href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=blue"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.mlh_trust_badge}
      >
        <Image
          src={mlh_badge}
          alt="Major League Hacking 2022 Hackathon Season"
        />
      </a>
      {/* <div className={styles.greyTop}>
        <Countdown />
      </div> */}
      <div className={styles.border}>
        <div className={styles.main}></div>
      </div>
    </div>
  );
}

export default Splash;
