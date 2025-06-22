"use client";

import { motion } from "framer-motion";
import { StrapiProduct } from "@/types/product";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface SuggestedProductCardProps {
  product: StrapiProduct;
  index?: number;
}

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

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 40,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
      delay: 0.1,
    },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
      delay: 0.2,
    },
  },
};

export default function SuggestedProductCard({
  product,
  index = 0,
}: SuggestedProductCardProps) {
  return (
    <motion.div
      className="flex flex-col gap-4 items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-50px",
        amount: 0.2,
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex flex-col gap-4 items-center justify-center lg:max-w-[350px] md:max-w-[245px]">
        <motion.div
          variants={imageVariants}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.25, 0, 1],
              delay: index * 0.1,
            }}
          >
            <Image
              src={product.image.url}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg"
            />
          </motion.div>
        </motion.div>

        <motion.p
          className="text-center text-2xl font-bold uppercase"
          variants={titleVariants}
        >
          {product.name}
        </motion.p>

        <motion.div variants={buttonVariants}>
          <Button
            className="w-fit cursor-pointer uppercase hover:scale-105 active:scale-95 transition-transform duration-200"
            asChild
          >
            <Link
              href={`/${product.category.name.toLowerCase()}/${
                product.slug
              }?d=${product.documentId}`}
            >
              See Product
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
