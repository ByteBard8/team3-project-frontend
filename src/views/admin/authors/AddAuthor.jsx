import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { addAuthor } from '../../../api/authorapi.js';

const AddAuthor = () => {
  const [authorData, setAuthorData] = useState({
    firstName: '',
    lastName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthorData({ ...authorData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addAuthor(authorData);
	  window.location.href = `/admin/authors`;
    } catch (error) {
      console.error('Error adding author:', error);
    }
  };
  const handleBack = () => {
    window.history.back(); // Go back to previous page
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>Add Author</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="First Name"
          name="firstName"
          value={authorData.firstName}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Last Name"
          name="lastName"
          value={authorData.lastName}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mr: 2 }}>
          Add
        </Button>
		<Button onClick={handleBack}
	  variant="contained" color="warning">
        Back
      </Button>
      </form>
    </Box>
  );
};

export default AddAuthor;
