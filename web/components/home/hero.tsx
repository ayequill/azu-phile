"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const MotionDiv = motion.div;

  return (
    <MotionDiv
      className="relative bg-black z-10 overflow-hidden pt-24 sm:pt-32 lg:pt-40 pb-28 text-center lg:text-left min-h-[800px] flex md:items-center font-manrope"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <MotionDiv
        className="absolute inset-0 w-full h-full md:bg-cover bg-contain md:bg-center bg-no-repeat
                   bg-[url('/assets/home/mobile/image-header.jpg')]
                   sm:bg-[url('/assets/home/tablet/image-header.jpg')]
                   lg:bg-[url('/assets/home/desktop/image-hero.jpg')]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent lg:from-black/90 lg:via-black/60 lg:to-black/20" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

      <MotionDiv
        className="container mx-auto px-6 max-w-6xl relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
      >
        <div className="max-w-md mx-auto lg:mx-0">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-wider leading-tight max-w-[15ch] mx-auto lg:mx-0 drop-shadow-lg uppercase">
            <strong className="block text-sm font-normal text-white/70 uppercase mb-4 tracking-[0.625rem]">
              New Product
            </strong>
            XX99 Mark II Headphones
          </h1>

          <p className="text-white/80 text-sm leading-relaxed max-w-[320px] mx-auto lg:mx-0 mb-10 drop-shadow-sm">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <Button
            asChild
            className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/headphones/xx99-mark-two-headphones?d=c3pnl4zd38ne5lnv7p5wz8sl">
              See Product
            </Link>
          </Button>
        </div>
      </MotionDiv>
    </MotionDiv>
  );
}
