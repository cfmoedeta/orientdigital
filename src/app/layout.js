import "@/css/global.css";

export const metadata = {
  title: "X Media | Talent Management",
  description:
    "X Media Company is a leading talent management agency representing artists, actors, and musicians. We build careers, craft brands, and connect talent with opportunity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
