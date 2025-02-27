import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Goals = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Goals Page
      </Typography>
      <Typography variant="body1">
        This is the Goals page.
      </Typography>
    </Container>
  );
};

export default Goals;
