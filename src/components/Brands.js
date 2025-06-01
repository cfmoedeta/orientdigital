import MovingCarousel from "./MovingCarousel";
import "@/css/Brands.css";

const brands = [
  { name: "Four Seasons Hotel", image: "/brands/4-seasons.jpg" },
  { name: "360", image: "/brands/360.jpg" },
  { name: "Artist House", image: "/brands/artist-house.jpg" },
  { name: "Benchmark", image: "/brands/benchmark.jpg" },
  { name: "Cairo Scene", image: "/brands/cairo-scene.jpg" },
  { name: "Cairo Zoom", image: "/brands/cairo-zoom.jpg" },
  { name: "Cosmo", image: "/brands/cosmo.jpg" },
  { name: "ET Arabic", image: "/brands/et-arabic.jpg" },
  { name: "FM", image: "/brands/fm.jpg" },
  { name: "The Groove City", image: "/brands/groove-city.jpg" },
  { name: "Health Hub", image: "/brands/health-hub.jpg" },
  { name: "Jawaji", image: "/brands/jawaji.jpg" },
  { name: "Layalina", image: "/brands/layalina.jpg" },
  { name: "Noi", image: "/brands/noi.jpg" },
  { name: "NRG", image: "/brands/nrg.jpg" },
  { name: "PMG", image: "/brands/pmg.jpg" },
  { name: "Sawa", image: "/brands/sawa.jpg" },
  { name: "Sayadaty", image: "/brands/sayadaty.jpg" },
  { name: "Velvet", image: "/brands/velvet.jpg" },
  { name: "Watry", image: "/brands/watry.jpg" },
  { name: "Zahra", image: "/brands/zahra.jpg" },
];

const midpoint = Math.ceil(brands.length / 2);
const firstHalf = brands.slice(0, midpoint);
const secondHalf = brands.slice(midpoint);

export default function Brands() {
  return (
    <section className="brands">
      <h1 className="main-heading">Managed Brands & Strategic Partners</h1>
      <MovingCarousel brands={firstHalf} direction={"right"} />
      <MovingCarousel brands={secondHalf} />
    </section>
  );
}
