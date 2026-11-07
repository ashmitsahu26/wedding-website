import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pratiksha-sankalp-engagement.vercel.app"),
  title: "Pratiksha Weds Sankalp | Engagement Invitation",
  description:
    "Join us in celebrating the beautiful engagement ceremony of Pratiksha Sahoo and Sankalp Rath on 27 November.",
  alternates: {
    canonical: "https://pratiksha-sankalp-engagement.vercel.app/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Pratiksha Weds Sankalp | Engagement Invitation",
    description:
      "Join us in celebrating the beautiful engagement ceremony of Pratiksha Sahoo and Sankalp Rath on 27 November.",
    url: "https://pratiksha-sankalp-engagement.vercel.app/",
    siteName: "Pratiksha Weds Sankalp",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://pratiksha-sankalp-engagement.vercel.app/images/engagement-preview.jpg",
        width: 1024,
        height: 682,
        alt: "Pratiksha Weds Sankalp | Engagement Invitation",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratiksha Weds Sankalp | Engagement Invitation",
    description:
      "Join us in celebrating the beautiful engagement ceremony of Pratiksha Sahoo and Sankalp Rath on 27 November.",
    images: [
      "https://pratiksha-sankalp-engagement.vercel.app/images/engagement-preview.jpg",
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#1a0c02",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        {/* Open Graph Meta Tags for WhatsApp and Social Sharing */}
        <meta property="og:title" content="Pratiksha Weds Sankalp | Engagement Invitation" />
        <meta property="og:description" content="Join us in celebrating the beautiful engagement ceremony of Pratiksha Sahoo and Sankalp Rath on 27 November." />
        <meta property="og:url" content="https://pratiksha-sankalp-engagement.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pratiksha Weds Sankalp" />
        <meta property="og:image" content="https://pratiksha-sankalp-engagement.vercel.app/images/engagement-preview.jpg" />
        <meta property="og:image:secure_url" content="https://pratiksha-sankalp-engagement.vercel.app/images/engagement-preview.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="682" />
        <meta property="og:image:alt" content="Pratiksha Weds Sankalp | Engagement Invitation" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pratiksha Weds Sankalp | Engagement Invitation" />
        <meta name="twitter:description" content="Join us in celebrating the beautiful engagement ceremony of Pratiksha Sahoo and Sankalp Rath on 27 November." />
        <meta name="twitter:image" content="https://pratiksha-sankalp-engagement.vercel.app/images/engagement-preview.jpg" />
      </head>
      <body className="antialiased bg-[#1a0c02] text-[#F5E6C8] selection:bg-[#C9A96E]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
