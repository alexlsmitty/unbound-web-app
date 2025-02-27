import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg'; // Adjust path if needed
import { width } from '@mui/system';

function Header() {
  return (
    <AppBar
      position="sticky"
      sx={{
        maxWidth: '99%',
        // Purple background
        backgroundColor: '#6A1B9A',
        // Giving it some breathing room so it looks "floating"
        margin: '8px',
        // Round the corners
        borderRadius: '24px',
        // A subtle shadow
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Toolbar sx={{ minHeight: 64 }}>
        {/* Left side: Clickable logo + title */}
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: 'inherit', 
            // relying on MUI's color, so no text color override needed
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              // Simple hover animation: fade
              transition: 'opacity 0.3s ease-in-out',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              style={{ width: 40, height: 40, marginRight: 8 }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 'bold',
                color: '#fff',
              }}
            >
              Unbound
            </Typography>
          </Box>
        </Link>

        {/* Right side: Buttons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            component={Link}
            to="/exercises"
            sx={{
              backgroundColor: '#F48FB1', 
              color: '#000',
              borderRadius: '24px',
              textTransform: 'none',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#F06292',
              },
            }}
          >
            exercises
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/blog"
            sx={{
              backgroundColor: '#F48FB1', 
              color: '#000',
              borderRadius: '24px',
              textTransform: 'none',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#F06292',
              },
            }}
          >
            blog
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/habits"
            sx={{
              backgroundColor: '#F48FB1',
              color: '#000',
              borderRadius: '24px',
              textTransform: 'none',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#F06292',
              },
            }}
          >
            habits
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/goals"
            sx={{
              backgroundColor: '#F48FB1',
              color: '#000',
              borderRadius: '24px',
              textTransform: 'none',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#F06292',
              },
            }}
          >
            goals
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
