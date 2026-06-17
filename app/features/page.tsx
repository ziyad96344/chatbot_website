import type { Metadata } from "next";
import FeaturesClient from "./FeaturesClient";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "AI Chatbot Features — Voice AI, WhatsApp, Multilingual",
  description:
    "Explore XotBot's powerful AI chatbot features: voice AI calls, WhatsApp integration, multilingual support, lead capture, custom knowledge bases, analytics dashboard, and instant deployment.",
  keywords: [
    "AI chatbot features",
    "voice AI chatbot",
    "WhatsApp chatbot integration",
    "multilingual chatbot",
    "lead capture chatbot",
    "chatbot analytics",
    "knowledge base AI",
    "custom branding chatbot",
    "no-code chatbot builder",
  ],
  alternates: { canonical: "https://xotbot.com/features" },
  openGraph: {
    title: "AI Chatbot Features — Voice AI, WhatsApp, Multilingual",
    description: "Explore XotBot's powerful AI chatbot features: voice AI calls, WhatsApp integration, multilingual support.",
    url: "https://xotbot.com/features",
    type: "website",
    siteName: "XotBot",
    images: [{ url: "/logo/xotbot-og.png", width: 1200, height: 630, alt: "XotBot Features" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "XotBot Features",
    description: "Explore XotBot's powerful AI chatbot features: voice AI calls, WhatsApp integration.",
    images: ["/logo/xotbot-og.png"],
  }
};

export default function FeaturesPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "XotBot",
    "applicationCategory": "BusinessApplication",
    "url": "https://xotbot.com/features",
    "description": "Powerful AI chatbot features including voice AI calls, WhatsApp integration, multilingual support, and custom knowledge bases.",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "XotBot"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xotbot.com" },
      { "@type": "ListItem", "position": 2, "name": "Features", "item": "https://xotbot.com/features" }
    ]
  };

  return (
    <>
      <JsonLd schema={softwareSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <FeaturesClient />
    </>
  );
}
