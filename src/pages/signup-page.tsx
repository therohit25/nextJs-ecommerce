'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/helpers/firebaseConfig';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  CircularProgress,
} from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCustomRouter } from '@/hooks/useCustomRouter';

const SignupPageView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useCustomRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      toast.success('Signup successful!');
      router.push('/login'); 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error('Invalid credentials!..');
    }
    setLoading(false);
  };

  return (
    <Container maxWidth='sm' sx={{ marginY: '2rem' }}>
      <Box
        sx={{
          padding: '2rem',
          bgcolor: '#2c2c2c', 
          color: '#fff',
          borderRadius: 2,
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant='h4' gutterBottom textAlign='center'>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <TextField
            label='Email'
            fullWidth
            margin='normal'
            InputProps={{
              sx: { bgcolor: '#424242', color: '#fff', borderRadius: 1 },
            }} 
            InputLabelProps={{ sx: { color: '#bbb' } }} 
            {...register('email', { required: 'Email is required' })}
            error={!!errors.email}
            helperText={errors.email?.message as string}
          />
          <TextField
            label='Password'
            type='password'
            fullWidth
            margin='normal'
            InputProps={{
              sx: { bgcolor: '#424242', color: '#fff', borderRadius: 1 },
            }}
            InputLabelProps={{ sx: { color: '#bbb' } }}
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message as string}
          />
          <TextField
            label='Confirm Password'
            type='password'
            fullWidth
            margin='normal'
            InputProps={{
              sx: { bgcolor: '#424242', color: '#fff', borderRadius: 1 },
            }}
            InputLabelProps={{ sx: { color: '#bbb' } }}
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: (value, { password }) =>
                value === password || 'Passwords do not match',
            })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message as string}
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            disabled={loading}
            sx={{
              mt: 2,
              bgcolor: '#f0a500',
              '&:hover': { bgcolor: '#e69500' },
            }}
          >
            {loading ? (
              <CircularProgress size={24} color='inherit' />
            ) : (
              'Sign Up'
            )}
          </Button>
        </form>
        <Typography
          variant='body2'
          sx={{ mt: 2, textAlign: 'center', color: '#bbb' }}
        >
          Already have an account?{' '}
          <a href='/login' style={{ color: '#f0a500', textDecoration: 'none' }}>
            Login
          </a>
        </Typography>
      </Box>
      <ToastContainer />
    </Container>
  );
};

export default SignupPageView;
