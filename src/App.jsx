import Header from './components/header'
import Home from './pages/home'
import Habits from './pages/habits'
import Exercises from './pages/exercises'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './App.css'
import { Box } from '@mui/material'

function App() {
  const theme = createTheme({
    palette: {
      primary: { main: '#49A432' },
      secondary: { main: '#8C3638' },
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
        </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App
