"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/common/product-card";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
    },
  },
};

export function CategoriesSection() {
  return (
    <section className="py-36 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
            amount: 0.2,
          }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <ProductCard
                category={category.name}
                image={category.image}
                href={category.href}
                className="h-52 md:h-60"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
