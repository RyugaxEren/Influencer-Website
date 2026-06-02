import { useEffect, useRef, useState } from "react";

export function useInView<T extends Element = HTMLDivElement>(
  options: IntersectionObserverInit & { once?: boolean } = {},
) {
  const { once = true, threshold = 0.15, rootMargin = "0px 0px -10% 0px" } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once, threshold, rootMargin]);

  return { ref, inView };
}
