import React, { useState } from 'react';
import { TextField, Button, Grid, MenuItem } from '@mui/material';

const genres = ['SOCIOLOGY', 'SELF-HELP', 'NON-FICTION', 'POLITICS', 'SCIENCE', 'PSYCHOLOGY'];


const AddBookForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    ISBN: '',
    genre: '',
    publication_year: '',
    quantity_available: '',
    bookId: '',
    available: false,
    status: 'borrowed'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
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
      </Grid>
      <Button type="submit" variant="contained" color="primary">
        Add Book
      </Button>
    </form>
  );
};

export default AddBookForm;
