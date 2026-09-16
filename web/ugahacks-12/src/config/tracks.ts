/**
 * Open Cases track list, reconciled against the Figma folder artwork
 * on 2026-08-27 (`Track Files` 664:301, `Expanded Track Files` 664:3777,
 * `FILE 05 1` 666:5493). The design draws eight folders in a navy drawer,
 * tabs alternating left and right, FILE 08 at the top down to FILE 01 at the
 * bottom, each carrying a colored pill with the track name. The section
 * heading reads "EIGHT TRACKS. PICK YOUR INVESTIGATION.", which settles the
 * count.
 *
 * Three changes from the placeholder list this replaces:
 *  - File 06 was "Top Case" with status "High Priority" and `highlight: true`.
 *    The design draws it as "BEST OVERALL PROJECT" with no stamp, no priority
 *    status, and nothing setting it apart from its neighbors, so the
 *    highlight is gone.
 *  - Files 07 and 08 were "Track 7" and "Track 8" placeholders. The design
 *    labels both "COMING SOON...", which is the real interim copy.
 *  - The design shows no status text on any folder.
 *  - `status` and `highlight` are gone: the design drops both, and
 *    `FilingCabinet.tsx` no longer reads them.
 *
 * `blurb` backs the expanded-folder state the design introduces. Opening a
 * folder reveals a maroon interior holding the track name and a copy panel.
 * The comp draws that panel empty, so no blurb copy exists yet. The field is
 * declared to fix the contract and left unset until copy arrives.
 *
 * Pill color is not configured here. `FilingCabinet.tsx` cycles accent
 * colors by index, which is what the design does, three hues repeating down
 * the stack. The component renders FILE 08 at the top of the drawer down to
 * FILE 01, so keep this array in ascending order.
 */
export const TRACKS: {
  file: string;
  name: string;
  /** Short description shown inside the opened folder. Copy pending. */
  description?: string;
}[] = [
  { file: "01", name: "Best First Time Hacker" },
  { file: "02", name: "Best Game Project" },
  { file: "03", name: "Ground Up Model" },
  { file: "04", name: "Best Hardware Project" },
  { file: "05", name: "Best Solo Project" },
  { file: "06", name: "Best Overall Project" },
  // The design's own interim copy for the two undecided tracks. Title case
  // here to match the rest of the array; the comp renders every track name
  // uppercase, which is a type treatment rather than content.
  { file: "07", name: "Coming Soon..." },
  { file: "08", name: "Coming Soon..." },
];
