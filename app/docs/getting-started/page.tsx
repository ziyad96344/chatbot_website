import type { Metadata } from "next";
import GettingStartedClient from "./GettingStartedClient";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "How to Set Up XotBot AI Chatbot — Step by Step Guide",
  description:
    "Learn how to set up your AI chatbot in 5 minutes. Step-by-step onboarding guide covering chatbot creation, customization, knowledge base training, voice AI setup, and website deployment.",
  keywords: [
    "how to set up AI chatbot",
    "chatbot setup guide",
    "AI chatbot tutorial",
    "create AI chatbot",
    "chatbot onboarding",
    "XotBot setup",
    "deploy chatbot on website",
    "train chatbot with website data",
    "no-code chatbot builder guide",
  ],
  alternates: { canonical: "https://xotbot.com/docs/getting-started" },
  openGraph: {
    title: "How to Set Up XotBot AI Chatbot — Step by Step Guide",
    description: "Learn how to set up your AI chatbot in 5 minutes. Complete step-by-step onboarding guide.",
    url: "https://xotbot.com/docs/getting-started",
    type: "article",
    siteName: "XotBot",
    images: [{ url: "/logo/xotbot-og.png", width: 1200, height: 630, alt: "XotBot Getting Started Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Set Up XotBot AI Chatbot",
    description: "Complete step-by-step guide to building and deploying your AI chatbot.",
    images: ["/logo/xotbot-og.png"],
  }
};

export default function GettingStartedPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Set Up an AI Chatbot with XotBot",
    "description": "Learn how to create, customize, train, and deploy an AI chatbot on your website in under 5 minutes using XotBot.",
    "totalTime": "PT5M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Create Your Account",
        "text": "Sign up at app.xotbot.com using email or Google OAuth. Fill in your company details and select a plan.",
        "url": "https://xotbot.com/docs/getting-started#step-1",
        "image": "https://xotbot.com/onboarding/step-basic-info.png"
      },
      {
        "@type": "HowToStep",
        "name": "Name Your Chatbot",
        "text": "Give your chatbot a name and description. This helps identify it in your dashboard.",
        "url": "https://xotbot.com/docs/getting-started#step-2",
        "image": "https://xotbot.com/onboarding/step-basic-info.png"
      },
      {
        "@type": "HowToStep",
        "name": "Set Bot Personality",
        "text": "Configure your bot's persona — choose language, greeting message, business type, and display name.",
        "url": "https://xotbot.com/docs/getting-started#step-3"
      },
      {
        "@type": "HowToStep",
        "name": "Customize Look & Feel",
        "text": "Use the visual customizer to set colors, fonts, avatar, widget position, and chat bubble style to match your brand.",
        "url": "https://xotbot.com/docs/getting-started#step-4",
        "image": "https://xotbot.com/onboarding/step-customize.png"
      },
      {
        "@type": "HowToStep",
        "name": "Train with Your Data",
        "text": "Paste your website URL to auto-scrape all pages, upload PDFs/documents, or add custom Q&A pairs to build your knowledge base.",
        "url": "https://xotbot.com/docs/getting-started#step-5",
        "image": "https://xotbot.com/onboarding/step-knowledge.png"
      },
      {
        "@type": "HowToStep",
        "name": "Deploy & Go Live",
        "text": "Copy the embed code and paste it into your website HTML before the closing body tag. Your chatbot is now live!",
        "url": "https://xotbot.com/docs/getting-started#step-6",
        "image": "https://xotbot.com/onboarding/step-embed.png"
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xotbot.com" },
      { "@type": "ListItem", "position": 2, "name": "Documentation", "item": "https://xotbot.com/docs" },
      { "@type": "ListItem", "position": 3, "name": "Getting Started", "item": "https://xotbot.com/docs/getting-started" }
    ]
  };

  return (
    <>
      <JsonLd schema={howToSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <GettingStartedClient />
    </>
  );
}
