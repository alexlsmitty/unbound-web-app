import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';

function Header() {
  return (
    <AppBar 
      position="static"
      // Using sx prop to override styles easily
      sx={{ 
        backgroundColor: '#6A1B9A', 
        boxShadow: 'none',         
      }}
    >
      <Toolbar>
        {/* Left side: Logo + Title */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            flexGrow: 1 
          }}
        >
          {/* Logo */}
          <img 
            src={Logo} 
            alt="Logo" 
            style={{ width: 40, height: 40, marginRight: 8 }} 
          />
          {/* Title */}
          <Typography 
            variant="h6" 
            component="div"
            sx={{ 
              fontWeight: 'bold', 
              color: '#fff', 
              // You could adjust letterSpacing, etc. if you want
            }}
          >
            Unbound
          </Typography>
        </Box>
        
        {/* Right side: Buttons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            component={Link}
            to="/exercises"
            sx={{
              backgroundColor: '#F48FB1', // Pink
              color: '#000',
              borderRadius: '24px',       // "pill" shape
              textTransform: 'none',      // keep normal text
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#F06292', // darker pink on hover
              },
            }}
          >
            exercises
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
