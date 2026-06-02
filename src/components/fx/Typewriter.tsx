import { useEffect, useState } from "react";

export function Typewriter({
  phrases,
  typeSpeed = 70,
  deleteSpeed = 40,
  pause = 1400,
  className = "",
}: {
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
  className?: string;
}) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[idx % phrases.length];
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIdx((i) => (i + 1) % phrases.length);
      return;
    }
    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1),
        );
      },
      deleting ? deleteSpeed : typeSpeed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, idx, phrases, typeSpeed, deleteSpeed, pause]);

  return (
    <span className={className}>
      {text}
      <span
        aria-hidden
        className="ml-1 inline-block h-[1em] w-[2px] translate-y-[3px] bg-violet animate-caret"
        style={{ animation: "caret 1s steps(1) infinite" }}
      />
    </span>
  );
}
