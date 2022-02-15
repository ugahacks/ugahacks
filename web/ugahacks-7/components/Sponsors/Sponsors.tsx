import React, { ReactElement } from "react";
import SponsorLogo from "./SponsorLogo";
import Window from "../Window";
import styles from "../../styles/Sponsors.module.css";

export { sponsors };
// tier 5
const ncr: string = "/icons/SponsorsImages/images/sponsorlogos/NCR.png";

// tier 4
const blackrock: string = "/icons/SponsorsImages/images/sponsorlogos/blackrock.svg";

// tier 3
const tsys: string = "/icons/SponsorsImages/images/sponsorlogos/tsys.png";

// tier 2
const capitalone: string = "/icons/SponsorsImages/images/sponsorlogos/capitalone.png";
const statefarm: string = "/icons/SponsorsImages/images/sponsorlogos/statefarm.png";
const figma: string = "/icons/SponsorsImages/images/sponsorlogos/figma.svg";
// const deloitte: string = "/icons/SponsorsImages/images/sponsorlogos/";
const credera: string = "/icons/SponsorsImages/images/sponsorlogos/credera.png";

// tier 1/partners
const ugacombo: string = "/icons/SponsorsImages/images/sponsorlogos/uga-combo.png";
const digitalocean: string = "/icons/SponsorsImages/images/sponsorlogos/DigitalOcean.svg";
// const AWS
// const Echo3D
const stickermule: string = "/icons/SponsorsImages/images/sponsorlogos/DigitalOcean.svg";
// const Major League Hacking

    
const Sponsors = (): ReactElement => {
    
    return (
        <>
          <div>
            <Window
              windowTitle="Sponsors"
              windowType="sponsors"
              showTopBarButtons
              width="70vw"
              height="70vh"
            />
          </div>
        </>
      );
}

function sponsors(): ReactElement {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.sponsors_container}>
                    <div>Sponsors</div>
                    <SponsorLogo
                        image={ncr}
                        alt="NCR logo"
                        tier="5"
                        link="https://www.ncr.com/"
                    />
                    <div className={styles.logo_container}>
                        <SponsorLogo
                            image={blackrock}
                            alt="BlackRock logo"
                            tier="4"
                            link="https://careers.blackrock.com/early-careers/"
                        />
                        <SponsorLogo
                            image={tsys}
                            alt="TSYS logo"
                            tier="3"
                            link="https://tsys.com/"
                        />
                        <SponsorLogo
                            image={capitalone}
                            alt="Capital One logo"
                            tier="3"
                            link="https://www.capitalone.com/"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};



export default Sponsors;