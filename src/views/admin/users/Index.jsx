import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../../api/useradmin'; 

const UsersAdmin = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
		  try {
			const data = await getAllUsers();
			setUsers(data);
		  } catch (error) {
			console.error('Error fetching users:', error);
		  }
		};
	
		fetchData();
	  }, []);

		const handleEditUser = (userId) => {
			console.log('Editing user with ID:', userId);
		};

		const handleDeleteUser = (userId) => {
			console.log('Deleting user with ID:', userId);
		};
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        <Button variant="contained" color="primary">
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
    </>
  );
};

export default UsersAdmin;
