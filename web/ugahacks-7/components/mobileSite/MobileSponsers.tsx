import React, { ReactElement } from "react";
import MobileSponsersImg from "./MobileSponsersImg";
import styles from "../../styles/MobileSponsors.module.css";

export { MobileSponsors };
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
// const Major League Hacking


function MobileSponsors(): ReactElement {
    return (
        <>
                <section className={styles.section}>
                    <div className={styles.sponsors_container}>
                        <div className={styles.tier5}>
                            <MobileSponsersImg
                                image={ncr}
                                alt="NCR logo"
                                tier="tier5"
                                link="https://www.hackathon.ncrcloud.com/"
                                width="400px"
                                height="180px"
                            />
                        </div>
                        <div className={styles.tier4}>
                            <MobileSponsersImg
                                image={blackrock}
                                alt="BlackRock logo"
                                tier="tier4"
                                link="https://careers.blackrock.com/early-careers/"
                            />
                        </div>
                        <div className={styles.tier3}>
                            <MobileSponsersImg
                                image={tsys}
                                alt="TSYS logo"
                                tier="tier3"
                                link="https://tsys.com/"
                            />
                        </div>
                            <div className={styles.tier2}>
                                <MobileSponsersImg
                                    image={capitalone}
                                    alt="Capital One logo"
                                    tier="tier2"
                                    link="https://www.capitalone.com/"
                                />
                            </div>
                            <div className={styles.tier2}>
                                <MobileSponsersImg
                                    image={statefarm}
                                    alt="State Farm logo"
                                    tier="tier2"
                                    link="https://www.statefarm.com/careers"
                                />
                            </div>
                            <div className={styles.tier2}>
                                <MobileSponsersImg
                                    image={deloitte}
                                    alt="Deloitte logo"
                                    tier="tier2"
                                    link="https://www2.deloitte.com/us/en.html"
                                />
                            </div>
                            <div className={styles.tier2}>
                                <MobileSponsersImg
                                    image={figma}
                                    alt="Figma logo"
                                    tier="tier2"
                                    link="https://www.figma.com/education/students/"
                                />
                            </div>
                            <div className={styles.tier2}>
                                <MobileSponsersImg
                                    image={credera}
                                    alt="Credera logo"
                                    tier="tier2"
                                    link="https://www.credera.com/"
                                />
                            </div>
                            <div className={styles.tier1}>
                                <MobileSponsersImg
                                    image={aws}
                                    alt="AWS logo"
                                    tier="tier1"
                                    link=""
                                />
                            </div>
                            <div className={styles.ugacombologo} >
                                <MobileSponsersImg
                                    image={ugacombo}
                                    alt="UGA Funding Sources logo"
                                    tier="tier1"
                                    link="https://www.cs.uga.edu/"
                                />
                            </div>
                            <div className={styles.tier1}>
                                <MobileSponsersImg
                                    image={digitalocean}
                                    alt="Digital Ocean logo"
                                    tier="tier1"
                                    link="https://try.digitalocean.com/developer-cloud/"
                                />
                            </div>
                            <div className={styles.tier1}>
                                <MobileSponsersImg
                                    image={stickermule}
                                    alt="Stickermule logo"
                                    tier="tier1"
                                    link="https://www.stickermule.com/"
                                />
                            </div>
                            <div className={styles.tier1}>
                                <MobileSponsersImg
                                    image={echo3d}
                                    alt="Echo3D logo"
                                    tier="tier1"
                                    link="https://www.echo3d.co/"
                                />
                        </div>
                    </div>
                </section>
        </>
    );
};

export default MobileSponsors