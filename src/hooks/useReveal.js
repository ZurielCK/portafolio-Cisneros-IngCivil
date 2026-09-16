import { useEffect } from "react";

/**
 * Añade la clase `is-visible` a todos los elementos `.reveal` cuando
 * entran en el viewport (fade-in on scroll). Un único observer para
 * toda la página; se re-ejecuta cuando cambia `deps`.
 */
export function useReveal(deps = []) {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal:not(.is-visible)");
    if (nodes.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
