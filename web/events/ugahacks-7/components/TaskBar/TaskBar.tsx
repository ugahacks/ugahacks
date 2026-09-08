import { ReactElement } from "react";
import styles from "../../styles/TaskBar.module.css";

export function TaskBar(): ReactElement {
  return (
    <div className={styles.startBar}>
      <div className={styles.startButton_container}>
        <a href="https://hopin.com/events/ugahacks-7" target="_blank" rel="noreferrer">
          <button type="button" className={styles.startButton}>
          </button>
        </a>
      </div>
      <div className={styles.time}>
        Reimagine your world one pixel at a time.
      </div>
    </div>
  );
}

export default TaskBar;
