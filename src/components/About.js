import "@/css/About.css";
import HeaderWrapper from "./wrappers/header-wrapper";
import ScrollTape from "./ScrollTape";

const points = [
  {
    title: "Expertise in Talent Growth",
    details:
      "We specialize in elevating artists, actors, and musicians by crafting personalized growth strategies.",
  },
  {
    title: "Industry Connections",
    details:
      "Our deep network connects you with top brands, producers, and influencers to maximize opportunities.",
  },
  {
    title: "Data-Driven Strategy",
    details:
      "We use cutting-edge analytics to tailor campaigns that resonate with your audience.",
  },
  {
    title: "Full-Service Management",
    details:
      "From branding to PR, social media, and endorsements, we manage every detail.",
  },
];

export default function About() {
  return (
    <>
      <ScrollTape />
      <section className="about fit-body">
        <img src="/earth.gif" alt="" />
        <ul className="points-list">
          {points.map((point) => (
            <li key={point.title} className="point">
              <span className="gradient-bar"></span>
              <h3>{point.title}</h3>
              <p>{point.details}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
