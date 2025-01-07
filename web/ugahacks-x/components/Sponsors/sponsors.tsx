"use client";

import React from "react";
import Image from "next/image";

export default function Sponsors() {
  const sponsorLogos = [
    { src: "/UGA.png", alt: "UGA" },
    { src: "/Truist.png", alt: "Truist" },
    { src: "/Pinata.png", alt: "Pinata" },
    { src: "/JPMorgan.png", alt: "JPMorgan" },
    { src: "/HPCC.png", alt: "HPCC" },
    null, // Placeholder
    null, // Placeholder
    null, // Placeholder
    null, // Placeholder
  ];

  return (
    <div
      id="sponsors"
      style={{
        position: "relative",
        marginTop: "-17rem", // Adjust for overlap with the Team section
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
      <div
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
          {sponsorLogos.map((logo, index) => (
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
            >
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
            </div>
          ))}
        </div>
        {/* Supporting Text */}
        <p
          style={{
            marginTop: "4rem",
            fontSize: "1rem",
            color: "#ffffff",
            fontWeight: "normal",
          }}
        >
          This event is supported in part by the President's Venture Fund through
          the generous gifts of University of Georgia donors.
        </p>
      </div>

        {/* Sponsorship Packet Button */}
      <div
        style={{
          position: "absolute",
          bottom: "5rem", // Position the button at the bottom
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <a
          href="https://ugahacks.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "1rem 3.5rem",
            backgroundColor: "#FFB6C1", // Light pink
            color: "#000", // Black text
            fontSize: "1.2rem",
            fontWeight: "bold",
            borderRadius: "30px", // Rounded corners
            textDecoration: "none",
            transition: "background-color 0.3s",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#ff8aa5")
          } // Hover effect
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#FFB6C1")
          }
        >
          Sponsorship Packet
        </a>
      </div>
    </div>
  );
}
