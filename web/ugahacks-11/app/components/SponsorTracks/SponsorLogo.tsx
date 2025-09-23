import React from "react";

interface SponsorLogoProps {
  imagePath: string;
  alt?: string;
  size?: number; // Optional: allows resizing the whole asset
}

const SponsorLogo: React.FC<SponsorLogoProps> = ({
  imagePath,
  alt = "Sponsor Logo",
  size = 300,
}) => {
  return (
    <div
      className="relative flex items-center justify-center overflow-visible bg-center bg-cover"
      style={{
        width: size,
        height: size,
        backgroundImage: 'url("/sponsorbackground.png")',
      }}
    >
      <div
        className="flex items-center justify-center rounded-full bg-white shadow"
        style={{
          width: size * 0.6,
          height: size * 0.6,
        }}
      >
        <img
          src={imagePath}
          alt={alt}
          className="rounded-full bg-white object-contain"
          style={{
            width: "80%",
            height: "80%",
          }}
        />
      </div>
    </div>
  );
};

export default SponsorLogo;
