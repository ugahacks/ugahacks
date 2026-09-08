import React from "react";

interface SponsorTrackDescriptionProps {
  text: string;
}

const SponsorTrackDescription: React.FC<SponsorTrackDescriptionProps> = ({
  text,
}) => {
  return (
    <div className="bg-[#D9D9D9] rounded-3xl text-sm shadow drop-shadow-lg max-w-3xl mx-auto font-encode-sans mt-4 py-2 min-h-[8rem] h-auto flex items-center justify-center text-black">
      {text}
    </div>
  );
};

export default SponsorTrackDescription;
