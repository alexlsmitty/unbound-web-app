import React, { Suspense, lazy } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

// Lazy load page components
const Home = lazy(() => import('./pages/home'));
const Habits = lazy(() => import('./pages/habits'));
const Goals = lazy(() => import('./pages/goals'));
const Exercises = lazy(() => import('./pages/exercises'));
const BlogIndex = lazy(() => import('./pages/blog-index'));
const BlogPost = lazy(() => import('./pages/blog-post'));

// Define variants for page transitions
const containerVariants = {
  initial: { opacity: 0, scaleY: 0 },
  animate: { 
    opacity: 1, 
    scaleY: 1, 
    transition: { duration: 0.4 } 
  },
  exit: { 
    opacity: 0, 
    scaleY: 0, 
    transition: { duration: 0.3 } 
  },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</div>}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={containerVariants}
                style={{ overflow: 'hidden' }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/exercises"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={containerVariants}
                style={{ overflow: 'hidden' }}
              >
                <Exercises />
              </motion.div>
            }
          />
          <Route
            path="/habits"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={containerVariants}
                style={{ overflow: 'hidden' }}
              >
                <Habits />
              </motion.div>
            }
          />
          <Route
            path="/goals"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={containerVariants}
                style={{ overflow: 'hidden' }}
              >
                <Goals />
              </motion.div>
            }
          />
          <Route
            path="/blog"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={containerVariants}
                style={{ overflow: 'hidden' }}
              >
                <BlogIndex />
              </motion.div>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={containerVariants}
                style={{ overflow: 'hidden' }}
              >
                <BlogPost />
              </motion.div>
            }
          />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#49A432' },
      secondary: { main: '#8C3638' },
      background: {
        default: '#121212',
        paper: '#1D1D1D',
      },
    },
    typography: {
      fontFamily: '"REM", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    shape: {
      borderRadius: 16,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 24,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header />
          <AnimatedRoutes />
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
