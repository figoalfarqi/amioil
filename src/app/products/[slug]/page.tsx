import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailContainer } from "@/containers";
import { PRODUCTS } from "@/data/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!product) {
    return {
      title: "Product Not Found | PT Ami Mandiri Sejahtera",
    };
  }

  return {
    title: `${product.title} | PT Ami Mandiri Sejahtera`,
    description: `${product.title} - ${product.description} Applications: ${product.applications}`,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!product) {
    notFound();
  }

  return <ProductDetailContainer slug={slug} />;
}
