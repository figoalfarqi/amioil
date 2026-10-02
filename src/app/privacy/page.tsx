import type { Metadata } from "next";
import { PrivacyContainer } from "@/containers";

export const metadata: Metadata = {
  title: "Privacy & Enquiry Information | PT Ami Mandiri Sejahtera",
  description:
    "How this website handles commercial enquiries. Your information, your choice. Direct email drafting without server retention.",
};

export default function PrivacyPage() {
  return <PrivacyContainer />;
}
