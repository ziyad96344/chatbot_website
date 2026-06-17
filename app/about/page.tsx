import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About XotBot — AI Chatbot Platform",
  description:
    "XotBot transforms raw website data into intelligent AI chatbot assistants. From knowledge extraction to cognitive AI deployment in under 5 minutes — for businesses worldwide.",
  keywords: [
    "about XotBot",
    "AI chatbot company",
    "chatbot platform",
    "intelligent conversation AI",
    "cognitive AI assistant",
  ],
  alternates: { canonical: "https://xotbot.com/about" },
  openGraph: {
    title: "About XotBot — AI Chatbot Platform",
    description: "XotBot transforms raw website data into intelligent AI chatbot assistants.",
    url: "https://xotbot.com/about",
    type: "website",
    siteName: "XotBot",
    images: [{ url: "/logo/xotbot-og.png", width: 1200, height: 630, alt: "About XotBot" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About XotBot",
    description: "XotBot transforms raw website data into intelligent AI chatbot assistants.",
    images: ["/logo/xotbot-og.png"],
  }
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About XotBot",
    "url": "https://xotbot.com/about",
    "description": "XotBot transforms raw website data into intelligent AI chatbot assistants.",
    "publisher": {
      "@type": "Organization",
      "name": "XotBot",
      "logo": { "@type": "ImageObject", "url": "https://xotbot.com/logo/logo1.png" }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xotbot.com" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://xotbot.com/about" }
    ]
  };

  return (
    <>
      <JsonLd schema={aboutSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <AboutClient />
    </>
  );
}
