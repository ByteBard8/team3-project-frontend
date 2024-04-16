import React, { useState } from 'react';
import { TextField, Button, Grid, MenuItem } from '@mui/material';
import { signUp } from '../../../api/index'; 

const AddUserForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    role: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(userData); // Call the signUp function to register a new user using the API
      alert('User added successfully!');
      // Reset the form fields after successful submission
      setUserData({
        name: '',
        email: '',
        role: '',
        password: ''
      });
      window.history.back(); // Go back to previous page
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Failed to add user. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="Role"
            name="role"
            value={userData.role}
            onChange={handleChange}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user">User</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="password"
            label="Password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Add User
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddUserForm;
