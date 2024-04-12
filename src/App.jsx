import Container from '@mui/material/Container';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer.jsx';
import MainRouter from './components/MainRouter.jsx';
import DrawerAppBar from './components/NavigationBar.jsx';
function App() {

  return (
    <Router>
    <Container style={{ display: 'flex', flex: 1, flexDirection: 'column', minHeight: '100vh', width: '100%' }} fixed disableGutters>
      <MainRouter />
    <DrawerAppBar />
    </Container>
      <Footer />
    </Router>
  )
}

export default App
