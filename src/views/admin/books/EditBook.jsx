import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, MenuItem } from '@mui/material';
import { editBook } from '../../../api/admin';
import { getBookByIDAPI } from '../../../api/index'; // Import getBookByIDAPI
import { useParams } from 'react-router-dom'; // Import useParams

const genres = ['SOCIOLOGY', 'SELF-HELP', 'NON-FICTION', 'POLITICS', 'SCIENCE', 'PSYCHOLOGY', 'Fitness'];

const EditBookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    ISBN: '',
    genre: '',
    publication_year: '',
    quantity_available: '',
    bookImageUrl: '',
    status: 'available',
    available: true
  });

  const { bookId } = useParams(); // Get bookId from URL params

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const bookData = await getBookByIDAPI(bookId); 
        setFormData(bookData); 
      } catch (error) {
        console.error('Error fetching book:', error.message);
        alert('Failed to fetch book details. Please try again.');
      }
    };

    fetchBook();
  }, [bookId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editBook(formData);
      alert('Book updated successfully!');
    } catch (error) {
      console.error('Error editing book:', error.message);
      alert('Failed to edit book. Please try again.');
    }
  };

  const handleBack = () => {
    window.history.back(); // Go back to previous page
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Author"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="ISBN"
            name="ISBN"
            value={formData.ISBN}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            select
            label="Genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          >
            {genres.map((genre) => (
              <MenuItem key={genre} value={genre}>
                {genre}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Publication Year"
            name="publication_year"
            value={formData.publication_year}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Quantity Available"
            name="quantity_available"
            type="number"
            value={formData.quantity_available}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Book Image URL"
            name="bookImageUrl"
            value={formData.bookImageUrl}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
	  <Grid item xs={12} sx={{ marginTop: '1rem' }}>
	  <Button type="submit" variant="contained" color="primary">
        Update Book
      </Button>
	  <Button onClick={handleBack}
	  variant="contained" color="warning">
        Back
      </Button>
	  </Grid>
    </form>
  );
};

export default EditBookForm;
