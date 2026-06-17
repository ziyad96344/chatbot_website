import type { Metadata } from "next";
import PricingClient from "./PricingClient";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "XotBot Pricing — Affordable AI Chatbot Plans",
  description:
    "Choose from Free, Pro, Ultra & Enterprise AI chatbot plans. Voice AI calls, WhatsApp integration, unlimited messages, and more. Start free — no credit card required.",
  keywords: [
    "AI chatbot pricing",
    "chatbot plans",
    "affordable AI chatbot",
    "free AI chatbot trial",
    "enterprise chatbot pricing",
    "XotBot pricing",
    "best chatbot pricing",
  ],
  alternates: { canonical: "https://xotbot.com/pricing" },
  openGraph: {
    title: "XotBot Pricing — Affordable AI Chatbot Plans",
    description: "Choose from Free, Pro, Ultra & Enterprise AI chatbot plans. Start free — no credit card required.",
    url: "https://xotbot.com/pricing",
    type: "website",
    siteName: "XotBot",
    images: [{ url: "/logo/xotbot-og.png", width: 1200, height: 630, alt: "XotBot Pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "XotBot Pricing",
    description: "Affordable AI chatbot plans from Free to Enterprise.",
    images: ["/logo/xotbot-og.png"],
  }
};

export default function PricingPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "XotBot AI Chatbot Subscriptions",
    "description": "AI chatbot platform offering Free, Pro, Ultra, and Enterprise plans.",
    "brand": {
      "@type": "Brand",
      "name": "XotBot"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "0",
      "highPrice": "4999",
      "priceCurrency": "INR",
      "offerCount": "4",
      "offers": [
        {
          "@type": "Offer",
          "name": "Free Trial",
          "price": "0",
          "priceCurrency": "INR",
          "description": "50 messages, 1 chatbot"
        },
        {
          "@type": "Offer",
          "name": "Pro",
          "price": "999",
          "priceCurrency": "INR",
          "description": "2,000 messages, 3 chatbots, voice calls"
        },
        {
          "@type": "Offer",
          "name": "Ultra",
          "price": "2499",
          "priceCurrency": "INR",
          "description": "10,000 messages, 10 chatbots, 100 voice calls"
        },
        {
          "@type": "Offer",
          "name": "Enterprise",
          "price": "4999",
          "priceCurrency": "INR",
          "description": "Unlimited messages, unlimited chatbots, unlimited voice calls"
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xotbot.com" },
      { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://xotbot.com/pricing" }
    ]
  };

  return (
    <>
      <JsonLd schema={productSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <PricingClient />
    </>
  );
}
