import React, { ReactElement } from "react";
import SponsorLogo from "./SponsorLogo";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

// const ncr: string = "/icons/SponsorsImages/images/sponsorlogos/NCR.png";
// const digitalOcean: string =
//   "/icons/SponsorsImages/images/sponsorlogos/DigitalOcean.svg";
// const stickerMule: string =
//   "/icons/SponsorsImages/images/sponsorlogos/stickermule.svg";
// const blackRock: string =
//   "/icons/SponsorsImages/images/sponsorlogos/blackrock.svg";
// const echoAR: string = "/icons/SponsorsImages/images/sponsorlogos/echoAR.png";
// const entreProg: string = "/icons/SponsorsImages/images/sponsorlogos/ENTR.png";
// const equifax: string = "/icons/SponsorsImages/images/sponsorlogos/equifax.png";
// const statefarm: string =
//   "/icons/SponsorsImages/images/sponsorlogos/statefarm.png";
// const capitalone: string =
//   "/icons/SponsorsImages/images/sponsorlogos/capitalone.png";
// const tsys: string = "/icons/SponsorsImages/images/sponsorlogos/tsys.png";
// const uga: string = "/icons/SponsorsImages/images/sponsorlogos/uga-combo.png";
// const credera: string = "/icons/SponsorsImages/images/sponsorlogos/credera.png";
// const deloitte: string =
//   "/icons/SponsorsImages/images/sponsorlogos/deloitte.svg";
// const figma: string = "/icons/SponsorsImages/images/sponsorlogos/figma.svg";
// const aws: string = "/icons/SponsorsImages/images/sponsorlogos/aws.png";
// const acm: string = "/icons/SponsorsImages/images/sponsorlogos/acm.svg";

const mckenneys: string =
  "/icons/SplashImages/images/McK_Black_Logo_Horiz-Lg.svg";
const devfest: string =
  "/icons/SplashImages/images/DevFest-Logo-2022-LightBackground.png";

const CustomButton = withStyles(
  {
    root: {
      backgroundColor: "#A6BDA4",
      paddingLeft: "55px",
      paddingRight: "55px",
      fontWeight: 600,
      fontSize: "1.1em",
      fontFamily: "Poppins",
      borderRadius: "50px",
      marginTop: "25px",
      marginBottom: "20px",
      "&:hover": {
        backgroundColor: "#ebdaa8",
        color: "#8A6851",
      },
      "@media (max-width:480px)": {
        width: "100%",
        fontSize: "1em",
        paddingRight: "10px",
        paddingLeft: "10px",
      },
    },
  },
  { index: 1 }
)(Button);

function Sponsors(): ReactElement {
  return (
    <section className="section sponsors-section" id="sponsors">
      <div className="sponsors-container">
        <h2 id="sponsorship-title">Sponsorship</h2>
        {
          <div className="logo-container">
            <SponsorLogo
              id="mckenneys"
              image={mckenneys}
              alt="mckenneys"
              tier="partner"
              link="https://www.mckenneys.com/"
            />
            <SponsorLogo
              id="devfest"
              image={devfest}
              alt="devfest"
              tier="partner"
              link="https://gdg.community.dev/gdg-athens-1/"
            />
          </div>
        }
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
