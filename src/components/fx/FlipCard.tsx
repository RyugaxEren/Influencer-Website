import type { ReactNode } from "react";

export function FlipCard({
  front,
  back,
  className = "",
  highlighted = false,
}: {
  front: ReactNode;
  back: ReactNode;
  className?: string;
  highlighted?: boolean;
}) {
  return (
    <div className={`group perspective-1000 h-[440px] ${className}`}>
      <div className="relative h-full w-full preserve-3d transition-transform duration-700 ease-out group-hover:rotate-y-180">
        <div
          className={`glass absolute inset-0 backface-hidden rounded-2xl p-8 flex flex-col ${highlighted ? "neon-glow border-violet/50" : ""}`}
        >
          {front}
        </div>
        <div
          className={`glass absolute inset-0 backface-hidden rotate-y-180 rounded-2xl p-8 flex flex-col ${highlighted ? "neon-glow border-violet/50" : ""}`}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
