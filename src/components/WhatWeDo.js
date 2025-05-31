"use client";
import "@/css/WhatWeDo.css";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WhatWeDo() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/servicesData.json")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .then(setLoading(false));
  }, []);
  if (loading) {
    return <div>Loading..</div>;
  }
  return (
    <div className="services fit-body">
      <motion.h1
        className="main-heading"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What We Do
      </motion.h1>
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
