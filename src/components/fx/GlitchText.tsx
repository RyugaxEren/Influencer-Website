import type { ReactNode } from "react";

export function GlitchText({
  text,
  className = "",
  children,
}: {
  text: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <span className={`glitch ${className}`} data-text={text}>
      {children ?? text}
    </span>
  );
}
