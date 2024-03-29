import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from '@mui/material/Container';
import DrawerAppBar from './components/NavigationBar.jsx';
import Book from './views/Book.jsx';
import Home from './views/Home.jsx';
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container fixed disableGutters>
    <DrawerAppBar />
      <Home />
      <Footer />
    </Container>
  )
}

export default App
