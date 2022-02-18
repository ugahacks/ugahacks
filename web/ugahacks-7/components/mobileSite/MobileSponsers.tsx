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
const mlh: string = "/icons/SponsorsImages/images/sponsorlogos/mlh-logo-black.png";
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
                                link="https://www.ncr.com/careers"
                                width="300px"
                                height="100px"
                            />
                        </div>
                        <div className={styles.tier4}>
                            <MobileSponsersImg
                                image={blackrock}
                                alt="BlackRock logo"
                                tier="tier4"
                                link="https://careers.blackrock.com/early-careers/"
                                width="300px"
                                height="180px"

                            />
                        </div>
                        <div className={styles.tier3}>
                            <MobileSponsersImg
                                image={tsys}
                                alt="TSYS logo"
                                tier="tier3"
                                link="https://tsys.com/"
                                width="300px"
                                height="180px"
                            />
                        </div>
                            <div className={styles.tier2}>
                                <MobileSponsersImg
                                    image={capitalone}
                                    alt="Capital One logo"
                                    tier="tier2"
                                    link="https://www.capitalone.com/"
                                width="320px"
                                height="110px"
                                />
                            </div>
                            <div className={styles.tier2}>
                                <MobileSponsersImg
                                    image={statefarm}
                                    alt="State Farm logo"
                                    tier="tier2"
                                    link="https://www.statefarm.com/careers"
                                width="500px"
                                height="80px"
                                />
                            </div>
                            <div className={styles.deloitte}>
                                <MobileSponsersImg
                                    image={deloitte}
                                    alt="Deloitte logo"
                                    tier="tier2"
                                    link="https://www2.deloitte.com/us/en.html"
                                width="400px"
                                height="80px"
                                />
                            </div>
                            <div id={styles.figma} className={styles.tier2figma}>
                                <MobileSponsersImg
                                    image={figma}
                                    alt="Figma logo"
                                    tier="tier2"
                                    link="https://www.figma.com/education/students/"
                                width="300px"
                                height="180px"
                                />
                            </div>
                            <div className={styles.tier2}>
                                <MobileSponsersImg
                                    image={credera}
                                    alt="Credera logo"
                                    tier="tier2"
                                    link="https://www.credera.com/"
                                width="300px"
                                height="180px"
                                />
                            </div>
                            <div className={styles.aws}>
                                <MobileSponsersImg
                                    image={aws}
                                    alt="AWS logo"
                                    tier="tier1"
                                    link="https://aws.amazon.com/"
                                width="170px"
                                height="80px"
                                />
                            </div>
                            <div className={styles.ugacombologo} >
                                <MobileSponsersImg
                                    image={ugacombo}
                                    alt="UGA Funding Sources logo"
                                    tier="tier1"
                                    link="https://www.cs.uga.edu/"
                                width="400px"
                                height="180px"
                                />
                            </div>
                            <div className={styles.tier1}>
                                <MobileSponsersImg
                                    image={digitalocean}
                                    alt="Digital Ocean logo"
                                    tier="tier1"
                                    link="https://try.digitalocean.com/developer-cloud/"
                                width="300px"
                                height="180px"
                                />
                            </div>
                            <div className={styles.tier1}>
                                <MobileSponsersImg
                                    image={stickermule}
                                    alt="Stickermule logo"
                                    tier="tier1"
                                    link="https://www.stickermule.com/"
                                width="300px"
                                height="180px"
                                />
                            </div>
                            <div className={styles.tier1}>
                                <MobileSponsersImg
                                    image={echo3d}
                                    alt="Echo3D logo"
                                    tier="tier1"
                                    link="https://www.echo3d.co/"
                                width="300px"
                                height="180px"
                                />
                                </div>
                            <div className={styles.mlh}>
                                <MobileSponsersImg
                                    image={mlh}
                                    alt="mlh logo"
                                    tier="tier1"
                                    link="https://www.ncr.com/careers"
                                width="200px"
                                height="70px"
                                />


                        </div>
                        <p className={styles.supported}>This event is supported in part by the President&apos;s Venture Fund and the Diversity Fund through the generous gifts of the University of Georgia donors.
</p>
                    </div>
                </section>
        </>
    );
};

export default MobileSponsors