import { useEffect, useRef } from "react";

const useRevealOnScroll = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const { root = null, rootMargin = "0px 0px -10% 0px", threshold = 0.15 } = options;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal--in");
          io.disconnect();
        }
      },
      { root, rootMargin, threshold }
    );

    el.classList.add("reveal");
    io.observe(el);

    return () => io.disconnect();
  }, [options]);

  return ref;
};

export default useRevealOnScroll;
