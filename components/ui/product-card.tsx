import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  category: string;
  image: string;
  href: string;
  className?: string;
}

export function ProductCard({
  category,
  image,
  href,
  className,
}: ProductCardProps) {
  return (
    <div
      className={cn(
        "relative bg-gray-100 rounded-lg group cursor-pointer transition-all duration-300 max-h-[280px] flex flex-col justify-end",
        className
      )}
    >
      <Link href={href} className="">
        <div className="h-40 md:h-48 flex items-center justify-center absolute top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <div className=" w-32 h-32 md:w-40 md:h-40">
            <Image
              src={image}
              alt={category}
              fill
              className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 160px, 200px"
            />
          </div>
        </div>

        <div className="px-6 pb-8 pt-2 flex flex-col items-center text-center">
          <h3 className="text-base md:text-lg font-bold tracking-[0.1em] uppercase text-black mb-4 leading-tight">
            {category}
          </h3>

          <div className="flex items-center text-sm font-bold tracking-wider uppercase text-gray-500 group-hover:text-[#D87D4A] transition-colors duration-200">
            <span>Shop</span>
            <svg
              className="ml-3 h-3 w-3 text-[#D87D4A] transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}
