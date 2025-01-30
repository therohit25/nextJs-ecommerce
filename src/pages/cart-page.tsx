'use client';

import { useCart } from '@/hooks/useCart';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Stack,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CartTable from '@/components/table';
import Link from 'next/link';
import ProtectedRoute from '@/components/protected-route';

const CartPageView = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <ProtectedRoute>
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        padding: '5rem 1rem',
        bgcolor: '#121212',
        minHeight: '70dvh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          maxHeight: '100%',
          overflowY: 'scroll',
          flexShrink: 0,  
        }}
      >
        {cart.length === 0 ? (
          <Typography variant='h6' sx={{ color: '#aaa' }}>
            Your cart is empty.
          </Typography>
        ) : (
          cart.map((item) => (
            <Card
              key={item.id}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                bgcolor: '#1e1e1e',
                color: '#fff',
                boxShadow: 3,
                borderRadius: 2,
                width: { xs: '100%', md: '500px' },
                flexShrink: 0,
              }}
            >
              <CardMedia
                component='img'
                image={item?.images?.[0]}
                alt={item.title}
                sx={{
                  width: 150,
                  height: 150,
                  objectFit: 'cover',
                  borderRadius: '8px 0 0 8px',
                }}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography
                  variant='h6'
                  fontWeight='bold'
                  sx={{
                    display: '-webkit-flex',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    color: '#f0a500',
                  }}
                >
                  {item?.title}
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    color: '#bbb',
                    mt: 1,
                    display: '-webkit-flex',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {item?.description.substring(0, 80)}...
                </Typography>
                <Typography
                  variant='h6'
                  sx={{ mt: 1, fontWeight: 'bold', color: '#f0a500' }}
                >
                  ${item?.price}
                </Typography>
              </CardContent>

              <IconButton color='error' onClick={() => removeFromCart(item?.id)}>
                <DeleteIcon />
              </IconButton>
            </Card>
          ))
        )}
      </Box>
      {cart.length > 0 && (
        <Stack>
          <CartTable cart={cart} />
          <Link href='/checkout' passHref style={{ textDecoration: 'none',backgroundColor: '#f0a500',color: '#fff',padding: '0.5rem 1rem',borderRadius: '4px',fontWeight: 'bold',textAlign: 'center',cursor: 'pointer',}}>
            Checkout
          </Link>
        </Stack>
      )}
    </Box>
    </ProtectedRoute>
  );
};

export default CartPageView;
