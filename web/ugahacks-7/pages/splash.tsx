//import '../styles/globals.css'
import styles from '../styles/splash.module.css'

export function Splash() {
    return (
        <div>
        <div className={styles.greyTop}></div>
        <div className={styles.border}>
            <div className={styles.main}>
                <a href="https:my.ugahacks.com/apply"><button className={styles.redirectBtn}></button></a>
            </div>
        </div>
        </div>
    )

}

export default Splash;
