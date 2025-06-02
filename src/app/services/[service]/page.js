import ClientServicePage from "@/components/ClientServicePage";

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[&()]/g, "") // remove &, (, )
    .replace(/[^a-z0-9]+/g, "-") // replace all other non-alphanumerics with -
    .replace(/^-+|-+$/g, ""); // trim leading/trailing hyphens

export async function generateStaticParams() {
  const data = await import("../../../../public/servicesData.json");
  return data.default.map((service) => ({
    service: slugify(service.title),
  }));
}

export default function ServicePage({ params }) {
  return <ClientServicePage service={params.service} />;
}
