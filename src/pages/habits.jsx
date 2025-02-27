import React from 'react';
import { AppBar, Button, Container, Paper, Toolbar, Typography, Stack } from '@mui/material';

const Habits = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Paper sx={{ mt: 2, p: 2, backgroundColor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          Your Habits
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Paper sx={{ p: 2, flexBasis: { xs: '100%', sm: '45%', md: '30%' }, borderRadius: 2 }}>
            <Typography variant="h6">Habit 1</Typography>
            <Typography variant="body1">Description of Habit 1</Typography>
          </Paper>
          <Paper sx={{ p: 2, flexBasis: { xs: '100%', sm: '45%', md: '30%' }, borderRadius: 2 }}>
            <Typography variant="h6">Habit 2</Typography>
            <Typography variant="body1">Description of Habit 2</Typography>
          </Paper>
          <Paper sx={{ p: 2, flexBasis: { xs: '100%', sm: '45%', md: '30%' }, borderRadius: 2 }}>
            <Typography variant="h6">Habit 3</Typography>
            <Typography variant="body1">Description of Habit 3</Typography>
          </Paper>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Habits;
