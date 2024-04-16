import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Modal, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { getAllUsers, deleteUser } from '../../../api/useradmin'; 

const UsersAdmin = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const fetchData = async () => {
	try {
	  const data = await getAllUsers();
	  setUsers(data);
	} catch (error) {
	  console.error('Error fetching users:', error);
	}
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEditUser = async (userId) => {
    console.log('Editing user with ID:', userId);
    // Navigate to edit user page
  };

  const handleDeleteUser = (userId) => {
    setSelectedUserId(userId);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleConfirmDelete = async () => {
    await deleteUser(selectedUserId);
    setOpenModal(false);
	fetchData();
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        <Button variant="contained" color="primary" component={Link} to={`/admin/users/add`}>
          Add New User
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Button component={Link} to={`/admin/users/edit/${user._id}`} variant="outlined" color="primary">
                    Edit
                  </Button>
                  <Button onClick={() => handleDeleteUser(user._id)} variant="outlined" color="error" style={{ marginLeft: '0.5rem' }}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="delete-modal-title"
        aria-describedby="delete-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
          <Typography id="delete-modal-title" variant="h6" component="h2" gutterBottom>
            Confirm Deletion
          </Typography>
          <Typography id="delete-modal-description" variant="body1" gutterBottom>
            Are you sure you want to delete this user?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 2 }}>
            <Button onClick={handleCloseModal} variant="outlined" sx={{ mr: 2 }}>
              Cancel
            </Button>
            <Button onClick={handleConfirmDelete} variant="contained" color="error">
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default UsersAdmin;
