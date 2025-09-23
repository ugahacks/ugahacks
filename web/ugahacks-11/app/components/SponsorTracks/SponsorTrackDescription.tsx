import React from "react";

interface SponsorTrackDescriptionProps {
  text: string;
}

const SponsorTrackDescription: React.FC<SponsorTrackDescriptionProps> = ({
  text,
}) => {
  return (
    <div className="bg-[#D9D9D9] rounded-3xl shadow drop-shadow-lg p-2 max-w-3xl mx-auto font-encode-sans mt-6 py-4 h-48 flex items-center justify-center">
      <p className="text-center text-l text-track-card-text leading-relaxed font-medium">
        {text}
      </p>
    </div>
  );
};

export default SponsorTrackDescription;
