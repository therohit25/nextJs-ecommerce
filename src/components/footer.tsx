import { Box, Typography} from '@mui/material';

export default function Footer() {
  return (
   <Box
        sx={{
          backgroundColor: '#121212',
          color: '#fff',
          textAlign: 'center',
          py: 2,
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} MyShop | All rights reserved.
        </Typography>
      </Box>
  );
}
