import "@/css/global.css";

export const metadata = {
  title: "Orient Digital | Talent Management",
  description:
    "Orient Digital Company is a leading talent management agency representing artists, actors, and musicians. We build careers, craft brands, and connect talent with opportunity.",
  openGraph: {
    title: "Orient Digital | Talent Management",
    description:
      "Orient Digital Company is a leading talent management agency representing artists, actors, and musicians.",
    url: "https://orientdigital.net",
    siteName: "Orient Digital",
    images: [
      {
        url: "https://orientdigital.net/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orient Digital | Talent Management",
    description:
      "Representing top artists, actors, and musicians in the industry.",
    images: ["https://orientdigital.net/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
