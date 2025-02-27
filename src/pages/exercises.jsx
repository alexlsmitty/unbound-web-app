import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const About = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" component="p">
        Welcome to our website. We are dedicated to providing the best service possible.
      </Typography>
      <Typography variant="body1" component='p'>
        Our team is made up of experienced professionals who are passionate about what they do.
      </Typography>
      <Typography variant="body1" component='p'>
        Thank you for visiting our site. We hope you find what you're looking for.
      </Typography>
    </Container>
  );
};

export default About;
