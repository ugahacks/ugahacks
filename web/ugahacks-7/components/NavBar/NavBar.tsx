import React, { ReactElement, useState } from "react";
import styles from '../../styles/NavBar.module.css';
import NavIconButton from './NavIconButton';
import About from '../../components/About';


function NavBar(props: any): ReactElement {
    const [active, setActive] = useState("test");

    return (
        <div className={styles.flex_container}>
            <div>
            <NavIconButton name="SPLASH" myClick={() => setActive("About")}/>
            <NavIconButton name="ABOUT" myClick={() => setActive("About")}/>
            <NavIconButton name="SCHEDULE" myClick={() => setActive("About")}/>
            <NavIconButton name="FAQ" myClick={() => setActive("About")}/>
            <NavIconButton name="SPONSORS" myClick={() => setActive("About")}/>
            </div>
            <div>
                {active === "About" && <About />}
            </div>
        </div>
    )
}

export default NavBar;