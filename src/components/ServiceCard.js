import Link from "next/link";

export default function ServiceCard({ service }) {
  const serviceLink = (title) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  return (
    <Link href={`/services/${serviceLink(service.title)}`}>
      <div className="service-card">
        <div className="service-data">
          <img src={service.icon} alt={service.title} />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <p className="know-more">Know More</p>
        </div>
      </div>
    </Link>
  );
}
