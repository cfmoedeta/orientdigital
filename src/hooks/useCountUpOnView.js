import { useEffect } from "react";

export default function useCountUpOnView() {
  useEffect(() => {
    const counters = document.querySelectorAll(".count");

    const animate = (el) => {
      const target = +el.getAttribute("data-target");
      const duration = 2000;
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        el.textContent = Math.floor(progress * target);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          el.textContent = target; // ensure final value is exact
        }
      };

      requestAnimationFrame(updateCount);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.textContent = "0"; // Reset to 0 each time
            animate(el);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    counters.forEach((counter) => {
      observer.observe(counter);
    });

    return () => {
      counters.forEach((counter) => {
        observer.unobserve(counter);
      });
    };
  }, []);
}
