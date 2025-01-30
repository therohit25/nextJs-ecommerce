'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Stack, TextField, Button, Typography, Box } from '@mui/material';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import CartTable from '@/components/table';
import { useCart } from '@/hooks/useCart';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from '@/components/protected-route';

const CheckoutPageView = () => {
  const { cart, emptyCart } = useCart();

  const schema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    postalCode: Yup.string().required('Postal code is required'),
    country: Yup.string().required('Country is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmit = () => {
    toast.success('Form submitted successfully!');
    setValue('address', '');
    setValue('email', '');
    setValue('fullName', '');
    setValue('postalCode', '');
    setValue('country', '');
    setValue('city', '');
    emptyCart();
  };

  return (
    <ProtectedRoute>
      <Stack
        direction={'row'}
        spacing={2}
        sx={{ p: 2 }}
        justifyContent={'space-around'}
        alignItems={'center'}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 600,
            margin: 'auto',
            padding: 4,
            bgcolor: '#121212',
          }}
        >
          <Typography
            variant='h4'
            color='white'
            gutterBottom
            textAlign={'center'}
          >
            Checkout Form
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              <TextField
                label='Full Name'
                variant='outlined'
                fullWidth
                {...register('fullName')}
                error={!!errors.fullName}
                helperText={errors.fullName ? errors.fullName.message : ''}
                sx={{ backgroundColor: '#fff', borderRadius: 1 }}
              />

              <TextField
                label='Email'
                variant='outlined'
                fullWidth
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
                sx={{ backgroundColor: '#fff', borderRadius: 1 }}
              />

              <TextField
                label='Address'
                variant='outlined'
                fullWidth
                {...register('address')}
                error={!!errors.address}
                helperText={errors.address ? errors.address.message : ''}
                sx={{ backgroundColor: '#fff', borderRadius: 1 }}
              />

              <TextField
                label='City'
                variant='outlined'
                fullWidth
                {...register('city')}
                error={!!errors.city}
                helperText={errors.city ? errors.city.message : ''}
                sx={{ backgroundColor: '#fff', borderRadius: 1 }}
              />

              <TextField
                label='Postal Code'
                variant='outlined'
                fullWidth
                {...register('postalCode')}
                error={!!errors.postalCode}
                helperText={errors.postalCode ? errors.postalCode.message : ''}
                sx={{ backgroundColor: '#fff', borderRadius: 1 }}
              />

              <TextField
                label='Country'
                variant='outlined'
                fullWidth
                {...register('country')}
                error={!!errors.country}
                helperText={errors.country ? errors.country.message : ''}
                sx={{ backgroundColor: '#fff', borderRadius: 1 }}
              />

              <Button
                type='submit'
                variant='contained'
                color='primary'
                sx={{ padding: '10px 20px', marginTop: 2 }}
              >
                Submit
              </Button>
            </Stack>
          </form>
          <ToastContainer />
        </Box>
        {cart.length > 0 && <CartTable cart={cart} />}
      </Stack>
    </ProtectedRoute>
  );
};

export default CheckoutPageView;
