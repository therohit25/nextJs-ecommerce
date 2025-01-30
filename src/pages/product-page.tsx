import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';
import React from 'react';
import BtnSection from './sections/btn-section';
import { Product } from '@/response-types/product';

const ProductPageView = ({ product }: { product: Product }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        p: 3,
        backgroundColor: 'background.default',
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          width: '100%',
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <CardMedia
          component='img'
          height='400'
          image={product?.images?.[0] || '/placeholder.png'}
          alt={product?.title}
        />
        <CardContent>
          <Typography variant='h4' component='h1' gutterBottom>
            {product?.title}
          </Typography>
          <Typography variant='body1' color='text.secondary' paragraph>
            {product?.description}
          </Typography>
          <Typography variant='h6' color='text.primary' gutterBottom>
            Price: ${product?.price}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Category: {product?.category?.name || 'N/A'}
          </Typography>
        </CardContent>
        <BtnSection product={product} />
      </Card>
    </Box>
  );
};

export default ProductPageView;
