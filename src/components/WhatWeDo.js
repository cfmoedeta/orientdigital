import "@/css/WhatWeDo.css";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Talent Management",
    description:
      "Guiding actors, musicians, and influencers to grow their brand, secure partnerships, and manage public relations.",
    image: "./services-icons/talent-management.png",
  },
  {
    title: "YouTube Growth & Management",
    description:
      "Helping YouTubers optimize their channels, create content strategies, and grow loyal audiences.",
    image: "/services-icons/youtube-growth.png",
  },
  {
    title: "Brand Strategy & Consulting",
    description:
      "Developing tailored brand strategies that resonate with your audience and build long-term success.",
    image: "/services-icons/consulting.png",
  },
  {
    title: "Influencer Partnerships",
    description:
      "Connecting influencers with brands through authentic collaborations and sponsorship deals.",
    image: "/services-icons/influencer-partnership.png",
  },
  {
    title: "Social Media Marketing",
    description:
      "Creating and managing campaigns that boost your reach and engagement on platforms like Instagram, TikTok, and Facebook.",
    image: "/services-icons/social-media-marketing.png",
  },
];

export default function WhatWeDo() {
  return (
    <div className="services fit-body">
      <h1 className="main-heading">What We Do</h1>
      <p className="services-intro">
        We don’t just manage talents — we ignite digital fame and craft viral
        moments that break the internet. <br /> Whether you're an actor,
        musician, influencer, or YouTuber, we turbocharge your brand and build a
        loyal squad of fans that can’t get enough.
      </p>
      <div className="services-container">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </div>
  );
}
