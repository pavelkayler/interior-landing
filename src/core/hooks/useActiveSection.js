import { useEffect, useState } from "react";

const useActiveSection = (ids, options = {}) => {
  const [activeId, setActiveId] = useState(ids?.[0] ?? "hero");

  useEffect(() => {
    if (!ids || ids.length === 0) {
      return undefined;
    }

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: options.rootMargin ?? "-40% 0px -55% 0px",
        threshold: options.threshold ?? [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [ids, options.rootMargin, options.threshold]);

  return activeId;
};

export default useActiveSection;
