import Image from "next/image";

/** Visual donor wall supplied by the design team. */
export default function IndividualDonors() {
  return (
    <section
      id="individual-donors"
      className="scroll-mt-nav w-full bg-paper"
      aria-labelledby="individual-donors-heading"
    >
      <h2 id="individual-donors-heading" className="sr-only">
        Individual Donors
      </h2>
      <Image
        src="/doners.png"
        alt=""
        width={1440}
        height={1024}
        sizes="100vw"
        className="h-auto w-full"
        aria-hidden="true"
      />
    </section>
  );
}
