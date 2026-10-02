import type { Metadata } from "next";
import { SupplierContainer } from "@/containers";

export const metadata: Metadata = {
  title: "Supplier Partnerships | PT Ami Mandiri Sejahtera",
  description:
    "Let’s discuss your supply. Share the essentials, prepare an email enquiry to our commercial team and review it before sending.",
};

export default function SupplierPage() {
  return <SupplierContainer />;
}
