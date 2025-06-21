import * as React from "react";
import { ProductCard } from "../ui/product-card";

const categories = [
  {
    name: "Headphones",
    image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
    href: "/headphones",
  },
  {
    name: "Speakers",
    image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    href: "/speakers",
  },
  {
    name: "Earphones",
    image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
    href: "/earphones",
  },
];

export function CategoriesSection() {
  return (
    <section className="py-36 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {categories.map((category) => (
            <ProductCard
              key={category.name}
              category={category.name}
              image={category.image}
              href={category.href}
              className="h-52 md:h-60"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
