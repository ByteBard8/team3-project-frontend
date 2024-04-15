import { SERVERURL } from '../helpers/consts.js'

async function getAllUsers() {
	const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${SERVERURL}/api/users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
      if (!response.ok) {
        throw new Error('Response not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Network error')
    }
  }

  async function getUserById(userId) {
	const token = localStorage.getItem('token');
	try {
	  const response = await fetch(`${SERVERURL}/api/users/${userId}`, {
		method: 'GET',
		headers: {
		  'Content-Type': 'application/json',
		  'Authorization': `Bearer ${token}`
		},
	  })
	  if (!response.ok) {
		throw new Error('Response not ok');
	  }
	  const data = await response.json();
	  return data;
	} catch (error) {
	  throw new Error('Network error')
	}
  }


async function updateUser(userId, userData) {
    try {
		const token = localStorage.getItem('token');      const response = await fetch(`${SERVERURL}/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
		  'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }
      const data = await response.json();
      return data; 
    } catch (error) {
      throw new Error('Failed to sign in');
    }
  }

  export {
	getAllUsers,
	updateUser,
	getUserById
  }