'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';
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

const LoginPageView = () => {
 const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useCustomRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast.success('Login successful!');
      setValue('email', '');
      setValue('password', '');
      router.push('/cart');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    } catch (error: any) {
      toast.error('❌ ' + 'Invalid Crendentials');
    }
    setLoading(false);
  };

  return (
    <Container maxWidth='sm' sx={{ marginY: 5 }}>
      <Box
        sx={{
          bgcolor: '#1e1e1e',
          color: '#fff',
          borderRadius: 2,
          boxShadow: 3,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant='h4' gutterBottom textAlign='center'>
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <TextField
            label='Email'
            fullWidth
            margin='normal'
            InputProps={{
              sx: { bgcolor: '#333', color: '#fff', borderRadius: 1 },
            }}
            InputLabelProps={{ sx: { color: '#bbb' } }}
            autoFocus
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
              sx: { bgcolor: '#333', color: '#fff', borderRadius: 1 },
            }}
            InputLabelProps={{ sx: { color: '#bbb' } }}
            {...register('password', { required: 'Password is required' })}
            error={!!errors.password}
            helperText={errors.password?.message as string}
          />
          <Button
            type='submit'
            variant='contained'
            fullWidth
            disabled={loading}
            sx={{
              mt: 2,
              bgcolor: '#f0a500',
              '&:hover': { bgcolor: '#e69500' },
            }}
          >
            {loading ? <CircularProgress size={24} color='inherit' /> : 'Login'}
          </Button>
        </form>
        <Typography
          variant='body2'
          sx={{ mt: 2, textAlign: 'center', color: '#bbb' }}
        >
          {"Don't"} have an account?{' '}
          <a
            href='/signup'
            style={{ color: '#f0a500', textDecoration: 'none' }}
          >
            Sign up
          </a>
        </Typography>
      </Box>
      <ToastContainer position='bottom-right' autoClose={3000} />
    </Container>
  );
}

export default LoginPageView