import "@/css/ManagedTalents.css";
import HeaderWrapper from "./wrappers/header-wrapper";
import Link from "next/link";

export const talents = [
  {
    name: "Alaa Aqel",
    image: "/talents/alaa-akl.jpeg",
    talent: "Religious Influencer",
  },
  {
    name: "Fares Ahmed Hassan",
    image: "/talents/fares-ahmed-hassan.jpeg",
    talent: "Religious Influencer",
  },
  {
    name: "El-Sayed Said",
    image: "/talents/elsayed-said.jpeg",
    talent: "Religious Influencer",
  },
  {
    name: "Hagag El-Hendawy",
    image: "/talents/hagag-elhndawy.jpeg",
    talent: "Religious Influencer",
  },
  {
    name: "Mahmoud El-Shahat Anwar",
    image: "/talents/mahmoud-elshahat-anwar.jpeg",
    talent: "Religious Influencer",
  },
  {
    name: "El-Shahat Anwar",
    image: "/talents/elshahat-anwar.jpeg",
    talent: "Religious Influencer",
  },
  {
    name: "Mansour Waheed",
    image: "/talents/mansour-wahed.jpeg",
    talent: "Religious Influencer",
  },
  {
    name: "Mohamed Ahmed Hassan",
    image: "/talents/mohamed-ahmed-hassan.jpeg",
    talent: "Religious Influencer",
  },
  {
    name: "Mostafa Ismail",
    image: "/talents/mostafa-ismail.jpeg",
    talent: "Religious Influencer",
  },
  {
    name: "Nasr El-Dein Tobar",
    image: "/talents/nasreldein-tobar.jpeg",
    talent: "Religious Influencer",
  },
  {
    name: "Ragheb Ghaloush",
    image: "/talents/ragheb-ghaloush.jpeg",
    talent: "Religious Influencer",
  },
  {
    name: "Sayed El-Nakshabandi",
    image: "/talents/sayed-al-nakshabandi.jpeg",
    talent: "Religious Influencer",
  },

  {
    name: "AbdEl-Razzak Ahmed",
    image: "/talents/abdelrazzak-ahmed.jpg",
    talent: "Religious Influencer",
  },
  {
    name: "Amira El-Badrawy",
    image: "/talents/amira-elbdrawy.jpg",
    talent: "Religious Influencer",
  },
  {
    name: "Ashrakat Anwar",
    image: "/talents/ashrakat-anwar.jpg",
    talent: "Religious Influencer",
  },
  {
    name: "Basmala Ahmed & Sama Ahmed",
    image: "/talents/basmala-sama.jpg",
    talent: "Religious Influencers",
  },
  {
    name: "Jannah Choir",
    image: "/talents/jannah-corral.jpg",
    talent: "Religious Influencer",
  },
  {
    name: "Mohamed Tifly",
    image: "/talents/mohamed-tifly.jpg",
    talent: "Religious Influencer",
  },
  {
    name: "Radwan Mahmoud",
    image: "/talents/radwan-mahmoud.jpg",
    talent: "Religious Influencer",
  },
  {
    name: "Tasneem El-Aidy",
    image: "/talents/tasneem-elaidy.jpg",
    talent: "Influencer",
  },
  {
    name: "AbdAllah Mostafa",
    image: "/talents/abdallah-mostafa.jpg",
    talent: "Religious Influencer",
  },
];

export default function ManagedTalents() {
  return (
    <section className="talents fit-body">
      <HeaderWrapper className="main-heading">
        Some of the <span style={{ color: "#2aa198" }}>Talents</span> We Manage
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
                <h3 style={{ color: "#aa00ff" }}>{talent.talent}</h3>
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
