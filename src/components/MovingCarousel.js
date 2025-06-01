import Marquee from "react-fast-marquee";
import Image from "next/image";

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
        <Image
          key={brand.image}
          src={brand.image}
          alt={brand.name}
          width={150}
          height={150}
        />
      ))}
    </Marquee>
  );
}
