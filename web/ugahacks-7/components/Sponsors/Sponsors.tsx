import React, { ReactElement } from "react";
import SponsorLogo from "./SponsorLogo";

const ncr: string = "/icons/SponsorsImages/images/sponsorlogos/NCR.png";
const capitalone: string = "/icons/SponsorsImages/images/sponsorlogos/capitalone.png";
const toaster: string = "/icons/SponsorsImages/images/sponsorlogos/Toaster.png";

const Sponsors = (): ReactElement => {
    
    return (
        <section className="section sponsors-section" id="sponsors">
            <div className="sponsors-container">
                <h2>Sponsors</h2>
                <SponsorLogo
                    image={toaster}
                    alt="NCR logo"
                    tier="mansion"
                    link="https://www.ncr.com/"
                />
            </div>
        </section>
    )
}

export default Sponsors;