import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Book from '../views/Book.jsx';
import Books from '../views/Books.jsx';
import Home from '../views/Home.jsx';
import SignIn from '../views/SignIn.jsx';
import SignUp from '../views/SignUp.jsx';
import SignOut from '../views/SignOut.jsx';
import SearchResults from '../views/SearchResults.jsx';
import BooksByGenre from '../views/BooksByGenre.jsx';
import AboutUs from '../views/AboutUs.jsx';
import ContactUs from '../views/ContactUs.jsx';
import Borrowings from '../views/Borrowings.jsx';

/**
 * Admin Components
 */
import AdminRoute from './AdminRoute.jsx';
import BooksIndex from '../views/admin/books/Index.jsx';
import AddBook from '../views/admin/books/AddBook.jsx';
import EditBookForm from '../views/admin/books/EditBook.jsx';
import AuthorsIndex from '../views/admin/authors/Index.jsx';
import UsersAdmin from '../views/admin/users/Index.jsx';
import EditUser from '../views/admin/users/EditUser.jsx';
import BorrowingsAdmin from '../views/admin/borrowings/Index.jsx';
import AuthorsAdmin from '../views/admin/authors/Index.jsx';
import EditAuthor from '../views/admin/authors/EditAuthor.jsx';
import AddAuthor from '../views/admin/authors/AddAuthor.jsx';

function MainRouter() {

return (
		<div >
		
		<Routes>
			<Route path="/signin" exact element={<SignIn />} />
			<Route path="/signup" exact element={<SignUp />} />
			<Route path="/" exact element={<SignIn />} /> 
			<Route path="/signout" exact element={<SignOut />} />
			<Route path="/Home" exact element={<Home />} /> 
			<Route path="/books" exact element={<Books />} />
			<Route path="/Book/:id" exact element={<Book />} />
			<Route path="/search" exact element={<SearchResults />} />
			<Route path="/genre" exact element={<BooksByGenre />} />
			<Route path="/aboutus" exact element={<AboutUs />} />
			<Route path="/contact" exact element={<ContactUs />} />
			<Route path="/borrowings" exact element={<Borrowings />} />
			<Route
				path="/admin/books"
					element={
						<AdminRoute>
							<BooksIndex />
						</AdminRoute>
					}
				/>
			<Route
				exact
				path="/admin/books/add"
					element={
						<AdminRoute>
							<AddBook />
						</AdminRoute>
					}
				/>
			<Route
				exact
				path="/admin/books/edit/:bookId"
					element={
						<AdminRoute>
							<EditBookForm />
						</AdminRoute>
					}
				/>
			<Route
				path="/admin/authors"
					element={
						<AdminRoute>
							<AuthorsIndex />
						</AdminRoute>
					}
				/>
			<Route
				path="/admin/users"
					element={
						<AdminRoute>
							<UsersAdmin />
						</AdminRoute>
					}
				/>
			<Route
				exact
				path="/admin/users/edit/:userId"
					element={
						<AdminRoute>
							<EditUser />
						</AdminRoute>
					}
				/>
			<Route
				path="/admin/borrowings"
					element={
						<AdminRoute>
							<BorrowingsAdmin />
						</AdminRoute>
					}
				/>
			<Route
			path="/admin/authors"
				element={
					<AdminRoute>
						<AuthorsAdmin />
					</AdminRoute>
				}
			/>
			<Route
			path="/admin/authors/add"
				element={
					<AdminRoute>
						<AddAuthor />
					</AdminRoute>
				}
			/>
			<Route
				exact
				path="/admin/authors/edit/:authorId"
					element={
						<AdminRoute>
							<EditAuthor />
						</AdminRoute>
					}
				/>
		</Routes>
	</div>
 );
}

export default MainRouter;
