import type { Metadata } from "next";
import DocsClient from "./DocsClient";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "XotBot Documentation — Setup & Integration Guide",
  description:
    "Complete documentation for XotBot AI chatbot platform. Setup guides, API reference, widget customization, WhatsApp integration, and more.",
  keywords: [
    "XotBot documentation",
    "AI chatbot setup guide",
    "chatbot API reference",
    "widget customization guide",
    "WhatsApp chatbot integration",
  ],
  alternates: { canonical: "https://xotbot.com/docs" },
  openGraph: {
    title: "XotBot Documentation — Setup & Integration Guide",
    description: "Complete documentation for XotBot AI chatbot platform. Setup guides, API reference, and more.",
    url: "https://xotbot.com/docs",
    type: "website",
    siteName: "XotBot",
    images: [{ url: "/logo/xotbot-og.png", width: 1200, height: 630, alt: "XotBot Documentation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "XotBot Documentation",
    description: "Complete documentation for XotBot AI chatbot platform.",
    images: ["/logo/xotbot-og.png"],
  }
};

export default function DocsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xotbot.com" },
      { "@type": "ListItem", "position": 2, "name": "Documentation", "item": "https://xotbot.com/docs" }
    ]
  };

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <DocsClient />
    </>
  );
}
