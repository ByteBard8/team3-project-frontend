import './App.css'
import Container from '@mui/material/Container';
import DrawerAppBar from './components/NavigationBar.jsx';
import Book from './views/Book.jsx';
import Footer from './components/Footer.jsx'

function App() {

  return (
    <Container maxWidth={false} disableGutters>
    <DrawerAppBar />
      <Book />
      <Footer />
    </Container>
  )
}

export default App
