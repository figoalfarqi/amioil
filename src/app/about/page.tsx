import type { Metadata } from "next";
import { AboutContainer } from "@/containers";

export const metadata: Metadata = {
  title: "About AMS | PT Ami Mandiri Sejahtera",
  description:
    "We connect energy and industrial supply opportunities with the requirements of qualified customers. Indonesian roots with international perspective.",
};

export default function AboutPage() {
  return <AboutContainer />;
}
