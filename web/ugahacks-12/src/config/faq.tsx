import { ReactNode } from "react";

/**
 * `.tsx` rather than `.ts` because three answers embed real `<a>` links (EL
 * credit, Code of Conduct, contact email) instead of plain strings. This
 * matches cadathon-26's FAQ.tsx pattern of `ReactNode` answers.
 *
 * Copy re-transcribed from the Figma on 2026-08-27. The expanded-row mocks
 * (`285:1389`, `306:1770`) draw the real answer text, which the previous
 * version of this file only paraphrased. Every answer below is now the
 * design's own wording. Questions come from the collapsed accordion in
 * `Desktop - 28` (615:304).
 *
 * The design spells the product name two ways: "UGAHacks 12" in the
 * questions and "UGA Hacks 12" in the venue answer. Questions are
 * transcribed as drawn. The venue answer is normalized to "UGAHacks 12" to
 * match every other answer, because PLAN.md §5.2 already rules that "UGA
 * Hacks" is a typo. Flagged for copy review.
 */

const CODE_OF_CONDUCT = "https://mlh.io/code-of-conduct";
const EL_CREDIT_SITE = "https://el.ugahacks.com";
const CONTACT_EMAIL = "hello@ugahacks.com";

function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="font-semibold text-tape-teal underline underline-offset-2 hover:opacity-80"
    >
      {children}
    </a>
  );
}

export const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: "Where will UGAHacks 12 be held this year?",
    a: "UGAHacks 12 will be an in-person event held at the Miller Learning Center on the University of Georgia campus.",
  },
  {
    q: "Can I apply for travel reimbursements?",
    a: "Currently, we do not provide travel reimbursements.",
  },
  {
    q: "Can I start on my project before the event?",
    a: "No. All UGAHacks projects must begin at the hackathon. You are not permitted to begin a hackathon project before this event. Feel free to bring ideas, but no code!",
  },
  {
    q: "Who can sign up?",
    a: "All university students! We welcome all undergraduates and graduate students of all skill levels to attend.",
  },
  {
    q: "How do I receive EL credit?",
    a: (
      <>
        UGA students who attend UGAHacks 12 are eligible to receive EL Credit.
        To receive credit, please follow the instructions outlined on{" "}
        <InlineLink href={EL_CREDIT_SITE}>el.ugahacks.com</InlineLink>.
      </>
    ),
  },
  {
    q: "What if I don't have a team or idea?",
    a: "Don't sweat it! You're free to join any existing team or form a new one when you get there. We'll also provide ample opportunities for hackers to meet each other and brainstorm some amazing ideas.",
  },
  {
    q: "What are the rules all attendees must abide by?",
    a: (
      <>
        UGAHacks will be following the{" "}
        <InlineLink href={CODE_OF_CONDUCT}>MLH Code of Conduct</InlineLink>. By
        participating in UGAHacks, you are agreeing to follow the Code of
        Conduct throughout the duration of the event.
      </>
    ),
  },
  {
    q: "How many people can I have on my team?",
    a: "There is a limit of up to 4 people per team.",
  },
  {
    q: "What if I have more questions?",
    a: (
      <>
        Reach out to{" "}
        <InlineLink href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </InlineLink>{" "}
        and we&apos;ll be happy to answer it!
      </>
    ),
  },
];
