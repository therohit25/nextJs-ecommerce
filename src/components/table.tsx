import { Product } from '@/response-types/product'
import { Paper, Box, Typography } from '@mui/material'
import React from 'react'

const CartTable = ({cart}:{cart:Product[]}) => {
  return (
      <Paper
          sx={{
            bgcolor: '#1e1e1e',
            color: '#fff',
            width: { xs: '100%', md: '400px' },
            maxHeight: '50vh',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '12px',
              fontWeight: 'bold',
              borderBottom: '1px solid #444',
            }}
          >
            <Typography sx={{ color: '#fff' }}>Item</Typography>
            <Typography sx={{ color: '#fff' }}>Price</Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              maxHeight: '35vh',
            }}
          >
            {cart.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '12px',
                  borderBottom: '1px solid #333',
                }}
              >
                <Typography sx={{ color: '#fff' }}>{item.title}</Typography>
                <Typography sx={{ color: '#f0a500', fontWeight: 'bold' }}>
                  ${item.price}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '12px',
              fontWeight: 'bold',
              borderTop: '1px solid #444',
            }}
          >
            <Typography sx={{ color: '#fff' }}>Total</Typography>
            <Typography sx={{ color: '#f0a500', fontWeight: 'bold' }}>
              ${cart.reduce((total, item) => total + item.price, 0)}
            </Typography>
          </Box>
        </Paper>
  )
}

export default CartTable