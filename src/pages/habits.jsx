import { AppBar, Button, Container, Grid, Paper, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Habits = () => {
    return (
        <Container>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Habits
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Paper style={{ marginTop: 20, padding: 20 }}>
                <Typography variant="h4" gutterBottom>
                    Your Habits
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper style={{ padding: 20 }}>
                            <Typography variant="h6">
                                Habit 1
                            </Typography>
                            <Typography variant="body1">
                                Description of Habit 1
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper style={{ padding: 20 }}>
                            <Typography variant="h6">
                                Habit 2
                            </Typography>
                            <Typography variant="body1">
                                Description of Habit 2
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper style={{ padding: 20 }}>
                            <Typography variant="h6">
                                Habit 3
                            </Typography>
                            <Typography variant="body1">
                                Description of Habit 3
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default Habits;