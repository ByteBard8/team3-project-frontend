import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, TextField, Box, Typography } from '@mui/material';
import { getAuthorById, updateAuthor } from '../../../api/authorapi.js';

const EditAuthor = () => {
  const { authorId } = useParams();
  const [authorData, setAuthorData] = useState({
    name: '',
    country: ''
  });

  useEffect(() => {
    // Fetch author data by ID when component mounts
    const fetchAuthorData = async () => {
      try {
        const data = await getAuthorById(authorId);
        setAuthorData(data);
      } catch (error) {
        console.error('Error fetching author data:', error);
      }
    };

    fetchAuthorData();
  }, [authorId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthorData({ ...authorData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateAuthor(authorId, authorData);
      // Optionally, redirect to authors list page after successful update
    } catch (error) {
      console.error('Error updating author:', error);
    }
  };
  const handleBack = () => {
    window.history.back(); // Go back to previous page
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>Edit Author</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="firstName"
          name="firstName"
          value={authorData.firstName}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="lastName"
          name="country"
          value={authorData.lastName}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mr: 2 }}>
          Update
        </Button>
		<Button onClick={handleBack}
	  variant="contained" color="warning">
        Back
      </Button>
      </form>
    </Box>
  );
};

export default EditAuthor;
