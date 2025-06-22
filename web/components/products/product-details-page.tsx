import ProductCartDetails from "@/components/common/product-cart-details";
import ProductFeatures from "@/components/products/product-features";
import InTheBox from "@/components/products/in-the-box";
import Gallery from "@/components/products/gallery";
import { StrapiProduct } from "@/types/product";
import SuggestedProductCard from "@/components/products/suggested-product-card";
import { CategoriesSection } from "@/components/home/categories-section";
import About from "@/components/home/about";

interface ProductDetailsPageProps {
  product: StrapiProduct;
  suggestedProducts: StrapiProduct[];
}

export default function ProductDetailsPage({
  product,
  suggestedProducts,
}: ProductDetailsPageProps) {
  return (
    <div>
      <ProductCartDetails
        id={product.id.toString()}
        shortName={product.name.slice(0, 20)}
        cartImage={product.image.url}
        title={product.name}
        description={product.description}
        image={product.image.url}
        isNew={product.isNew}
        price={product.price}
      />
      <div className="flex flex-col lg:flex-row lg:gap-20 gap-8 py-12 px-4 lg:px-0">
        <ProductFeatures features={product.features} />
        <InTheBox includes={product.includes} />
      </div>
      <Gallery gallery={product.gallery} />
      <h1 className="text-center text-2xl font-bold pt-12 pb-8 px-4 lg:px-0 uppercase">
        You may also like
      </h1>
      <div className="flex flex-col md:flex-row lg:gap-20 gap-8 py-12 px-4 lg:px-0">
        {suggestedProducts?.slice(0, 3).map((p, index) => (
          <SuggestedProductCard key={p.id} product={p} index={index} />
        ))}
      </div>
      <CategoriesSection />
      <About />
    </div>
  );
}
