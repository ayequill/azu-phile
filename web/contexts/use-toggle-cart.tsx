'use client';

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

interface CartContextProps {
  isCartOpen: boolean;
  toggleCart: (event?: React.MouseEvent) => void;
  cartRef: React.RefObject<HTMLDivElement | null>;
  closeCart: () => void;
}

const CartContext = createContext<
  CartContextProps | undefined
>(undefined);

export const CartProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement | null>(null);

  const toggleCart = (event?: React.MouseEvent) => {
    if (event) event.stopPropagation();
    setIsCartOpen((prev) => !prev);
  };

  const closeCart = () => setIsCartOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target as Node)
      ) {
        closeCart();
      }
    };

    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen]);

  return (
    <CartContext.Provider
      value={{ isCartOpen, toggleCart, cartRef, closeCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      'useCart must be used within a CartProvider'
    );
  }
  return context;
};