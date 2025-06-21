import { Metadata } from "next";
import PageBanner from "@/components/common/page-banner";
import ProductListingCard from "@/components/products/product-listing-card";
import { getProducts } from "@/actions/products";
import { CategoriesSection } from "@/components/home/categories-section";
import About from "@/components/home/about";

export const metadata: Metadata = {
  title: "Earphones",
};

export default async function EarphonesPage() {
  const products = await getProducts();
  const earphones = products.data.filter(
    (product) => product.category.name === "earphones"
  );
  return (
    <div>
      <PageBanner title="Earphones" />
      <div className="max-w-7xl mx-auto py-8 px-4 md:py-12 flex flex-col gap-8">
        {earphones.map((product, index) => (
          <ProductListingCard
            key={product.id}
            title={product.name}
            description={product.description}
            image={product.image.url}
            isNew={product.isNew}
            reverse={index % 2 === 1}
            href={`/earphones/${product.slug}?d=${product.documentId}`}
          />
        ))}
      </div>
      <CategoriesSection />
      <About />
    </div>
  );
}
