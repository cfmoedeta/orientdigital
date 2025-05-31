"use client";
import Navbar from "@/components/Navbar";
import "@/css/service-page.css";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/loading-spinner";

export default function ServicePage({ params }) {
  const router = useRouter();
  const { service } = React.use(params);

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/[&()]/g, "") // remove &, (, )
      .replace(/[^a-z0-9]+/g, "-") // replace all other non-alphanumerics with -
      .replace(/^-+|-+$/g, ""); // trim leading/trailing hyphens

  const [requestedService, setRequestedService] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/servicesData.json")
      .then((response) => response.json())
      .then((data) => {
        const foundService = data.find(
          (s) => slugify(s.title) === service.toLowerCase()
        );
        if (!foundService) {
          router.push("/not-found");
        } else {
          setRequestedService(foundService);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load service data", err);
        setLoading(false);
      });
  }, [service]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!requestedService) {
    return <div>Service not found</div>;
  }
  console.log(requestedService);
  return (
    <>
      <Navbar />
      <main className="service-page">
        <h1 className="main-heading">{requestedService.title}</h1>
        <nav aria-label="breadcrumb" className="breadcrumb">
          <Link href="/">Homepage</Link> &nbsp;/&nbsp;
          <span>{requestedService.title}</span>
        </nav>
        <div className="service-content fit-body">
          <div className="service-description">
            <p>{requestedService.details}</p>
          </div>

          <img
            className="service-image"
            src={requestedService.image}
            alt={requestedService.title}
          />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
