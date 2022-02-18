import React, { ReactElement, useState } from "react";
import styles from '../../styles/NavBar.module.css';
import NavIconButton from './NavIconButton';
import About from '../../components/About';
import FAQ from '../../components/FAQ';
import Schedule from '../../components/Schedule';
import Sponsors from '../../components/Sponsors';



function NavBar(props: any): ReactElement {
    const [active, setActive] = useState("About");

    return (
      <div className={styles.flex_container}>
        <div className={styles.navbar_container}>
          <NavIconButton
            name="ABOUT"
            myClick={() => {
              setActive("About");
            }}
          />
          <NavIconButton
            name="SCHEDULE"
            myClick={() => setActive("Schedule")}
          />
          <NavIconButton name="FAQ" myClick={() => setActive("FAQ")} />
          <NavIconButton
            name="SPONSORS"
            myClick={() => setActive("Sponsors")}
          />
          <NavIconButton
            name="BYTECOIN"
            myClick={() => {
                window.open(
                  "https://bytecoin-kehjkmr6ua-ue.a.run.app/",
                  "_blank"
                );
            }}
          />
        </div>
        <div className={styles.window_container}>
          {active === "About" && <About stateChanger={setActive} />}
          {active === "FAQ" && <FAQ stateChanger={setActive} />}
          {active === "Schedule" && <Schedule stateChanger={setActive} />}
          {active === "Sponsors" && <Sponsors stateChanger={setActive} />}
        </div>
      </div>
    );
}

export default NavBar;