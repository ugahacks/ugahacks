import Image from "next/image";
import React from "react";
// Props interface
interface EventCardProps {
  year: number;
  title: string;
  content: React.ReactNode;
  imageUrl: string;
}

const EventCard: React.FC<EventCardProps> = ({
  year,
  title,
  content,
  imageUrl,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg shadow-red-500/10 w-64 max-w-xs sm:w-120 sm:max-w-none overflow-hidden">
      <header
        className="bg-red-500 p-2 sm:p-0 m-0 flex items-center"
        style={{ clipPath: "polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%)" }}
      >
        <div className="bg-red-700 p-2 sm:p-4">
          <p className="text-white text-xl sm:text-3xl font-bold">{year}</p>
        </div>
        <h3 className="text-white text-lg sm:text-2xl font-bold pl-2 sm:pl-5">
          {title}
        </h3>
      </header>
      <div className="p-3 sm:p-6">
        <div className="text-gray-300 text-sm sm:text-base leading-relaxed [&_a]:text-red-400 [&_a]:font-bold hover:[&_a]:underline">
          {content}
        </div>
      </div>
      <Image
        src={imageUrl}
        width={400}
        height={300}
        alt={title}
        className="w-full h-28 sm:h-40 object-cover"
      />
    </div>
  );
};

export default EventCard;
