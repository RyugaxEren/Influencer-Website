import { useEffect, useRef, useState } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export function TextScramble({
  phrases,
  interval = 2400,
  className = "",
}: {
  phrases: string[];
  interval?: number;
  className?: string;
}) {
  const [text, setText] = useState(phrases[0] ?? "");
  const idx = useRef(0);
  const raf = useRef(0);

  useEffect(() => {
    let cancelled = false;
    const scramble = (from: string, to: string) =>
      new Promise<void>((resolve) => {
        const maxLen = Math.max(from.length, to.length);
        const queue: { from: string; to: string; start: number; end: number; char?: string }[] = [];
        for (let i = 0; i < maxLen; i++) {
          const f = from[i] || "";
          const t = to[i] || "";
          const start = Math.floor(Math.random() * 20);
          const end = start + Math.floor(Math.random() * 20) + 10;
          queue.push({ from: f, to: t, start, end });
        }
        let frame = 0;
        const update = () => {
          if (cancelled) return resolve();
          let output = "";
          let complete = 0;
          for (const q of queue) {
            if (frame >= q.end) {
              complete++;
              output += q.to;
            } else if (frame >= q.start) {
              if (!q.char || Math.random() < 0.28) q.char = CHARS[Math.floor(Math.random() * CHARS.length)];
              output += `\u200B${q.char}`;
            } else {
              output += q.from;
            }
          }
          setText(output);
          if (complete === queue.length) resolve();
          else {
            frame++;
            raf.current = requestAnimationFrame(update);
          }
        };
        raf.current = requestAnimationFrame(update);
      });

    const loop = async () => {
      while (!cancelled) {
        await new Promise((r) => setTimeout(r, interval));
        if (cancelled) break;
        const next = (idx.current + 1) % phrases.length;
        await scramble(phrases[idx.current], phrases[next]);
        idx.current = next;
      }
    };
    loop();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf.current);
    };
  }, [phrases, interval]);

  return <span className={className}>{text}</span>;
}
