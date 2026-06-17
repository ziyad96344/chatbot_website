import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "XotBot terms of service — the legal agreement for using our AI chatbot platform.",
  alternates: { canonical: "https://xotbot.com/terms" },
  openGraph: {
    title: "Terms of Service — XotBot",
    description: "The legal agreement for using XotBot AI chatbot platform.",
    url: "https://xotbot.com/terms",
    type: "website",
    siteName: "XotBot",
    images: [{ url: "/logo/xotbot-og.png", width: 1200, height: 630, alt: "XotBot Terms of Service" }],
  },
  twitter: {
    card: "summary",
    title: "Terms of Service — XotBot",
    description: "The legal agreement for using XotBot AI chatbot platform.",
  }
};

export default function TermsPage() {
  return <TermsClient />;
}
