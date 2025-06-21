import { Metadata } from "next";
import PageBanner from "@/components/common/page-banner";
import ProductListingCard from "@/components/products/product-listing-card";
import { getProducts } from "@/actions/products";
import { CategoriesSection } from "@/components/home/categories-section";
import About from "@/components/home/about";

export const metadata: Metadata = {
  title: "Speakers",
};

export default async function SpeakersPage() {
  const products = await getProducts();
  const speakers = products.data.filter(
    (product) => product.category.name === "speakers"
  );

  return (
    <div>
      <PageBanner title="Speakers" />
      <div className="max-w-7xl mx-auto py-8 px-4 md:py-12 flex flex-col gap-8">
        {speakers.map((product, index) => (
          <ProductListingCard
            key={product.id}
            title={product.name}
            description={product.description}
            image={product.image.url}
            isNew={product.isNew}
            reverse={index % 2 === 1}
            href={`/speakers/${product.slug}?d=${product.documentId}`}
          />
        ))}
      </div>
      <CategoriesSection />
      <About />
    </div>
  );
}
