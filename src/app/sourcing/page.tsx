import type { Metadata } from "next";
import { SourcingContainer } from "@/containers";

export const metadata: Metadata = {
  title: "Global Sourcing | PT Ami Mandiri Sejahtera",
  description:
    "From qualified sources to connected markets. AMS is building relationships across international energy and commodity supply chains.",
};

export default function SourcingPage() {
  return <SourcingContainer />;
}
