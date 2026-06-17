import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact XotBot — Get Support & Partnership Inquiries",
  description:
    "Reach out to the XotBot team for support, demos, partnership inquiries, or custom enterprise solutions. We usually respond within 2 hours.",
  keywords: [
    "contact XotBot",
    "AI chatbot support",
    "chatbot partnership",
    "enterprise AI chatbot inquiry",
  ],
  alternates: { canonical: "https://xotbot.com/contact" },
  openGraph: {
    title: "Contact XotBot — Get Support & Partnership Inquiries",
    description: "Reach out to the XotBot team for support, demos, partnership inquiries, or custom enterprise solutions.",
    url: "https://xotbot.com/contact",
    type: "website",
    siteName: "XotBot",
    images: [{ url: "/logo/xotbot-og.png", width: 1200, height: 630, alt: "Contact XotBot" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact XotBot",
    description: "Reach out to the XotBot team for support, demos, partnership inquiries.",
    images: ["/logo/xotbot-og.png"],
  }
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact XotBot",
    "url": "https://xotbot.com/contact",
    "description": "Contact the XotBot team for support and enterprise solutions.",
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
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://xotbot.com/contact" }
    ]
  };

  return (
    <>
      <JsonLd schema={contactSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <ContactClient />
    </>
  );
}
