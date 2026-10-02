import type { Metadata } from "next";
import { Suspense } from "react";
import { RFQContainer } from "@/containers";

export const metadata: Metadata = {
  title: "Request Supply (RFQ) | PT Ami Mandiri Sejahtera",
  description:
    "Share the essentials. Prepare an email supply enquiry to our commercial team and review it before sending.",
};

export default function RFQPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <RFQContainer />
    </Suspense>
  );
}
