import { ReactElement } from "react";
import styles from "../../styles/TaskBar.module.css";

export function TaskBar(): ReactElement {
  return (
    <div className={styles.startBar}>
      <div className={styles.startButton_container}>
        <button className={styles.startButton}>
        </button>
      </div>
      <div className={styles.time}>
        Reimagine your world one pixel at a time.
      </div>
    </div>
  );
}

export default TaskBar;
