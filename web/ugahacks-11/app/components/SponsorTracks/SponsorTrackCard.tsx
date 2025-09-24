import SponsorLogo from "./SponsorLogo";
import SponsorTrackDescription from "./SponsorTrackDescription";

interface SponsorTrackCardProps {
  logo: string;
  title: string;
  description: string;
}

const SponsorTrackCard: React.FC<SponsorTrackCardProps> = ({
  logo,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center text-center ">
      <div className="relative mb-4">
        <SponsorLogo imagePath={logo} size={375} />
        {/* Track Title */}
        <h3 className="text-3xl font-semibold mt-4 text-black font-amarante">
          {title}
        </h3>
        <SponsorTrackDescription text={description} />
      </div>
    </div>
  );
};

export default SponsorTrackCard;
