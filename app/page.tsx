import Hero from "@/components/home/hero";
import { CategoriesSection } from "@/components/home/categories-section";
import ProductHighlight from "@/components/home/product-highlight-zx9";
import ProductHighlightZx7 from "@/components/home/product-highlight-zx7";
import ProductHighlightYx1 from "@/components/home/product-highlight-yx1";
import About from "@/components/home/about";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <CategoriesSection />
      <ProductHighlight />
      <ProductHighlightZx7 />
      <ProductHighlightYx1 />
      <About />
    </main>
  );
}
