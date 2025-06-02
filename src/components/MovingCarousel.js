import Marquee from "react-fast-marquee";

export default function MovingCarousel({ brands, direction = "left" }) {
  return (
    <Marquee
      className="carousel fit-body"
      direction={direction}
      pauseOnHover
      gradient={true}
      gradientColor="#000"
      speed={100}
    >
      {brands.map((brand) => (
        <img key={brand.image} src={brand.image} alt={brand.name} />
      ))}
    </Marquee>
  );
}
