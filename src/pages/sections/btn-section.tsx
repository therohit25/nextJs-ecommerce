'use client'

import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/hooks/useCart';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { Product } from '@/response-types/product';
import { Stack, Button } from '@mui/material';
import React from 'react';

const BtnSection = ({ product }: { product: Product}) => {
  const { addToCart } = useCart()
  const {user} = useAuth();
  const onClickeHandler = () => {
    if (!user) {
      router.push('/login');
      return;
    }
    addToCart(product);
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
  const buyNowHandler = () => {
    if (!user) {
      router.push('/login');
      return;
    }
    addToCart(product);
    window.scrollTo({top: 0, behavior: 'smooth'});
    router.push('/checkout')
  };
  
  const router  = useCustomRouter();
  return (
    <Stack direction='row' spacing={2} sx={{ p: 2 }}>
      <Button variant='contained' color='primary' onClick={buyNowHandler}>
        Buy Now
      </Button>
      <Button variant='outlined' color='secondary' onClick={onClickeHandler}>
        Add to Cart
      </Button>
    </Stack>
  );
};

export default BtnSection;
