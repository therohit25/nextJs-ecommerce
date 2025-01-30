import { Box, Typography, Button, Stack } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #121212, #333333)',
        color: 'white',
        textAlign: 'center',
        p: 3,
      }}
    >
      <Stack spacing={3} alignItems="center">
        <Typography variant="h2" fontWeight="bold">
          Welcome to MyShop
        </Typography>


        <Typography variant="h6" maxWidth="600px">
          Explore a wide variety of products that suit your needs. Enjoy an exceptional shopping
          experience with us!
        </Typography>

        <Stack direction="row" spacing={2}>
          <Link href="/products" passHref>
            <Button
              variant="contained"
              size="large"
              sx={{
                background: '#4caf50',
                color: '#fff',
                '&:hover': {
                  background: '#388e3c',
                },
              }}
            >
              Shop Now
            </Button>
          </Link>
          <Link href="/signup" passHref>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: '#81c784',
                color: '#81c784',
                '&:hover': {
                  borderColor: '#4caf50',
                  color: '#4caf50',
                },
              }}
            >
              SignUp
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}
