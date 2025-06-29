"use client";
import { useEffect, useRef } from "react";
import "@/css/ScrollTape.css";

export default function ScrollTape() {
  const tapeRef = useRef(null);
  const lastScrollTop = useRef(0);
  const currentOffset = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const direction = st > lastScrollTop.current ? "down" : "up";
      const step = 5;

      if (direction === "down") {
        currentOffset.current -= step;
      } else {
        currentOffset.current += step;
      }

      if (tapeRef.current) {
        tapeRef.current.style.transform = `translateX(${currentOffset.current}px)`;
      }

      lastScrollTop.current = st <= 0 ? 0 : st;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="scroll-tape-wrapper">
      <div className="scroll-tape" id="scrollTape" ref={tapeRef}>
        <span>
          Why Orient Digital ? Why Orient Digital ? Why Orient Digital ? Why
          Orient Digital ? Why Orient Digital ? Why Orient Digital ? Why Orient
          Digital ? Why Orient Digital ?
        </span>
      </div>
    </div>
  );
}
