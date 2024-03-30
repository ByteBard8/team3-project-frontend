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
 <Route path="/signin" exact element={<SignIn />} />
 <Route path="/signup" exact element={<SignUp />} />
 <Route path="/" exact element={<SignIn />} /> 
 <Route path="/signout" exact element={<SignOut />} />
 <Route path="/Home" exact element={<Home />} /> 
 <Route path="/Books" exact element={<Books />} />
 <Route path="/Book/:id" exact element={<Book />} />
</Routes>
</div>
 );
}

export default MainRouter;
