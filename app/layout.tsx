import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#6366f1",
};

export const metadata: Metadata = {
  title: {
    default: "XotBot — AI Chatbot Platform for Business",
    template: "%s | XotBot",
  },
  description:
    "Xotbot - Advanced AI Systems. Intelligence Unchained. Experience the future of autonomous AI orchestration.",
  metadataBase: new URL("https://xotbot.com"),
  icons: {
    icon: "/logo/logo1.png",
  },
  authors: [{ name: "XotBot" }],
  creator: "XotBot",
  publisher: "XotBot",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "XotBot",
    locale: "en_US",
    images: [{ url: "/logo/xotbot-og.png", width: 1200, height: 630, alt: "XotBot AI Chatbot Platform" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "XotBot",
    "url": "https://xotbot.com",
    "logo": "https://xotbot.com/logo/logo1.png",
    "description": "AI-powered chatbot and voice agent platform for businesses worldwide.",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "url": "https://xotbot.com/contact"
    },
    "sameAs": []
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${hankenGrotesk.variable}`}
    >
      <body>
        <JsonLd schema={organizationSchema} />
        <div className="grain-overlay"></div>
        <div className="min-h-screen bg-[#050505] text-white">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
