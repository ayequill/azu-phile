"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import styles from "./product-highlight-zx9.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const speakerVariants = {
  hidden: {
    scale: 0.6,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
    },
  },
};

const headingVariants = {
  hidden: {
    opacity: 0,
    x: -50,
    y: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
    },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
    },
  },
};

export default function ProductHighlight() {
  return (
    <section className="lg:py- px-4 md:px-6 lg:px-8">
      <motion.div
        className="bg-[#D87D4A] max-w-7xl mx-auto my-2 rounded-lg font-manrope overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-100px",
          amount: 0.2,
        }}
      >
        <div className="lg:px-8 min-h-[700px] md:min-h-[700px] lg:min-h-[560px] bg-[url('/assets/home/desktop/pattern-circles.svg')] lg:bg-size-[944px_944px] bg-size-[500px_500px] lg:bg-position-[top_20%_left_-40%] bg-position-[top_-70%_center] bg-no-repeat grid grid-cols-1 lg:grid-cols-2">
          <motion.div
            className={styles.speakerBackground}
            variants={speakerVariants}
          />

          <div className="mx-auto flex items-center justify-center">
            <div className="flex flex-start items-center lg:items-start justify-center max-w-[300px] flex-col gap-8">
              <motion.h2
                className="text-white text-[56px] text-center lg:text-left font-bold uppercase leading-[56px]"
                variants={headingVariants}
              >
                ZX9 <br /> SPEAKER
              </motion.h2>

              <motion.p
                className="text-white text-sm text-center lg:text-left font-medium"
                variants={textVariants}
              >
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </motion.p>

              <motion.div variants={buttonVariants}>
                <Button
                  asChild
                  className="bg-black text-white hover:bg-[#4C4C4C] transition-colors duration-300"
                >
                  <Link
                    href="/speakers/zx9-speaker?d=k78nz8fe6c6t0ml7n2ryqwnv"
                    className="cursor-pointer text-white"
                  >
                    See Product
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
