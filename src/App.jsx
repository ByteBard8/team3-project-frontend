import Container from '@mui/material/Container';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer.jsx';
import MainRouter from './components/MainRouter.jsx';
import DrawerAppBar from './components/NavigationBar.jsx';
function App() {

  return (
    <Router>

    <Container fixed disableGutters>
      <MainRouter />
    <DrawerAppBar />
      <Footer />
    </Container>
    </Router>
  )
}

export default App
