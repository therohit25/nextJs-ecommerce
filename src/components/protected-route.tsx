'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import {  CircularProgress, Stack } from '@mui/material';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user ,loading} = useAuth();
  const router = useCustomRouter();

  useEffect(() => {
    if (!user && !loading) {
      router.push('/login');
    }
  }, [user]);

  if (loading) {
    return (
      <Stack
        minHeight={'70dvh'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <CircularProgress size={'25px'} />
      </Stack>
    );
  }

  return children;
};

export default ProtectedRoute;
