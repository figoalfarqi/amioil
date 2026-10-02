import type { Metadata } from "next";
import { ProductsContainer } from "@/containers";

export const metadata: Metadata = {
  title: "Our Commodities Portfolio | PT Ami Mandiri Sejahtera",
  description:
    "Explore the commodities AMS evaluates for sourcing and supply: EN590 Diesel, Jet A-1, Fuel Oil, LPG & NGL, Sulfur Granules, Petcoke, Bitumen, Base Oils, Feedstocks, and Industrial Diesel.",
};

export default function ProductsPage() {
  return <ProductsContainer />;
}
