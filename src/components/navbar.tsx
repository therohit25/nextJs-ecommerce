import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Badge,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/contexts/AuthContext';
import { useCustomRouter } from '@/hooks/useCustomRouter';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { cart, emptyCart } = useCart();
  const { user, logout } = useAuth();
  const pathname = usePathname(); 
  const router = useCustomRouter();

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { title: 'Home', href: '/', icon: <HomeIcon /> },
    { title: 'Products', href: '/products', icon: <ShoppingBagIcon /> },
    { title: 'Cart', href: '/cart', icon: <ShoppingCartIcon /> },
  ];

  const logoutHandler = () => {
    logout();
    emptyCart();
    router.refresh();
  };

  return (
    <>
      <AppBar
        position='static'
        sx={{
          background:
            'linear-gradient(90deg, #2c2c2c 0%, #1e1e1e 50%, #121212 100%)',
          padding: 0,
          borderRadius: 0,
        }}
      >
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, fontWeight: 'bold', cursor: 'pointer' }}
          >
            <Link href='/' style={{ color: '#fff', textDecoration: 'none' }}>
              MyShop
            </Link>
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navLinks.map((link) => {
              if (!user && link.title === 'Cart') return null;
              const isActive = pathname === link.href;
              return (
                <Link key={link.title} href={link.href} passHref>
                  <Button
                    sx={{
                      color: isActive ? '#f0a500' : '#fff', 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      textTransform: 'none',
                      '&:hover': { color: '#f0a500' },
                    }}
                  >
                    {link.title === 'Cart' ? (
                      <Badge badgeContent={cart?.length ?? 0} color='secondary'>
                        {link.icon}
                      </Badge>
                    ) : (
                      link.icon
                    )}
                    {link.title}
                  </Button>
                </Link>
              );
            })}
            {!user ? (
              <Link
                href={'/login'}
                style={{
                  color: '#fff',
                  margin: 'auto 0',
                  textDecoration: 'none',
                }}
              >
                Login
              </Link>
            ) : (
              <Button
                color='primary'
                onClick={logoutHandler}
                sx={{ color: '#fff' }}
              >
                Logout
              </Button>
            )}
          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton color='inherit' onClick={() => toggleDrawer(true)}>
              <MenuIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: '#1e1e1e',
            color: '#ffffff',
          },
        }}
      >
        <Box
          sx={{ width: 250 }}
          role='presentation'
          onClick={() => toggleDrawer(false)}
        >
          <List>
            {navLinks.map((link) => {
              if (!user && link.title === 'Cart') return null;
              const isActive = pathname === link.href;
              return (
                <ListItem key={link.title} disablePadding>
                  <Link href={link.href} passHref>
                    <ListItemButton
                      sx={{
                        '&:hover': {
                          backgroundColor: '#333333',
                        },
                        backgroundColor: isActive ? '#333333' : 'transparent', 
                      }}
                    >
                      <ListItemIcon sx={{ color: '#fff' }}>
                        {link.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={link.title}
                        primaryTypographyProps={{ style: { color: '#fff' } }}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
              );
            })}
            <ListItem disablePadding>
              {!user ? (
                <Link
                  href={'/login'}
                  style={{
                    color: '#fff',
                    margin: 'auto 0',
                    textDecoration: 'none',
                  }}
                >
                  <ListItemButton
                    sx={{
                      '&:hover': {
                        backgroundColor: '#333333',
                      },
                    }}
                  >
                    <ListItemText
                      primary={'Login'}
                      primaryTypographyProps={{ style: { color: '#fff' } }}
                    />
                  </ListItemButton>
                </Link>
              ) : (
                <ListItemButton
                  sx={{
                    '&:hover': {
                      backgroundColor: '#333333',
                    },
                  }}
                  onClick={logoutHandler}
                >
                  <ListItemText
                    primary={'Logout'}
                    primaryTypographyProps={{ style: { color: '#fff' } }}
                  />
                </ListItemButton>
              )}
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
