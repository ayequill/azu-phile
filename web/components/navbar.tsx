"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationLinks } from "@/lib/nav-links";
import { useCart } from "@/contexts/use-toggle-cart";
import CartDropdown from "@/components/common/cart-dropdown";
import { ProductCard } from "@/components/common/product-card";
import { useCartContext } from "@/contexts/cart-context";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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

const AnimatedProductCard = ({
  category,
  image,
  href,
  index,
  onClose,
}: {
  category: string;
  image: string;
  href: string;
  index: number;
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: [0.25, 0.25, 0, 1],
      }}
      onClick={onClose}
    >
      <ProductCard
        category={category}
        image={image}
        href={href}
        className="h-44 md:h-52"
      />
    </motion.div>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleCart } = useCart();
  const { items } = useCartContext();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.height = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.height = "auto";
    };
  }, [isMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="bg-black text-white font-manrope relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-orange-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">
                  {isMenuOpen ? "Close main menu" : "Open main menu"}
                </span>
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.25, 0, 1] }}
                >
                  {isMenuOpen ? (
                    <svg
                      className="block h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </motion.div>
              </button>
            </div>

            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/assets/shared/desktop/logo.svg"
                  alt="Audiophile"
                  width={144}
                  height={25}
                  className="h-6 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-white hover:text-orange-400 px-3 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-200 font-manrope",
                      isActive(link.href) && "text-orange-400"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center relative">
              <button
                onClick={toggleCart}
                className="text-white hover:text-orange-400 p-2 transition-colors duration-200 relative"
              >
                <span className="sr-only">Shopping cart</span>
                <Image
                  src="/assets/shared/desktop/icon-cart.svg"
                  alt="Cart"
                  width={23}
                  height={20}
                  className="w-6 h-6"
                />
                {items && items?.length > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-orange-400 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold"
                  >
                    {items.length}
                  </motion.span>
                )}
              </button>
              <CartDropdown />
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.25, 0, 1] }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMenu}
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.25, 0, 1],
              }}
              className="fixed top-20 left-0 right-0 bg-white z-40 md:hidden rounded-b-lg mx-4 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto"
            >
              <div className="px-6 pt-16 pb-8">
                <div className="space-y-8 mb-8">
                  {categories.map((category, index) => (
                    <AnimatedProductCard
                      key={category.name}
                      category={category.name}
                      image={category.image}
                      href={category.href}
                      index={index}
                      onClose={closeMenu}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
