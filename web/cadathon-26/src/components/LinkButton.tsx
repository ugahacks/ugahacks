import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren<LinkProps> {
  invert?: boolean;
}

export default function LinkButton({ invert, ...linkProps }: Props) {
  return (
    <Link
      className="flex items-center gap-[1ch] rounded-md border-2 border-black bg-pink-500 pr-[1.1em] pl-[1em] font-tagline leading-loose font-semibold text-black italic shadow-brutal transition duration-200 hover:scale-105 hover:drop-shadow-lg hover:drop-shadow-black/40 data-invert:bg-zinc-950 data-invert:text-pink-500 data-invert:shadow-pink-300"
      data-invert={invert || undefined}
      {...linkProps}
    />
  );
}
