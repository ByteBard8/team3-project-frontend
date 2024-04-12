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

      <Container sx={{ py: { xs: 8, sm: 16 } }}>
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
