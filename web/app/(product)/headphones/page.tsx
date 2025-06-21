import { Metadata } from "next";
import PageBanner from "@/components/common/page-banner";
import ProductListingCard from "@/components/common/product-listing-card";

export const metadata: Metadata = {
  title: "Headphones",
};

export default function HeadphonesPage() {
  return (
    <div>
      <PageBanner title="Headphones" />
      <div className="max-w-7xl mx-auto py-8 px-4 md:py-12">
        <ProductListingCard
          isNew
          title="XX99 Mark II Headphones"
          description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          image="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
        />
        <ProductListingCard
          isNew
          title="XX99 Mark II Headphones"
          description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          image="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
          reverse
        />
      </div>
    </div>
  );
}
