import Image from "next/image";
import React from "react";
interface SponsorLogoProps {
  imagePath: string;
  alt?: string;
  size?: number;
}

const SponsorLogo: React.FC<SponsorLogoProps> = ({
  imagePath,
  alt = "Sponsor Logo",
  size = 300,
}) => {
  return (
    <div
      className="relative flex items-center justify-center bg-center bg-cover"
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
        <Image
          src={imagePath}
          alt={alt}
          width={size * 0.6}
          height={size * 0.6}
          className="w-full h-full rounded-full object-contain p-2"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default SponsorLogo;
