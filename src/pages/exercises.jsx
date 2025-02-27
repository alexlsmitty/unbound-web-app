import React from 'react';
import { Grid, Card, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
// Import a few sample icons from MUI (feel free to choose others)
import PsychologyIcon from '@mui/icons-material/Psychology';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AssessmentIcon from '@mui/icons-material/Assessment';

const exerciseData = [
  {
    id: 1,
    title: 'Thought Record',
    description: 'Track your thoughts and identify patterns that affect your mood.',
    icon: <PsychologyIcon fontSize="large" />,
    color: '#f48fb1', // Light pink
    action: () => alert('Thought Record activated!'),
  },
  {
    id: 2,
    title: 'Cognitive Restructuring',
    description: 'Challenge negative thoughts and reframe them in a positive way.',
    icon: <LightbulbIcon fontSize="large" />,
    color: '#81d4fa', // Light blue
    action: () => alert('Cognitive Restructuring activated!'),
  },
  {
    id: 3,
    title: 'Behavioral Activation',
    description: 'Plan enjoyable activities and break the cycle of inactivity.',
    icon: <AssessmentIcon fontSize="large" />,
    color: '#a5d6a7', // Light green
    action: () => alert('Behavioral Activation activated!'),
  },
  // You can add more exercise objects here
];

function Exercises() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom>
        CBT Exercises
      </Typography>
      <Grid container spacing={4}>
        {exerciseData.map((exercise) => (
          <Grid item xs={12} sm={6} md={4} key={exercise.id}>
            <Card 
              sx={{ 
                backgroundColor: exercise.color, 
                borderRadius: '16px', 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {/* Icon representing the exercise */}
                  {exercise.icon}
                  <Typography variant="h5" sx={{ ml: 1 }}>
                    {exercise.title}
                  </Typography>
                </Box>
                <Typography variant="body2">
                  {exercise.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  size="small" 
                  variant="contained" 
                  onClick={exercise.action}
                  sx={{
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    color: '#fff',
                    '&:hover': { backgroundColor: 'rgba(0,0,0,0.9)' }
                  }}
                >
                  Try It
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Exercises;
