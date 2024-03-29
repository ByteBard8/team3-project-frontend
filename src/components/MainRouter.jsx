import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Book from '../views/Book.jsx';
import Books from '../views/Books.jsx';
import Home from '../views/Home.jsx';
import SignIn from '../views/SignIn.jsx';
import SignUp from '../views/SignUp.jsx';
import SignOut from '../views/SignOut.jsx';

function MainRouter() {

return (
<div >
 
 <Routes>
 <Route path="/signin" element={<SignIn />} />
 <Route path="/signup" element={<SignUp />} />
 <Route path="/" element={<SignIn />} /> 
 <Route path="/signout" element={<SignOut />} />
 <Route path="/Home" element={<Home />} /> 
 <Route path="/Books" element={<Books />} />
 <Route path="/Book" element={<Book />} />
</Routes>
</div>
 );
}

export default MainRouter;
