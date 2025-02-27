import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Habits from './pages/habits'
import Exercises from './pages/exercises'
import BlogIndex from './pages/blog-index'
import BlogPost from './pages/blog-post'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Box } from '@mui/material'
import './App.css'

function App() {
  console.log('Test variable:', import.meta.env.VITE_TEST_VARIABLE);
  const theme = createTheme({
    palette: {
      mode: 'dark', // Switches the theme to dark mode
      primary: { main: '#49A432' },
      secondary: { main: '#8C3638' },
      background: {
        default: '#121212', // Dark background for the whole page
        paper: '#1D1D1D',   // Slightly lighter for surfaces like Paper
      },
    },
    typography: {
      // Use "REM" as the default font family
      fontFamily: '"REM", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    shape: {
      borderRadius: 16, // Global border radius for a more rounded appearance
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none', // Prevents uppercase transformation
            borderRadius: 24,      // More rounded buttons
          },
        },
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Provides a CSS reset aligned with Material Design */}
      <Router>
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/habits" element={<Habits />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App
