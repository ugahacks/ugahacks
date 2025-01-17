"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Splash.module.css";
export default function Sponsors() {
  const sponsorLogos = [
    { src: "/Pinata.png", alt: "Pinata", url: "https://pinata.cloud/" },
    { src: "/HPCC.png", alt: "HPCC", url: "https://hpccsystems.com/" },
    { src: "/Truist.png", alt: "Truist", url: "https://truist.com" },
    { src: "/statefarm.png", alt: "Statefarm", url: "https://www.statefarm.com/" },
    { src: "/JPMorgan.png", alt: "JPMorgan", url: "https://www.jpmorgan.com/global" },
    { src: "/UGA.png", alt: "UGA", url: "https://uga.edu" },
  ];

  return (
    <div
      style={{
        position: "relative",
        marginTop: "-13rem", // Adjust for overlap with the Team section
        height: "125vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Image
        src="/SponsorsBackground.png"
        alt="Sponsors Background"
        layout="fill"
        objectFit="cover"
        style={{ zIndex: -1 }}

      />
      <div id="sponsors"
        style={{
          position: "absolute",
          top: "28rem", // Move the grid lower
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          width: "80%", // Center the content
        }}
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
                  <Image
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
            marginTop: "3rem",
            fontSize: "1rem",
            color: "#ffffff",
            fontWeight: "normal",
          }}
        >
          This event is supported in part by the President&apos;s Venture Fund through
          the generous gifts of University of Georgia donors as well as The University&apos;s <Link className="text-red-500" target="_Blank" href="https://research.uga.edu/">Office of Research</Link>.
        </p>
      </div>

      {/* Sponsorship Packet Button */}
      <div
        style={{
          position: "absolute",
          bottom: "1rem", // Position the button at the bottom
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div>
          <Link
            href="https://drive.google.com/file/d/1h_PVP-FCZ9dhL4ltjxBT2w7JFe-zN2c0/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: 'pink',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '30px',
              textDecoration: 'none',
              textAlign: 'center',
              fontSize: '16px',
              fontWeight: 'bold',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.2s ease-in-out',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Sponsorship Packet
          </Link>
        </div>

      </div>
    </div>
  );
}
