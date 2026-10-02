import type { Metadata } from "next";
import { HomeContainer } from "@/containers";

export const metadata: Metadata = {
  title: "Global Supply. Indonesian Opportunity. | PT Ami Mandiri Sejahtera",
  description:
    "PT Ami Mandiri Sejahtera is an Indonesian energy and commodity trading company developing supply connections between qualified international producers and Indonesian customers.",
};

export default function HomePage() {
  return <HomeContainer />;
}
