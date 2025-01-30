'use client';
import './globals.css';
import { ThemeProvider } from '@mui/material';
import customTheme from '@/theme';

import { Poppins } from 'next/font/google';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { CartProvider } from '@/contexts/CartContext';
import NextTopLoader from 'nextjs-toploader';
import { AuthProvider } from '@/contexts/AuthContext';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <ThemeProvider theme={customTheme}>
          <AuthProvider>
            <CartProvider>
              <NextTopLoader showSpinner={false} />
              <Navbar />
              {children}
              <Footer />
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
