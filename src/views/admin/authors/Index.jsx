import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Modal, Box, Typography } from '@mui/material';
import { getAllAuthors, deleteAuthor } from '../../../api/authorapi.js';
import { Link } from 'react-router-dom';

const AuthorsAdminIndex = () => {
  const [authors, setAuthors] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedAuthorId, setSelectedAuthorId] = useState(null);

  useEffect(() => {
    // Fetch authors from API when component mounts
    const fetchAuthors = async () => {
      try {
        const data = await getAllAuthors();
        setAuthors(data);
      } catch (error) {
        console.error('Error fetching authors:', error);
      }
    };

    fetchAuthors();
  }, []);

  const handleOpen = (authorId) => {
    setSelectedAuthorId(authorId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    await deleteAuthor(selectedAuthorId);
    setOpen(false); 
  };

  // Function to handle adding a new author (placeholder for now)
  const handleAddAuthor = () => {
    window.location.href = `/admin/authors/add`;
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        <Button onClick={handleAddAuthor} variant="contained" color="primary">
          Add New Author
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {authors.map((author) => (
              <TableRow key={author._id}>
                <TableCell>{author.lastName}</TableCell>
                <TableCell>{author.firstName}</TableCell>
                <TableCell>
				<Button component={Link} to={`/admin/authors/edit/${author._id}`} variant="outlined" color="secondary">
                  Edit
                </Button>
                  <Button onClick={() => handleOpen(author._id)} variant="outlined" color="error">
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
            Are you sure you want to delete this author?
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

export default AuthorsAdminIndex;
