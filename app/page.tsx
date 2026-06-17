import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "XotBot — AI Chatbot Platform for Business",
  description:
    "Build & deploy AI chatbots with voice calls, WhatsApp integration, and intelligent lead generation. Custom knowledge bases, multilingual support, and real-time analytics for businesses worldwide.",
  keywords: [
    "AI chatbot platform",
    "AI chatbot for business",
    "voice AI chatbot",
    "WhatsApp chatbot",
    "lead generation chatbot",
    "customer support AI",
    "best chatbot builder",
    "multilingual chatbot",
    "no-code chatbot",
  ],
  alternates: { canonical: "https://xotbot.com/" },
  openGraph: {
    title: "XotBot — AI Chatbot Platform for Business",
    description:
      "Build & deploy AI chatbots with voice calls, WhatsApp integration, and intelligent lead generation.",
    url: "https://xotbot.com/",
    type: "website",
    siteName: "XotBot",
    images: [{ url: "/logo/xotbot-og.png", width: 1200, height: 630, alt: "XotBot AI Chatbot Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "XotBot — AI Chatbot Platform",
    description: "Build & deploy AI chatbots with voice calls, WhatsApp integration, and intelligent lead generation.",
    images: ["/logo/xotbot-og.png"],
  }
};

export default function HomePage() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "XotBot",
    "url": "https://xotbot.com",
    "description": "AI Chatbot Platform for Business with voice calls, WhatsApp integration, and lead generation.",
    "publisher": {
      "@type": "Organization",
      "name": "XotBot",
      "logo": {
        "@type": "ImageObject",
        "url": "https://xotbot.com/logo/logo1.png"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Xotbot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Xotbot is an AI-powered chatbot and voice agent platform. It learns from your website data and provides instant, accurate answers to your customers — 24/7. No coding knowledge required."
        }
      },
      {
        "@type": "Question",
        "name": "How does the AI learn from my website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply paste your website URL. Our AI crawler scans every page — products, pricing, FAQs, policies — and builds a knowledge base. It continuously updates as your site changes."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need technical knowledge to set it up?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not at all. The entire setup takes under 5 minutes: paste your URL, customize the look, and copy a single embed code to your website. We handle all the AI complexity behind the scenes."
        }
      },
      {
        "@type": "Question",
        "name": "What languages does Xotbot support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Xotbot supports 50+ languages out of the box, including English, Hindi, Spanish, French, Arabic, Chinese, and more. It auto-detects the visitor's language and responds accordingly."
        }
      },
      {
        "@type": "Question",
        "name": "Can I customize the chatbot's appearance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! You can fully customize colors, fonts, avatar, welcome messages, and even the bot's personality. Match it perfectly to your brand identity using our visual customizer."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Voice AI work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Voice AI lets your customers have real-time spoken conversations with your bot. Choose from multiple voice personas with different tones. It uses natural language processing for human-like conversations."
        }
      },
      {
        "@type": "Question",
        "name": "What platforms does Xotbot integrate with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Xotbot works on any website — Shopify, WordPress, Wix, Webflow, Squarespace, Framer, and custom sites. Just paste one line of code. We also offer WhatsApp integration and a REST API."
        }
      },
      {
        "@type": "Question",
        "name": "Is my data secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We use 256-bit encryption, are SOC2 compliant, and GDPR ready. Your data is processed securely and never shared with third parties. You maintain full control over your knowledge base."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://xotbot.com"
      }
    ]
  };

  return (
    <>
      <JsonLd schema={websiteSchema} />
      <JsonLd schema={faqSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <HomeClient />
    </>
  );
}
