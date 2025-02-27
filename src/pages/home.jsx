import React from 'react';
import { Container, Box, Typography, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FlagIcon from '@mui/icons-material/Flag';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import PsychologyIcon from '@mui/icons-material/Psychology';

// Variants for the hero section
const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8 }
  }
};

// Variants for the feature cards
const featureVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6 }
  }
};

function Intro() {
  // Each feature has a title, description, route, color, and icon.
  const features = [
    {
      title: 'Goal Tracking',
      description: 'Set personal goals and monitor your progress with intuitive dashboards.',
      route: '/goals',
      color: '#F48FB1', // Light pink
      icon: <FlagIcon fontSize="large" sx={{ mr: 1 }} />,
      textColor: '#000',
    },
    {
      title: 'Habit Building',
      description: 'Cultivate new routines with our tools designed for daily success.',
      route: '/habits',
      color: '#81D4FA', // Light blue
      icon: <SelfImprovementIcon fontSize="large" sx={{ mr: 1 }} />,
      textColor: '#000',
    },
    {
      title: 'Interactive Exercises',
      description: 'Engage in CBT-based exercises that are both fun and effective.',
      route: '/exercises',
      color: '#A5D6A7', // Light green
      icon: <PsychologyIcon fontSize="large" sx={{ mr: 1 }} />,
      textColor: '#000',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ pt: 8, pb: 8 }}>
      {/* Hero Section */}
      <Box
        component={motion.div}
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        sx={{
          textAlign: 'center',
          py: 8,
          background: 'linear-gradient(135deg, #6A1B9A 0%, #8E24AA 100%)',
          borderRadius: 2,
          color: '#fff',
          p: 4,
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Unbound
        </Typography>
        <Typography variant="h6" paragraph>
          Discover tools that empower you to build better habits, set achievable goals, 
          and track your progress seamlessly.
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          size="large"
          endIcon={<ArrowForwardIcon />}
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          sx={{ borderRadius: '24px' }}
        >
          Get Started
        </Button>
      </Box>
      
      {/* Features Section */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          What We Offer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
          Everything you need to stay motivated and on track.
        </Typography>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                component={motion.div}
                initial="hidden"
                animate="visible"
                variants={featureVariants}
                elevation={3}
                // Wrap the Paper in a Link by using the component prop.
                component={Link}
                to={feature.route}
                style={{ textDecoration: 'none' }}
                sx={{ 
                  p: 4, 
                  textAlign: 'center', 
                  borderRadius: 2, 
                  height: '100%', 
                  backgroundColor: feature.color,
                  color: feature.textColor,
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  '&:hover': {
                    cursor: 'pointer',
                    // Slightly lighten/darken the background color or pick a new color:
                    backgroundColor: '#FFFFFF', // Switch to white on hover
                    color: '#000',              // Ensure text is visible on white
                    boxShadow: '0 6px 14px rgba(0,0,0,0.3)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                  {feature.icon}
                  <Typography variant="h6" component="div">
                    {feature.title}
                  </Typography>
                </Box>
                <Typography variant="body2">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Intro;
