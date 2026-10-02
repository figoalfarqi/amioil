import type { Metadata } from "next";
import { OperationsContainer } from "@/containers";

export const metadata: Metadata = {
  title: "Trading & Logistics | PT Ami Mandiri Sejahtera",
  description:
    "Commercial structuring and physical supply coordination, aligned with the requirements of each transaction. FOB, CFR, CIF delivery terms.",
};

export default function OperationsPage() {
  return <OperationsContainer />;
}
