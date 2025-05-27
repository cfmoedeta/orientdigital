"use client";
import "@/css/glitch.css";
import "@/css/HeroSection.css";

export default function HeroSection() {
  return (
    <main className="hero-section">
      <h1
        className="hero-text hero glitch layers"
        data-text="Welcome to X Media"
      >
        Welcome to <img src="/x-logo.png" alt="x-media-logo" /> Media
      </h1>
      <p className="sec-text">
        We manage the brightest{" "}
        <span style={{ color: "#e4011a" }}> artists</span>,
        <span style={{ color: "#e4011a" }}> actors</span>, and{" "}
        <span style={{ color: "#e4011a" }}>musicians</span>. <br />
        Guiding <span style={{ color: "#e4011a" }}>talent</span> to the
        spotlight with strategy, passion, and care.
      </p>
    </main>
  );
}
