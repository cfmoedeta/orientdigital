import { useEffect } from "react";

export default function useCountUpOnView(
  className = ".count",
  threshold = 0.5
) {
  useEffect(() => {
    const counters = document.querySelectorAll(className);

    const options = {
      threshold,
    };

    const animateCount = (el) => {
      const target = +el.getAttribute("data-target");
      const speed = 200;
      const update = () => {
        const current = +el.innerText;
        const increment = Math.ceil(target / speed);
        if (current < target) {
          el.innerText = current + increment;
          setTimeout(update, 15);
        } else {
          el.innerText = target;
        }
      };
      update();
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    counters.forEach((counter) => observer.observe(counter));
  }, [className, threshold]);
}
