import type { Metadata } from "next";
import { ContactContainer } from "@/containers";

export const metadata: Metadata = {
  title: "Contact AMS | PT Ami Mandiri Sejahtera",
  description:
    "Speak with AMS about sourcing, supply and strategic partnerships. Commercial and general enquiries for buyers and suppliers.",
};

export default function ContactPage() {
  return <ContactContainer />;
}
