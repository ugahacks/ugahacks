import React, { ReactElement, useState } from "react";
import styles from '../../styles/NavBar.module.css';
import NavIconButton from './NavIconButton';
import About from '../../components/About';
import FAQ from '../../components/FAQ';
import Schedule from '../../components/Schedule';
import Sponsors from '../../components/Sponsors';


function NavBar(props: any): ReactElement {
    const [active, setActive] = useState("About");
    const [opened, setOpened] = useState(0);

    return (
        <div className={styles.flex_container}>
            <div className={styles.navbar_container}>
            <NavIconButton name="ABOUT" myClick={() => { setActive("About"); }}/>
            <NavIconButton name="SCHEDULE" myClick={() => setActive("Schedule")}/>
            <NavIconButton name="FAQ" myClick={() => setActive("FAQ")}/>
            <NavIconButton name="SPONSORS" myClick={() => setActive("Sponsors")}/>
            </div>
            <div className={styles.window_container}>
                {active === "About" && <About />}
                {active === "FAQ" && <FAQ/>}
                {active === "Schedule" && <Schedule />}
                {/* {active === "Sponsors" && <Sponsors/>} */}
            </div>
        </div>
    )
}

export default NavBar;