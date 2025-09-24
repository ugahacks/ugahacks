interface SponsorCardProps {
 imageUrl: string;
 href: string;
}


export default function SponsorCard({ imageUrl, href }: SponsorCardProps) {
 return (
   <div
     className="block w-full h-16 md:h-36 bg-white rounded-2xl md:rounded-3xl hover:scale-105 transition-transform duration-200"
   >
   </div>
 );
}
