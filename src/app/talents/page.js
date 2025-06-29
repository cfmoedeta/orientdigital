import "@/css/ManagedTalents.css";
import { talents } from "@/components/ManagedTalents";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function page() {
  return (
    <>
      <Navbar />
      <main className="talents fit-body" style={{ marginTop: "0" }}>
        <ParticlesBackground />
        <h1 className="main-heading">
          Our Managed <span style={{ color: "#2aa198" }}>Talents</span>
        </h1>
        <div className="talents-container">
          {talents.map((talent) => (
            <div key={talent.name} className="talent-card">
              <div className="card-inner">
                <div className="card-front">
                  <img src={talent.image} alt={talent.name} loading="lazy" />
                </div>
                <div className="card-back">
                  <h1>{talent.name}</h1>
                  <h3 style={{ color: "#aa00ff" }}>{talent.talent}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
