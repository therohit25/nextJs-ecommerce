'use client'
import { Product } from '@/response-types/product';
import { createContext, useEffect, useState } from 'react';

export interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  emptyCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  emptyCart: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  useEffect(()=>{
    setCart(JSON.parse(localStorage.getItem('cart') ?? ''))
  },[])
  const addToCart = (product: Product) => {
    setCart(Array.from(new Set([...cart, product])) as  Product[]);
    localStorage.setItem('cart', JSON.stringify(Array.from(new Set([...cart, product]))));
  };
  const removeFromCart = (productId: number) => {
    setCart(cart.filter((product) => product.id !== productId));
    localStorage.setItem('cart', JSON.stringify(cart.filter((product) => product.id !== productId)));
  };
  const emptyCart = () => {
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
