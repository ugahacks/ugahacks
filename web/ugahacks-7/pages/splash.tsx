import Countdown from './countdown'
import styles from '../styles/splash.module.css'

export function Splash() {
    return (
        <div className={styles.body}>
            <div className={styles.greyTop}><Countdown/></div>
            <div className={styles.border}>
                <div className={styles.main}>
                    <a href="https:my.ugahacks.com/apply"><button className={styles.redirectBtn}></button></a>
                </div>
            </div>
        </div>
    )

}

export default Splash;
