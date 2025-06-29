import "@/css/global.css";
import Script from 'next/script';

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
<head>
<title>Orient Digital | Talent Management</title>
  <Script id="facebook-pixel" strategy="afterInteractive">
    {`
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1051013736095607'); 
      fbq('track', 'PageView');
    `}
  </Script>

  <noscript>
    <img
      height="1"
      width="1"
      style={{ display: "none" }}
      src="https://www.facebook.com/tr?id=1051013736095607&ev=PageView&noscript=1"
    />
  </noscript>
</head>

      <body>{children}</body>
    </html>
  );
}
