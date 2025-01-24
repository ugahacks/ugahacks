"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Splash.module.css";
export default function Sponsors() {
  const sponsorLogos = [
    { src: "/Pinata.png", alt: "Pinata", url: "https://pinata.cloud/" },
    { src: "/HPCC.png", alt: "HPCC", url: "https://hpccsystems.com/" },
    { src: "/Truist.png", alt: "Truist", url: "https://truist.com" },
    { src: "/statefarm.png", alt: "Statefarm", url: "https://www.statefarm.com/" },
    { src: "/JPMorgan.png", alt: "JPMorgan", url: "https://www.jpmorgan.com/global" },
    { src: "/github-logo.png", alt: "Github", url: "https://www.github.com" },
    { src: "/stand-out-stickers-logo.png", alt: "Stand Out Stickers", url: "https://www.standoutstickers.com/" },
    { src: "/ugaResearchLogo.png", alt: "UGA Office of Research", url: "https://research.uga.edu/" },
    { src: "/UGA.png", alt: "UGA", url: "https://uga.edu" },
  ];
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 798);
    };

    // Run once on mount
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.sponsorSection}
    >
      <img
        className={styles.sponsorContainer}
        src={mobile ? "/SponsorsBackground_mobile.png" : "/SponsorsBackground.png"}
        alt="Sponsors Background"
      />
      <div id="sponsors"
        className={styles.sponsorGrid}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 3x3 grid
            gap: "1.5rem",
            justifyContent: "center",
          }}
        >
          {sponsorLogos.map((logo, index, url) => (
            <div
              key={index}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)", // Light grey background
                borderRadius: "10px",
                padding: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100px", // Fixed height for consistency
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              className="hover:animate-pulse"
            >
              <Link href={logo.url} target="_blank" rel="noopener noreferrer">
                {logo ? (
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={150} // Adjust logo size
                    height={80}
                    style={{ objectFit: "contain" }}
                  />
                ) : (
                  <div
                    style={{
                      width: "80%",
                      height: "60%",
                      backgroundColor: "rgba(0, 0, 0, 0.1)", // Placeholder background
                      borderRadius: "5px",
                    }}
                  ></div>
                )}
              </Link>
            </div>
          ))}
        </div>
        {/* Supporting Text */}
        <p
          style={{
            marginTop: "1rem",
            fontSize: "1rem",
            color: "#ffffff",
            fontWeight: "normal",
            textAlign: "center",
          }}
        >
          This event is supported in part by the President&apos;s Venture Fund through
          the generous gifts of University of Georgia donors.
        </p>
      </div>
      {/* Sponsorship Packet Button */}
      <div
        className="absolute bottom-2 sm:bottom-48 md:bottom-2 left-1/2 transform -translate-x-1/2 text-center"
      >
        <div>
          <Link
            href="https://drive.google.com/file/d/1h_PVP-FCZ9dhL4ltjxBT2w7JFe-zN2c0/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sponsorshipButton}
          >
            Sponsorship Packet
          </Link>
        </div>

      </div>
    </div>
  );
}
