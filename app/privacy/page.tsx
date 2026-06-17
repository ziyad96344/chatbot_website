import type { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "XotBot privacy policy — how we collect, use, and protect your data. GDPR compliant, SOC2 ready.",
  alternates: { canonical: "https://xotbot.com/privacy" },
  openGraph: {
    title: "Privacy Policy — XotBot",
    description: "How XotBot collects, uses, and protects your data.",
    url: "https://xotbot.com/privacy",
    type: "website",
    siteName: "XotBot",
    images: [{ url: "/logo/xotbot-og.png", width: 1200, height: 630, alt: "XotBot Privacy Policy" }],
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy — XotBot",
    description: "How XotBot collects, uses, and protects your data.",
  }
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
