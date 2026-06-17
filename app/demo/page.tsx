import type { Metadata } from "next";
import DemoClient from "./DemoClient";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Try XotBot Demo — See AI Chatbot in Action",
  description:
    "Book a personalized demo and see how XotBot's AI chatbot can transform your customer engagement. Live setup in 5 minutes, multi-channel preview, no commitment.",
  keywords: [
    "AI chatbot demo",
    "try AI chatbot",
    "chatbot live demo",
    "XotBot demo",
    "book AI chatbot demo",
  ],
  alternates: { canonical: "https://xotbot.com/demo" },
  openGraph: {
    title: "Try XotBot Demo — See AI Chatbot in Action",
    description: "Book a personalized demo and see how XotBot's AI chatbot can transform your customer engagement.",
    url: "https://xotbot.com/demo",
    type: "website",
    siteName: "XotBot",
    images: [{ url: "/logo/xotbot-og.png", width: 1200, height: 630, alt: "XotBot Demo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Try XotBot Demo",
    description: "See how XotBot's AI chatbot can transform your customer engagement. Live setup in 5 minutes.",
    images: ["/logo/xotbot-og.png"],
  }
};

export default function DemoPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xotbot.com" },
      { "@type": "ListItem", "position": 2, "name": "Demo", "item": "https://xotbot.com/demo" }
    ]
  };

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <DemoClient />
    </>
  );
}
