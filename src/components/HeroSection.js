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
          We manage the brightest{" "}
          <span style={{ color: "#ff6b35" }}> artists</span>,
          <span style={{ color: "#ff6b35" }}> actors</span>, and{" "}
          <span style={{ color: "#ff6b35" }}>musicians</span>. <br />
          Guiding <span style={{ color: "#ff6b35" }}>talent</span> to the
          spotlight with strategy, passion, and care.
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
