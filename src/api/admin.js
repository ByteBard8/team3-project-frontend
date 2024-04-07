import { SERVERURL } from '../helpers/consts.js'

async function addBook(book) {
    try {
		const token = localStorage.getItem('token');      const response = await fetch(`${SERVERURL}/api/books`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
		  'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(book),
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

async function editBook(book) {
    try {
		const token = localStorage.getItem('token');      const response = await fetch(`${SERVERURL}/api/books/${book._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
		  'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(book),
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

  export { addBook, editBook }