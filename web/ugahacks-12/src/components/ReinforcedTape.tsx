import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

const REINFORCEMENT_BACKGROUND =
  "linear-gradient(to bottom, transparent calc(25% - 0.75px), var(--color-tape-reinforcement) calc(25% - 0.75px), var(--color-tape-reinforcement) calc(25% + 0.75px), transparent calc(25% + 0.75px), transparent calc(75% - 0.75px), var(--color-tape-reinforcement) calc(75% - 0.75px), var(--color-tape-reinforcement) calc(75% + 0.75px), transparent calc(75% + 0.75px)), repeating-linear-gradient(to right, transparent 0, transparent calc(9rem - 0.75px), var(--color-tape-reinforcement) calc(9rem - 0.75px), var(--color-tape-reinforcement) calc(9rem + 0.75px), transparent calc(9rem + 0.75px), transparent 18rem)";

const TORN_EDGES =
  "polygon(1% 0, 0.25% 4%, 0.85% 8%, 0.15% 12%, 1.05% 16%, 0.3% 20%, 0.9% 24%, 0.1% 28%, 1% 32%, 0.2% 36%, 0.85% 40%, 0.05% 44%, 1.05% 48%, 0.2% 52%, 0.9% 56%, 0.1% 60%, 1% 64%, 0.25% 68%, 0.85% 72%, 0.1% 76%, 1.05% 80%, 0.2% 84%, 0.9% 88%, 0.15% 92%, 1% 96%, 0.3% 100%, 99% 100%, 99.75% 96%, 99.1% 92%, 99.9% 88%, 98.95% 84%, 99.8% 80%, 99.15% 76%, 99.9% 72%, 99% 68%, 99.75% 64%, 99.1% 60%, 99.95% 56%, 98.95% 52%, 99.8% 48%, 99.15% 44%, 99.9% 40%, 99% 36%, 99.8% 32%, 99.1% 28%, 99.9% 24%, 98.95% 20%, 99.7% 16%, 99.15% 12%, 99.85% 8%, 99% 4%, 99.7% 0)";

interface ReinforcedTapeProps extends HTMLAttributes<HTMLDivElement> {
  /** Content rendered inside the reinforced tape surface. */
  children: ReactNode;
}

export default function ReinforcedTape({
  children,
  className = "",
  style,
  ...props
}: ReinforcedTapeProps) {
  const tapeStyle: CSSProperties = {
    backgroundImage: REINFORCEMENT_BACKGROUND,
    clipPath: TORN_EDGES,
    ...style,
  };

  return (
    <div className={className} style={tapeStyle} {...props}>
      {children}
    </div>
  );
}
