import "@/css/global.css";

export const metadata = {
  title: "X Media | Talent Management",
  description:
    "X Media Company is a leading talent management agency representing artists, actors, and musicians. We build careers, craft brands, and connect talent with opportunity.",
  openGraph: {
    title: "X Media | Talent Management",
    description:
      "X Media Company is a leading talent management agency representing artists, actors, and musicians.",
    url: "https://xmediauae.com",
    siteName: "X Media",
    images: [
      {
        url: "https://xmediauae.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "X Media | Talent Management",
    description:
      "Representing top artists, actors, and musicians in the industry.",
    images: ["https://xmediauae.com/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
