import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Modal, Box, Typography } from '@mui/material';

import { getAllBooks, deleteBook } from '../../../api/index.js'; 
const BookAdminIndex = () => {
  const [books, setBooks] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(null);

  useEffect(() => {
    // Fetch books from API when component mounts
    const fetchBooks = async () => {
      try {
        const data = await getAllBooks(); 
        setBooks(data); 
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  
  const handleOpen = (bookId) => {
    setSelectedBookId(bookId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    await deleteBook(selectedBookId);
    setOpen(false); // Close the modal after deletion
  };

  return (
	<>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Genre</TableCell>
            <TableCell>Action</TableCell> {/* Added for action buttons */}
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book._id}>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.genre}</TableCell>
              <TableCell>
                <Button component={Link} to={`/books/${book._id}`} variant="outlined" color="primary">
                  View
                </Button>
                <Button component={Link} to={`/books/edit/${book._id}`} variant="outlined" color="secondary">
                  Edit
                </Button>
                <Button onClick={() => handleOpen(book._id)} variant="outlined" color="error">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
	<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="delete-modal-title"
        aria-describedby="delete-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
          <Typography id="delete-modal-title" variant="h6" component="h2" gutterBottom>
            Confirm Deletion
          </Typography>
          <Typography id="delete-modal-description" variant="body1" gutterBottom>
            Are you sure you want to delete this book?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 2 }}>
            <Button onClick={handleClose} variant="outlined" sx={{ mr: 2 }}>
              Cancel
            </Button>
            <Button onClick={handleDelete} variant="contained" color="error">
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
	</>
  );
};

export default BookAdminIndex;
