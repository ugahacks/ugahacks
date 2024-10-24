import Image from "next/image";
export default function SchedulePage() {
    return (
        <div style={{ marginTop: '-110px' }}> {/* Adjust value as needed */}
            <Image 
            src="/schedule_final.svg"
            alt="Schedule image"
            width={1920}
            height={1080}
            />
        </div>
        );
}
