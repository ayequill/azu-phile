"use client";

import React, { createContext, useContext, useCallback } from "react";
import useLocalStorage from "@/hooks/use-local-storage";

export interface CartItem {
  id: string;
  name: string;
  shortName: string;
  price: number;
  quantity: number;
  image: string;
  slug?: string;
}

interface CartContextType {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;

  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;

  getItemQuantity: (id: string) => number;
  isItemInCart: (id: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "audiophile-cart",
    []
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const addItem = useCallback(
    (item: Omit<CartItem, "quantity"> & { quantity?: number }) => {
      const quantityToAdd = item.quantity || 1;

      setCartItems((prevItems) => {
        const existingItemIndex = prevItems.findIndex(
          (cartItem) => cartItem.id === item.id
        );

        if (existingItemIndex > -1) {
          const updatedItems = [...prevItems];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + quantityToAdd,
          };
          return updatedItems;
        } else {
          return [...prevItems, { ...item, quantity: quantityToAdd }];
        }
      });
    },
    [setCartItems]
  );

  const updateQuantity = useCallback(
    (id: string, newQuantity: number) => {
      if (newQuantity <= 0) {
        removeItem(id);
        return;
      }

      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    },
    [setCartItems]
  );

  const removeItem = useCallback(
    (id: string) => {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    },
    [setCartItems]
  );

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, [setCartItems]);

  const getItemQuantity = useCallback(
    (id: string): number => {
      const item = cartItems.find((cartItem) => cartItem.id === id);
      return item ? item.quantity : 0;
    },
    [cartItems]
  );

  const isItemInCart = useCallback(
    (id: string): boolean => {
      return cartItems.some((cartItem) => cartItem.id === id);
    },
    [cartItems]
  );

  const contextValue: CartContextType = {
    items: cartItems,
    totalItems,
    totalPrice,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    getItemQuantity,
    isItemInCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
