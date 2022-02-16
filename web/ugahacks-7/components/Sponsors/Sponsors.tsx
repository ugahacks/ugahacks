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
const deloitte: string = "/icons/SponsorsImages/images/sponsorlogos/deloitte.svg";
const credera: string = "/icons/SponsorsImages/images/sponsorlogos/credera.png";

// tier 1/partners
const ugacombo: string = "/icons/SponsorsImages/images/sponsorlogos/uga-combo.png";
const digitalocean: string = "/icons/SponsorsImages/images/sponsorlogos/DigitalOcean.svg";
const aws: string = "/icons/SponsorsImages/images/sponsorlogos/aws.png";
const echo3d = "/icons/SponsorsImages/images/sponsorlogos/echo3d.png";
const stickermule: string = "/icons/SponsorsImages/images/sponsorlogos/stickermule.svg";
const mlh: string = "/icons/SponsorsImages/images/sponsorlogos/mlh-logo-black.png";

    
const Sponsors = (): ReactElement => {
    
    return (
        <>
          <div>
            <Window
              windowTitle="Sponsors"
              windowType="sponsors"
              showTopBarButtons
              width="60vw"
              height="auto"
            />
          </div>
        </>
      );
}

function sponsors(): ReactElement {
    return (
        <div>
            <ul className="tree-view">
                <li className={styles.section}>
                    <div className={styles.sponsors_container}>
                        <div className={styles.tier5}>
                            <SponsorLogo
                                image={ncr}
                                alt="NCR logo"
                                tier="tier5"
                                link="https://www.hackathon.ncrcloud.com/"
                            />
                        </div>
                        <div className={styles.tier4}>
                            <SponsorLogo
                                image={blackrock}
                                alt="BlackRock logo"
                                tier="tier4"
                                link="https://careers.blackrock.com/early-careers/"
                            />
                        </div>
                        <div className={styles.tier3}>
                            <SponsorLogo
                                image={tsys}
                                alt="TSYS logo"
                                tier="tier3"
                                link="https://tsys.com/"
                            />
                        </div>
                        <div className={styles.tier_container}>
                            <div className={styles.tier2}>
                                <SponsorLogo
                                    image={capitalone}
                                    alt="Capital One logo"
                                    tier="tier2"
                                    link="https://www.capitalone.com/"
                                />
                            </div>
                            <div className={styles.tier2}>
                                <SponsorLogo
                                    image={statefarm}
                                    alt="State Farm logo"
                                    tier="tier2"
                                    link="https://www.statefarm.com/careers"
                                />
                            </div>
                            <div className={styles.tier2}>
                                <SponsorLogo
                                    image={deloitte}
                                    alt="Deloitte logo"
                                    tier="tier2"
                                    link="https://www2.deloitte.com/us/en.html"
                                />
                            </div>
                            <div className={styles.tier2}>
                                <SponsorLogo
                                    image={figma}
                                    alt="Figma logo"
                                    tier="tier2"
                                    link="https://www.figma.com/education/students/"
                                />
                            </div>
                            <div className={styles.tier2}>
                                <SponsorLogo
                                    image={credera}
                                    alt="Credera logo"
                                    tier="tier2"
                                    link="https://www.credera.com/"
                                />
                            </div>
                        </div>
                        <div className={styles.tier_container}>
                            <div className={styles.tier1}>
                                <SponsorLogo
                                    image={aws}
                                    alt="AWS logo"
                                    tier="tier1"
                                    link="https://aws.amazon.com/"
                                />
                            </div>
                            <div className={styles.ugacombologo} >
                                <SponsorLogo
                                    image={ugacombo}
                                    alt="UGA Funding Sources logo"
                                    tier="tier1"
                                    link="https://www.cs.uga.edu/"
                                />
                            </div>
                            <div className={styles.tier1}>
                                <SponsorLogo
                                    image={digitalocean}
                                    alt="Digital Ocean logo"
                                    tier="tier1"
                                    link="https://try.digitalocean.com/developer-cloud/"
                                />
                            </div>
                            <div className={styles.tier1}>
                                <SponsorLogo
                                    image={stickermule}
                                    alt="Stickermule logo"
                                    tier="tier1"
                                    link="https://www.stickermule.com/"
                                />
                            </div>
                            <div className={styles.tier1}>
                                <SponsorLogo
                                    image={echo3d}
                                    alt="Echo3D logo"
                                    tier="tier1"
                                    link="https://www.echo3d.co/"
                                />
                            </div>
                            <div className={styles.tier1}>
                                <SponsorLogo
                                    image={mlh}
                                    alt="Major League Hacking logo"
                                    tier="tier1"
                                    link="https://mlh.io/"
                                />
                            </div>
                        </div>
                    <p className={styles.italicized}>
                    This event is supported in part by the President&apos;s Venture Fund through the generous gifts of the University of Georgia donors.
                    </p>
                    <button className={styles.packet} >
                        <a href="/sponsorship-packet">Sponsorship Packet</a>
                    </button>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Sponsors;