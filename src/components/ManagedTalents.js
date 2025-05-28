import "@/css/ManagedTalents.css";

const talents = [
  { name: "Wegz", image: "/talents/wegz.jpg", talent: "Musician" },
  {
    name: "Yasmina El-Abd",
    image: "/talents/yasmina-elabd.jpg",
    talent: "Actress",
  },
  {
    name: "Tasneem El-Aidy",
    image: "/talents/tasneem-elaidy.jpg",
    talent: "Influencer",
  },
  { name: "Taha Desouky", image: "/talents/taha-desouky.jpg", talent: "Actor" },
  {
    name: "Sarah Hany",
    image: "/talents/sarah-hany.jpg",
    talent: "Influencer",
  },
  {
    name: "Raouf El-Sherif",
    image: "/talents/raouf-elsherif.jpg",
    talent: "Influencer",
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
  { name: "Husayn", image: "/talents/husayn.jpg", talent: "Musician" },
  {
    name: "Hassan Gabr",
    image: "/talents/hassan-gabr.jpg",
    talent: "Influencer",
  },
  {
    name: "Huda El-Mufti",
    image: "/talents/huda-elmufti.jpg",
    talent: "Actress",
  },
  { name: "Flex", image: "/talents/flex.jpg", talent: "Musician" },
  {
    name: "Eyad EL-Mogy",
    image: "/talents/eyad-elmogy.jpg",
    talent: "YouTuber",
  },
  { name: "Dina Dash", image: "/talents/dina-dash.jpg", talent: "Influencer" },
  {
    name: "Ahmed El-Gendy",
    image: "/talents/ahmed-elgendy.jpeg",
    talent: "Athlete",
  },
  { name: "Ahmed Dash", image: "/talents/ahmed-dash.jpg", talent: "Actor" },
];

export default function ManagedTalents() {
  return (
    <section className="talents fit-body">
      <h1 className="main-heading">
        Some of the <span style={{ color: "red" }}>Talents</span> We Manage
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
                <h3 style={{ color: "#34d399" }}>{talent.talent}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
