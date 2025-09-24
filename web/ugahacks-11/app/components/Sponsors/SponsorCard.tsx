interface SponsorCardProps {
  imageUrl: string;
  href: string;
}


export default function SponsorCard({ imageUrl, href }: SponsorCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full h-16 md:h-36 bg-white rounded-2xl md:rounded-3xl hover:scale-105 transition-transform duration-200 overflow-hidden"
    >
      {/*eslint-disable @next/next/no-img-element */}

      < img
        src={imageUrl}
        alt="Sponsor logo"
        className="w-full h-full object-contain p-2 md:p-4"
      />
    </a>
  );
}
