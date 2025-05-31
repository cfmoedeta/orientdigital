import "@/css/glitch.css";
import "@/css/HeroSection.css";
import HeaderWrapper from "./wrappers/header-wrapper";
import ParagraphWrapper from "./wrappers/paragraph-wrapper";
import ParticlesBackground from "./ParticlesBackground";

export default function HeroSection() {
  return (
    <main className="hero-section fit-body">
      <ParticlesBackground />
      <div className="left-hero">
        <HeaderWrapper className="hero-text hero glitch layers">
          Welcome to <img src="/x-logo.png" alt="x-media-logo" /> Media
        </HeaderWrapper>
        <ParagraphWrapper>
          At XMedia, we manage top{" "}
          <span style={{ color: "#ff6b35" }}>influencers</span>,{" "}
          <span style={{ color: "#ff6b35" }}>actors</span>,{" "}
          <span style={{ color: "#ff6b35" }}>creators</span>, and{" "}
          <span style={{ color: "#ff6b35" }}>rising talents</span> across the
          Middle East. From brand deals to full-scale content production — we
          build careers, grow influence, and create impact.
        </ParagraphWrapper>
      </div>
      <div className="earth-wrapper">
        <div className="circular-text">
          {"Great Talent Meets Opportunity — Across Continents."
            .split("")
            .map((char, i) => (
              <span key={i} style={{ transform: `rotate(${i * 7}deg)` }}>
                {char}
              </span>
            ))}
        </div>
        <img className="earth" src="/earth.gif" alt="rotating-earth" />
      </div>
    </main>
  );
}
