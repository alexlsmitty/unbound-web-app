import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Hero Section */}
      <Paper 
        elevation={3} 
        sx={{ borderRadius: '16px', p: 4, backgroundColor: 'background.paper' }}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          alignItems="center"
        >
          {/* Text Content */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3" component="h1" gutterBottom>
              Welcome to Our Web App!
            </Typography>
            <Typography variant="h6" color="textSecondary" paragraph>
              Our application is designed to help you manage your tasks, track your progress, 
              and reach your goals with ease. Whether you're looking to improve your habits or boost productivity, 
              we're here to guide you every step of the way.
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              sx={{ borderRadius: '24px', textTransform: 'none' }}
            >
              Get Started
            </Button>
          </Box>

          {/* Image / Visual Section */}
          <Box 
            sx={{
              flex: 1,
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Box
              component="img"
              src="https://via.placeholder.com/500x300" // Replace with your image path
              alt="About our app"
              sx={{
                width: '100%',
                maxWidth: 500,
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
            />
          </Box>
        </Stack>
      </Paper>

      {/* Additional Info Section (Optional) */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          What We Offer
        </Typography>
        <Typography variant="body1" color="textSecondary">
          We provide a range of tools and features designed to streamline your daily routine, empower you to make data-driven decisions, 
          and support your journey towards a more organized and fulfilling lifestyle.
        </Typography>
      </Box>
    </Container>
  );
}

export default HomePage;
