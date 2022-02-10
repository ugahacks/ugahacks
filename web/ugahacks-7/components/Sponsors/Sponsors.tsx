import React, { ReactElement } from "react";
import SponsorLogo from "./SponsorLogo";

const ncr: string = "/icons/SponsorsImages/images/sponsorlogos/NCR.png";
const capitalone: string = "/icons/SponsorsImages/images/sponsorlogos/capitalone.png";
const toaster: string = "/icons/SponsorsImages/images/sponsorlogos/Toaster.png";

const sponsorList = [
    {
        name: "ncr",
        id: 0,
        image: "/icons/SponsorsImages/images/sponsorlogos/NCR.png",
        alt: "NCR logo"
    },
    {
        name: "capitalone",
        id: 1,
        image: "/icons/SponsorsImages/images/sponsorlogos/capitalone.png",
        alt: "Capital One"
    }
]
    


const Sponsors = (): ReactElement => {
    
    return (
        <section className="section sponsors-section" id="sponsors">
            <div className="sponsors-container">
                <h2>Sponsors</h2>
                    <div className="logo-container">
                        <SponsorLogo
                            image={toaster}
                            alt="NCR logo"
                            tier="mansion"
                            link="https://www.ncr.com/"
                        />
                        <SponsorLogo
                            image={capitalone}
                            alt="NCR logo"
                            tier="mansion"
                            link="https://www.ncr.com/"
                        />
                    </div>


            </div>
        </section>
    )
}

export default Sponsors;