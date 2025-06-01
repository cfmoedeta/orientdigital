import "@/css/ManagedTalents.css";
import HeaderWrapper from "./wrappers/header-wrapper";
import Link from "next/link";

export const talents = [
  {
    name: "Tamer Hosny",
    image: "/talents/tamer-hosny.jpg",
    talent: "Musician",
  },
  {
    name: "Mahmoud El-Esseily",
    image: "/talents/esseily.jpg",
    talent: "Musician",
  },
  { name: "Mohamed Hamaki", image: "/talents/hamaki.jpeg", talent: "Musician" },
  { name: "Angham", image: "/talents/angham.jpg", talent: "Musician" },
  {
    name: "Bahaa Sultan",
    image: "/talents/bahaa-sultan.jpg",
    talent: "Musician",
  },
  {
    name: "Ehab Tawfik",
    image: "/talents/ehab-tawfik.jpg",
    talent: "Musician",
  },
  {
    name: "Hisham Abbas",
    image: "/talents/hisham-abbas.jpg",
    talent: "Musician",
  },
  {
    name: "Carolina Karam",
    image: "/talents/carolina-karam.jpg",
    talent: "Musician",
  },
  {
    name: "Mahmoud Hegazy",
    image: "/talents/mahmoud-hegazy.jpg",
    talent: "Actor",
  },
  { name: "Sherine", image: "/talents/sherine.jpeg", talent: "Musician" },
  {
    name: "Ragheb Alama",
    image: "/talents/ragheb-alama.jpg",
    talent: "Musician",
  },
  {
    name: "Reda El-Bahrawy",
    image: "/talents/reda-elbahrawy.jpg",
    talent: "Musician",
  },
  {
    name: "Ahmed Saad",
    image: "/talents/ahmed-saad.jpg",
    talent: "Musician",
  },
  {
    name: "Kenzy Turky",
    image: "/talents/kenzy-turky.jpg",
    talent: "Musician",
  },
  {
    name: "Mosatafa Amar",
    image: "/talents/mostafa-amar.jpg",
    talent: "Musician",
  },
  {
    name: "Ruby",
    image: "/talents/ruby.webp",
    talent: "Musician",
  },
  { name: "Wegz", image: "/talents/wegz.jpg", talent: "Musician" },
  {
    name: "Yasmina El-Abd",
    image: "/talents/yasmina-elabd.jpg",
    talent: "Actress",
  },
  { name: "Taha Desouky", image: "/talents/taha-desouky.jpg", talent: "Actor" },
  { name: "Ahmed Dash", image: "/talents/ahmed-dash.jpg", talent: "Actor" },
  {
    name: "Huda El-Mufti",
    image: "/talents/huda-elmufti.jpg",
    talent: "Actress",
  },
  {
    name: "Sarah Hany",
    image: "/talents/sarah-hany.jpg",
    talent: "Influencer",
  },
  { name: "Flex", image: "/talents/flex.jpg", talent: "Musician" },
  { name: "Husayn", image: "/talents/husayn.jpg", talent: "Musician" },
  {
    name: "Eyad EL-Mogy",
    image: "/talents/eyad-elmogy.jpg",
    talent: "YouTuber",
  },
  {
    name: "Mohammed Tarek",
    image: "/talents/mohammed-tarek.jpeg",
    talent: "Influencer",
  },
  {
    name: "Karim Dash",
    image: "/talents/karim-dash.jpeg",
    talent: "Influencer",
  },
  {
    name: "Tasneem El-Aidy",
    image: "/talents/tasneem-elaidy.jpg",
    talent: "Influencer",
  },
  {
    name: "Hassan Gabr",
    image: "/talents/hassan-gabr.jpg",
    talent: "Influencer",
  },
  { name: "Dina Dash", image: "/talents/dina-dash.jpg", talent: "Influencer" },
  {
    name: "Raouf El-Sherif",
    image: "/talents/raouf-elsherif.jpg",
    talent: "Influencer",
  },
];

export default function ManagedTalents() {
  return (
    <section className="talents fit-body">
      <HeaderWrapper className="main-heading">
        Some of the <span style={{ color: "#ff6b35" }}>Talents</span> We Manage
      </HeaderWrapper>
      <div className="talents-container">
        {talents.slice(0, 16).map((talent) => (
          <div key={talent.name} className="talent-card">
            <div className="card-inner">
              <div className="card-front">
                <img src={talent.image} alt={talent.name} loading="lazy" />
              </div>
              <div className="card-back">
                <h1>{talent.name}</h1>
                <h3 style={{ color: "#34d399" }}>{talent.talent}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href={"/talents"} className="browse-talents-button">
        Browse All Talents
      </Link>
    </section>
  );
}
