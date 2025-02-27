import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg'; // Adjust path if needed
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme, useMediaQuery } from '@mui/material';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navLinks = [
    { label: 'exercises', to: '/exercises' },
    { label: 'blog', to: '/blog' },
    { label: 'habits', to: '/habits' },
    { label: 'goals', to: '/goals' },
  ];

  const toggleDrawer = (open) => (event) => {
    // Prevent tab or shift key press from toggling drawer
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        maxWidth: '99%',
        backgroundColor: '#6A1B9A',
        margin: '8px',
        borderRadius: '24px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Toolbar sx={{ minHeight: 64 }}>
        {/* Clickable logo and title */}
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: 'inherit',
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              transition: 'opacity 0.3s ease-in-out',
              '&:hover': { opacity: 0.8 },
            }}
          >
            <img src={Logo} alt="Logo" style={{ width: 40, height: 40, marginRight: 8 }} />
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#fff' }}>
              Unbound
            </Typography>
          </Box>
        </Link>

        {/* Navigation: full buttons on desktop, menu on mobile */}
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {navLinks.map((link) => (
                    <ListItem key={link.label} disablePadding>
                      <ListItemButton component={Link} to={link.to}>
                        <ListItemText primary={link.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                variant="contained"
                component={Link}
                to={link.to}
                sx={{
                  backgroundColor: '#F48FB1',
                  color: '#000',
                  borderRadius: '24px',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#F06292' },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
