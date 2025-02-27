import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  LinearProgress,
  Grid,
  IconButton,
  Collapse
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Goals() {
  const [goals, setGoals] = useState([
    { id: 1, title: 'Read 100 pages', metric: 'pages', target: 100, progress: 30 },
    { id: 2, title: 'Exercise 5 hours', metric: 'hours', target: 5, progress: 2 }
  ]);

  // State for toggling the new goal form
  const [showForm, setShowForm] = useState(false);
  const [newGoal, setNewGoal] = useState({ title: '', metric: '', target: '' });

  const handleAddGoal = () => {
    if (!newGoal.title || !newGoal.metric || !newGoal.target) return;
    const newId = goals.length ? Math.max(...goals.map(g => g.id)) + 1 : 1;
    setGoals([...goals, { id: newId, title: newGoal.title, metric: newGoal.metric, target: Number(newGoal.target), progress: 0 }]);
    setNewGoal({ title: '', metric: '', target: '' });
    setShowForm(false);
  };

  const handleDeleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  const handleUpdateProgress = (id) => {
    const update = window.prompt('Enter updated progress:');
    if (update !== null) {
      setGoals(goals.map(goal => goal.id === id ? { ...goal, progress: Number(update) } : goal));
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom>
        Your Goals
      </Typography>

      {/* Button to toggle the new goal form */}
      <Button variant="contained" onClick={() => setShowForm(prev => !prev)}>
        {showForm ? 'Cancel' : 'Add New Goal'}
      </Button>

      {/* Collapsible new goal form */}
      <Collapse in={showForm} timeout="auto" unmountOnExit>
        <Paper sx={{ p: 2, my: 2 }}>
          <Typography variant="h6">Set a New Goal</Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
            <TextField
              label="Title"
              value={newGoal.title}
              onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
            />
            <TextField
              label="Metric (e.g., pages, hours)"
              value={newGoal.metric}
              onChange={(e) => setNewGoal({ ...newGoal, metric: e.target.value })}
            />
            <TextField
              label="Target Value"
              type="number"
              value={newGoal.target}
              onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
            />
            <Button variant="contained" onClick={handleAddGoal}>
              Add Goal
            </Button>
          </Box>
        </Paper>
      </Collapse>

      {/* Display list of goals */}
      <Grid container spacing={3}>
        {goals.map(goal => {
          const percentage = Math.min((goal.progress / goal.target) * 100, 100);
          return (
            <Grid item xs={12} md={6} lg={4} key={goal.id}>
              <Paper sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6">{goal.title}</Typography>
                  <Box>
                    <IconButton onClick={() => handleUpdateProgress(goal.id)} size="small">
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteGoal(goal.id)} size="small">
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Progress: {goal.progress} / {goal.target} {goal.metric}
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <LinearProgress variant="determinate" value={percentage} />
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Button variant="contained" onClick={() => handleUpdateProgress(goal.id)}>
                    Update Progress
                  </Button>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Goals;
