import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pratiksha-weds-sankalp.vercel.app"),
  title: "Pratiksha Weds Sankalp | Wedding Invitation",
  description:
    "Join us in celebrating the beautiful beginning of Pratiksha Sahoo and Sankalp Rath on 27 November.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Pratiksha Weds Sankalp | Wedding Invitation",
    description:
      "Join us in celebrating the beautiful beginning of Pratiksha Sahoo and Sankalp Rath on 27 November.",
    url: "https://pratiksha-weds-sankalp.vercel.app",
    siteName: "Pratiksha Weds Sankalp",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/couple-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Pratiksha & Sankalp — Wedding Invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratiksha Weds Sankalp | Wedding Invitation",
    description:
      "Join us in celebrating the beautiful beginning of Pratiksha Sahoo and Sankalp Rath on 27 November.",
    images: ["/images/couple-hero.jpg"],
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
      </head>
      <body className="antialiased bg-[#1a0c02] text-[#F5E6C8] selection:bg-[#C9A96E]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
