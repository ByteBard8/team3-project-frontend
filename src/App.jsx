import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from '@mui/material/Container';
import DrawerAppBar from './components/NavigationBar.jsx';
import Book from './views/Book.jsx';
import Books from './views/Books.jsx';
import Home from './views/Home.jsx';
import Footer from './components/Footer.jsx'
import SignIn from './views/SignIn.jsx';
import SignUp from './views/SignUp.jsx';

function App() {

  return (
    <Container fixed disableGutters>
    <DrawerAppBar />
      <SignUp />
      <Footer />
    </Container>
  )
}

export default App
