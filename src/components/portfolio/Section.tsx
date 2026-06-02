import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
  containerClass = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  children: ReactNode;
  className?: string;
  containerClass?: string;
}) {
  return (
    <section id={id} className={`relative py-28 md:py-36 ${className}`}>
      <div className={`relative mx-auto w-full max-w-7xl px-6 ${containerClass}`}>
        {(eyebrow || title) && (
          <div className="mb-14 max-w-3xl">
            {eyebrow && <div className="label mb-4">{eyebrow}</div>}
            {title && (
              <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[0.95]">{title}</h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
