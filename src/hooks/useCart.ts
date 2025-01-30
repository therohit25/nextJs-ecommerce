import { CartContext } from '@/contexts/CartContext';
import { useContext } from 'react';

export const useCart = () =>{
    const  {cart,addToCart,removeFromCart,emptyCart} = useContext(CartContext);
    return {cart,addToCart,removeFromCart,emptyCart};
}