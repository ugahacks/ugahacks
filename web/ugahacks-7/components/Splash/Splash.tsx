import { ReactElement } from "react";
import Countdown from "./Countdown";
import styles from "../../styles/splash.module.css";

export function Splash(): ReactElement {
  return (
    <div className={styles.body}>
      <div className={styles.greyTop}>
        <Countdown />
      </div>
      <div className={styles.border}>
        <div className={styles.main}>
        </div>
      </div>
    </div>
  );
}

export default Splash;
