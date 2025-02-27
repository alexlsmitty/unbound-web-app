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

function Habits() {
  const [habits, setHabits] = useState([
    { id: 1, title: 'Morning Meditation', description: 'Meditate for 10 minutes each morning', dailyTarget: 1, progress: 0 },
    { id: 2, title: 'Drink Water', description: 'Drink at least 8 glasses of water', dailyTarget: 8, progress: 3 }
  ]);

  // State for toggling the new habit form
  const [showForm, setShowForm] = useState(false);
  const [newHabit, setNewHabit] = useState({ title: '', description: '', dailyTarget: '' });

  const handleAddHabit = () => {
    if (!newHabit.title || !newHabit.description || !newHabit.dailyTarget) return;
    const newId = habits.length ? Math.max(...habits.map(h => h.id)) + 1 : 1;
    setHabits([...habits, { id: newId, title: newHabit.title, description: newHabit.description, dailyTarget: Number(newHabit.dailyTarget), progress: 0 }]);
    setNewHabit({ title: '', description: '', dailyTarget: '' });
    setShowForm(false);
  };

  const handleDeleteHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  const handleUpdateProgress = (id) => {
    const update = window.prompt('Enter updated progress (e.g., number of times completed today):');
    if (update !== null) {
      setHabits(habits.map(habit => habit.id === id ? { ...habit, progress: Number(update) } : habit));
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom>
        Your Habits
      </Typography>

      {/* Button to toggle the new habit form */}
      <Button sx="margin-bottom: 10px"
      variant="contained" onClick={() => setShowForm(prev => !prev)}>
        {showForm ? 'Cancel' : 'Add New Habit'}
      </Button>

      {/* Collapsible new habit form */}
      <Collapse in={showForm} timeout="auto" unmountOnExit>
        <Paper sx={{ p: 2, my: 2 }}>
          <Typography variant="h6">Set a New Habit</Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
            <TextField
              label="Title"
              value={newHabit.title}
              onChange={(e) => setNewHabit({ ...newHabit, title: e.target.value })}
            />
            <TextField
              label="Description"
              value={newHabit.description}
              onChange={(e) => setNewHabit({ ...newHabit, description: e.target.value })}
            />
            <TextField
              label="Daily Target"
              type="number"
              value={newHabit.dailyTarget}
              onChange={(e) => setNewHabit({ ...newHabit, dailyTarget: e.target.value })}
            />
            <Button variant="contained" onClick={handleAddHabit}>
              Add Habit
            </Button>
          </Box>
        </Paper>
      </Collapse>

      {/* Habits Grid */}
      <Grid container spacing={3}>
        {habits.map(habit => {
          const percentage = Math.min((habit.progress / habit.dailyTarget) * 100, 100);
          return (
            <Grid item xs={12} md={6} lg={4} key={habit.id}>
              <Paper sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6">{habit.title}</Typography>
                  <Box>
                    <IconButton onClick={() => handleUpdateProgress(habit.id)} size="small">
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteHabit(habit.id)} size="small">
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {habit.description}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Progress: {habit.progress} / {habit.dailyTarget}
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <LinearProgress variant="determinate" value={percentage} />
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Button variant="contained" onClick={() => handleUpdateProgress(habit.id)}>
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

export default Habits;
