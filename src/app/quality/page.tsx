import type { Metadata } from "next";
import { QualityContainer } from "@/containers";

export const metadata: Metadata = {
  title: "Quality & Compliance | PT Ami Mandiri Sejahtera",
  description:
    "Confidence begins with the details. Specifications, source verification and clear documentation support responsible commodity trading.",
};

export default function QualityPage() {
  return <QualityContainer />;
}
