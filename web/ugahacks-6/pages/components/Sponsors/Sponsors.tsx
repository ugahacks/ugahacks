import React, { ReactElement } from "react";
import SponsorLogo from "./SponsorLogo";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const ncr: string = "/icons/SponsorsImages/images/sponsorlogos/NCR.png";
const digitalOcean: string =
  "/icons/SponsorsImages/images/sponsorlogos/DigitalOcean.svg";
const stickerMule: string =
  "/icons/SponsorsImages/images/sponsorlogos/stickermule.svg";
const blackRock: string =
  "/icons/SponsorsImages/images/sponsorlogos/blackrock.svg";
const echoAR: string = "/icons/SponsorsImages/images/sponsorlogos/echoAR.png";
const entreProg: string = "/icons/SponsorsImages/images/sponsorlogos/ENTR.png";
const equifax: string = "/icons/SponsorsImages/images/sponsorlogos/equifax.png";
const statefarm: string =
  "/icons/SponsorsImages/images/sponsorlogos/statefarm.png";
const capitalone: string =
  "/icons/SponsorsImages/images/sponsorlogos/capitalone.png";
const tsys: string = "/icons/SponsorsImages/images/sponsorlogos/tsys.png";
const uga: string = "/icons/SponsorsImages/images/sponsorlogos/uga-combo.png";
const credera: string = "/icons/SponsorsImages/images/sponsorlogos/credera.png";
const acm: string = "/icons/SponsorsImages/images/sponsorlogos/acm.png";

const CustomButton = withStyles({
  root: {
    backgroundColor: "#fafafa",
    paddingLeft: "55px",
    paddingRight: "55px",
    fontWeight: 600,
    fontSize: "1.1em",
    fontFamily: "Poppins",
    borderRadius: "50px",
    marginTop: "25px",
    marginBottom: "20px",
    "@media (max-width:480px)": {
      width: "100%",
      fontSize: "1em",
      paddingRight: "10px",
      paddingLeft: "10px",
    },
  },
})(Button);

function Sponsors(): ReactElement {
  return (
    <section className="section sponsors-section" id="sponsors">
      <div className="sponsors-container">
        <h2>Sponsors</h2>
        <SponsorLogo
          image={ncr}
          alt="NCR logo"
          tier="mansion"
          link="https://www.ncr.com/"
        />
        <div className="logo-container">
          <SponsorLogo
            image={blackRock}
            alt="BlackRock"
            tier="penthouse"
            link="https://www.blackrock.com/corporate/about-us"
          />
          <SponsorLogo
            image={statefarm}
            alt="StateFarm"
            tier="apartment"
            link="https://www.statefarm.com/about-us"
          />
          <SponsorLogo
            image={capitalone}
            alt="Capital One"
            tier="apartment"
            link="https://campus.capitalone.com/"
          />
          <SponsorLogo
            image={tsys}
            alt="TSYS"
            tier="apartment"
            link="https://www.tsys.com/"
          />
          <SponsorLogo
            image={equifax}
            alt="Equifax"
            tier="doghouse"
            link="https://www.equifax.com/personal/"
          />
          <SponsorLogo
            image={entreProg}
            alt="UGA Entrepreneurship Program"
            tier="doghouse"
            link="https://www.terry.uga.edu/academics/entrepreneurship/index.php"
          />
          <SponsorLogo
            id="ugacombologo"
            image={uga}
            alt="UGA Department of Computer Science, Parents Leadership Council, Resident Hall Association, Student Government Association"
            tier="apartment"
            link="https://www.cs.uga.edu/"
          />
          <SponsorLogo
            image={credera}
            alt="Credera"
            tier="loft"
            link="https://www.credera.com/"
          />
        </div>
        <h2>Partners</h2>
        <div className="logo-container">
          <SponsorLogo
            image={digitalOcean}
            alt="Digital Ocean logo"
            tier="partner"
            link="https://www.digitalocean.com/"
          />
          <SponsorLogo
            image={echoAR}
            alt="echoAR Logo"
            tier="partner"
            link="https://www.echoar.xyz/"
          />
          <SponsorLogo
            image={stickerMule}
            alt="StickerMule"
            tier="partner"
            link="https://hackp.ac/mlh-stickermule-hackathons"
          />
          <SponsorLogo
            id="acm"
            image={acm}
            alt="ACM"
            tier="partner"
            link="https://uga.campuslabs.com/engage/organization/acm"
          />
        </div>
        <p>
          <i>
            This event is supported in part by the President&apos;s Venture Fund
            through the generous gifts of University of Georgia donors.
          </i>
        </p>
        <CustomButton
          variant="contained"
          size="large"
          href="/sponsorship-packet"
        >
          Sponsorship Packet
        </CustomButton>
      </div>
    </section>
  );
  // return (
  //   <section className='section sponsors-section' id="sponsors">
  //     <div className="sponsors-container">
  //       <div className="packet-text">
  //         <h2>Interested in sponsoring us?</h2>
  //         <p>By sponsoring UGAHacks, your company will have the opportunity to inspire new programmers while also reaching
  //         out to and recruiting the rising stars of the tech industry.</p>
  //         <CustomButton variant="contained" size="large" href="https://www.ugahacks.com/sponsorship-packet">See Our Sponsorship Packet</CustomButton>
  //         <br></br>
  //         <CustomButton variant="contained" size="large" href="mailto:sponsor@ugahacks.com">Contact our sponsorship team</CustomButton>
  //       </div>
  //     </div>
  //   </section>
  // );
}

export default Sponsors;
