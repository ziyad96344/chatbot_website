import type { Metadata } from "next";
import GetAccessClient from "./GetAccessClient";

export const metadata: Metadata = {
  title: "Get Early Access — XotBot AI Chatbot",
  description:
    "Join the XotBot waitlist for early access to the most powerful AI chatbot platform.",
  alternates: { canonical: "https://xotbot.com/get-access" },
  robots: { index: false, follow: false },
};

export default function GetAccessPage() {
  return <GetAccessClient />;
}
