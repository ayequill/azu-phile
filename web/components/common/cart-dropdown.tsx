"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/use-toggle-cart";
import { useCartContext } from "@/contexts/cart-context";
import { useEffect } from "react";
import Link from "next/link";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
    },
  },
};

const dropdownVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: -20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
    },
  },
};

const totalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
    },
  },
};

const checkoutButtonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
    },
  },
};

export default function CartDropdown() {
  const { isCartOpen, cartRef, closeCart } = useCart();
  const {
    items: cartItems,
    totalItems,
    totalPrice,
    updateQuantity,
    clearCart,
  } = useCartContext();

  useEffect(() => {
    if (isCartOpen) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          closeCart();
        }
      };

      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);

      return () => {
        document.body.style.overflow = "unset";
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isCartOpen, closeCart]);

  const removeAllItems = () => {
    clearCart();
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/50 transition-opacity duration-300"
            onClick={closeCart}
            aria-hidden="true"
          />

          <div className="fixed inset-x-0 inset-y-[1%] md:inset-x-[15%] flex justify-end">
            <motion.div
              ref={cartRef}
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative mt-20 mr-4 w-80 h-fit bg-white rounded-lg shadow-2xl transform transition-all duration-300 ease-out"
              role="dialog"
              aria-modal="true"
              aria-labelledby="cart-title"
            >
              <div className="p-6">
                <motion.div
                  variants={headerVariants}
                  className="flex justify-between items-center mb-6"
                >
                  <h2
                    id="cart-title"
                    className="text-lg font-bold text-black tracking-wider"
                  >
                    CART ({totalItems})
                  </h2>
                  {cartItems.length > 0 && (
                    <button
                      onClick={removeAllItems}
                      className="text-gray-500 cursor-pointer hover:text-orange-400 text-sm underline transition-colors rounded"
                    >
                      Remove all
                    </button>
                  )}
                </motion.div>

                {cartItems.length > 0 ? (
                  <>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      className="space-y-6 mb-6"
                    >
                      {cartItems.map((item, index) => (
                        <motion.div
                          key={item.id}
                          variants={itemVariants}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center gap-4"
                        >
                          <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-black text-sm uppercase tracking-wide">
                              {item.shortName}
                            </h3>
                            <p className="text-gray-500 text-sm font-bold">
                              $ {item.price.toLocaleString()}
                            </p>
                          </div>

                          <div className="flex items-center bg-gray-100 rounded">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  Math.max(0, item.quantity - 1)
                                )
                              }
                              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-orange-400 font-bold transition-colors cursor-pointer"
                              aria-label={`Decrease quantity of ${item.shortName}`}
                            >
                              -
                            </button>
                            <span className="w-8 text-center text-sm font-bold text-black">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-orange-400 font-bold transition-colors cursor-pointer"
                              aria-label={`Increase quantity of ${item.shortName}`}
                            >
                              +
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div
                      variants={totalVariants}
                      className="flex justify-between items-center mb-6"
                    >
                      <span className="text-gray-500 text-sm uppercase tracking-wider">
                        TOTAL
                      </span>
                      <span className="text-black font-bold text-lg">
                        $ {totalPrice.toLocaleString()}
                      </span>
                    </motion.div>

                    <motion.div variants={checkoutButtonVariants}>
                      <Link
                        href="/checkout"
                        onClick={closeCart}
                        className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold py-4 px-6 uppercase tracking-wider transition-colors cursor-pointer w-full flex justify-center items-center"
                      >
                        CHECKOUT
                      </Link>
                    </motion.div>
                  </>
                ) : (
                  <motion.div
                    variants={itemVariants}
                    className="text-center py-8"
                  >
                    <p className="text-gray-500 mb-4">Your cart is empty</p>
                    <button
                      onClick={closeCart}
                      className="text-orange-400 hover:text-orange-500 font-bold uppercase tracking-wider rounded"
                    >
                      Continue Shopping
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
