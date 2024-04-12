import Container from '@mui/material/Container';
import { BrowserRouter as Router } from 'react-router-dom';
import Box from '@mui/material/Box';
import './App.css';
import Footer from './components/Footer.jsx';
import MainRouter from './components/MainRouter.jsx';
import DrawerAppBar from './components/NavigationBar.jsx';
import Divider from '@mui/material/Divider';
function App() {

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <Router>

      <Container style={{ display: 'flex', flex: 1, flexDirection: 'column', minHeight: '100vh', width: '100%' }} fixed disableGutters>
        <MainRouter />
        <DrawerAppBar />
          <Divider />
      </Container>
          <Footer />
      </Router>
    </Box>
  )
}

export default App
