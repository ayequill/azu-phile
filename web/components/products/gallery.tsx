"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GalleryItem } from "@/types/product";
import Image from "next/image";

interface GalleryProps {
  gallery: GalleryItem[];
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

const leftColumnVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
      staggerChildren: 0.15,
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

const largeImageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    x: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
      delay: 0.2,
    },
  },
};

export default function Gallery({ gallery }: GalleryProps) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 md:gap-8 px-4 lg:px-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-50px",
        amount: 0.2,
      }}
    >
      {gallery && (
        <motion.div
          className={cn("col-span-1 flex flex-col gap-4")}
          variants={leftColumnVariants}
        >
          {gallery.slice(0, 2).map((item, index) => (
            <motion.div
              key={item.id}
              className={cn("col-span-1")}
              variants={imageVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.25, 0, 1],
                  delay: index * 0.1,
                }}
              >
                <Image
                  src={item.image.url}
                  alt={item.image.alternativeText || ""}
                  width={445}
                  height={330}
                  className="rounded-lg h-auto object-cover aspect-square md:aspect-3/2"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )}
      {gallery &&
        gallery.slice(2).map((item, index) => (
          <motion.div
            key={item.id}
            className={cn("col-span-2 w-full mt-4 md:mt-0")}
            variants={largeImageVariants}
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.99 }}
          >
            <motion.div
              initial={{ scale: 1.03 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.25, 0, 1],
                delay: 0.3 + index * 0.1,
              }}
            >
              <Image
                src={item.image.url}
                alt={item.image.alternativeText || ""}
                width={900}
                height={635}
                className="rounded-lg h-full object-cover md:aspect-3/2"
              />
            </motion.div>
          </motion.div>
        ))}
    </motion.div>
  );
}
