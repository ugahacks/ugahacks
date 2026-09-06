import { getImageProps } from "next/image";
import type { CSSProperties } from "react";
import bg from "~/assets/bg.webp";

/**
 * The asphalt photo painted behind Landing, FAQ, and Footer. As a CSS
 * background it can't be an <Image>, which is how it once shipped as an
 * unoptimized 2.4MB PNG -- so this routes the same file through the
 * optimizer by hand: getImageProps yields the exact srcSet <Image> would
 * have rendered, remapped below into a CSS image-set(). Quality sits well
 * under the default 75 because the photo is always behind a dark scrim and
 * the grain texture; 50 must stay listed in next.config's images.qualities.
 */
const {
  props: { srcSet },
} = getImageProps({ src: bg, alt: "", quality: 50 });

const candidates = (srcSet ?? "").split(", ").map((entry) => {
  const [url, dpr] = entry.split(" ");
  return { url, dpr };
});

/**
 * Preload hints for the one section where the backdrop is the LCP element
 * (Landing). imageSrcSet uses the same DPR candidates as the image-set()
 * below, so the preloaded URL always matches the one CSS resolves.
 */
export const PHOTO_BACKDROP_PRELOAD = {
  href: candidates[0]?.url ?? bg.src,
  imageSrcSet: srcSet,
};

/** Drop-in replacement for `style={{ backgroundImage: url(bg.src) }}`. */
export const PHOTO_BACKDROP_STYLE: CSSProperties = {
  backgroundImage: srcSet
    ? `image-set(${candidates.map(({ url, dpr }) => `url("${url}") ${dpr}`).join(", ")})`
    : `url(${bg.src})`,
};
