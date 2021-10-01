import styles from '../styles/splash.module.css'
import CountDownTimer from './CountdownTimer';

export function Splash() {

const hoursMinSecs={hours:0, minutes:0, seconds:10}

    return (
        <div className={styles.body}>
            <div className={styles.greyTop}></div>
            <div className={styles.border}>
                <div className={styles.main}>
                    <a href="https:my.ugahacks.com/apply"><button className={styles.redirectBtn}></button></a>
                    <CountDownTimer hoursMinSecs={hoursMinSecs}/>
                </div>
            </div>
        </div>
    )

}

export default Splash;
