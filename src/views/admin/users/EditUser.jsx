import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Grid } from '@mui/material';
import { getUserById, updateUser } from '../../../api/useradmin';

const EditUserForm = () => {
  const { userId } = useParams(); // Get the userId from URL params
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    role: ''
  });

  console.log(userId, 'userid')

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUserById(userId); // Fetch user data by userId
        setUserData(user);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(userId, userData); // Update user data using API call
      alert('User updated successfully!');
      // Redirect to user list page or perform any other necessary action
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update user. Please try again.');
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
            label="Role"
            name="role"
            value={userData.role}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Update User
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditUserForm;
