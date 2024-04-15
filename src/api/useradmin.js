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

  export {
	getAllUsers
  }