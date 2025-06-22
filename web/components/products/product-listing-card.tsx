"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ProductListingCardProps {
  title: string;
  description: string;
  image: string;
  isNew: boolean;
  reverse?: boolean;
  href: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
      staggerChildren: 0.3,
      delayChildren: 0.2,
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

const contentVariants = {
  hidden: {
    opacity: 0,
    x: 50,
    y: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
    },
  },
};

const contentVariantsReverse = {
  hidden: {
    opacity: 0,
    x: -50,
    y: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
    },
  },
};

const badgeVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
      delay: 0.2,
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

const descriptionVariants = {
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
      delay: 0.2,
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
      delay: 0.3,
    },
  },
};

const ProductListingCard = ({
  title,
  description,
  image,
  isNew,
  reverse,
  href,
}: ProductListingCardProps) => {
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between font-manrope"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-50px",
        amount: 0.2,
      }}
    >
      <motion.div
        className={cn(
          "max-w-[330px] max-h-[350px] md:max-w-[689px] lg:max-w-[540px] md:max-h-[350px] lg:max-h-[560px] mx-auto w-full bg-[#F1F1F1] p-6 flex items-center justify-center rounded-lg overflow-hidden",
          reverse && "lg:order-2"
        )}
        variants={imageVariants}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
        >
          <Image
            src={image}
            alt="Product"
            width={500}
            height={500}
            className="max-w-[220px] lg:max-w-[350px] object-cover"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className={cn(
          "flex flex-col gap-4 mx-auto max-w-[445px] justify-center",
          reverse && "lg:order-1"
        )}
        variants={reverse ? contentVariantsReverse : contentVariants}
      >
        <div className="flex flex-col gap-2">
          {isNew && (
            <motion.span
              className="text-[#D87D4A] text-sm font-bold uppercase leading-normal tracking-[10px] text-center lg:text-left"
              variants={badgeVariants}
            >
              New Product
            </motion.span>
          )}
          <motion.p
            className="text-[28px] font-bold uppercase leading-normal tracking-[-1px] line-clamp-2 text-center lg:text-left"
            variants={titleVariants}
          >
            {title}
          </motion.p>
        </div>
        <div className="flex flex-col gap-8 items-center lg:items-start">
          <motion.p
            className="text-[15px] font-medium leading-normal opacity-50 text-center lg:text-left"
            variants={descriptionVariants}
          >
            {description}
          </motion.p>
          <motion.div variants={buttonVariants}>
            <Link
              href={href}
              className="w-fit bg-[#D87D4A] hover:bg-[#FBAF85] transition-all duration-300 text-white px-8 py-2 text-sm font-bold uppercase leading-normal tracking-[-0.11px] rounded shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              See Product
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductListingCard;
