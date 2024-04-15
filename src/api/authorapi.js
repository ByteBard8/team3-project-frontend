import { SERVERURL } from '../helpers/consts.js';

async function getAllAuthors() {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${SERVERURL}/api/authors`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    if (!response.ok) {
      throw new Error('Response not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Network error');
  }
}

async function getAuthorById(authorId) {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${SERVERURL}/api/authors/${authorId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    if (!response.ok) {
      throw new Error('Response not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Network error');
  }
}

async function updateAuthor(authorId, authorData) {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${SERVERURL}/api/authors/${authorId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(authorData),
    });

    if (!response.ok) {
      throw new Error('Invalid credentials');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to update author');
  }
}

async function deleteAuthor(authorId) {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${SERVERURL}/api/authors/${authorId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });

    if (!response.ok) {
      throw new Error('Invalid credentials');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to delete author');
  }
}
async function addAuthor(authorData) {
	const token = localStorage.getItem('token');
	try {
	  const response = await fetch(`${SERVERURL}/api/authors`, {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		  'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify(authorData)
	  });
  
	  if (!response.ok) {
		throw new Error('Failed to add author');
	  }
  
	  const data = await response.json();
	  return data;
	} catch (error) {
	  throw new Error('Network error');
	}
  }
export {
  getAllAuthors,
  updateAuthor,
  getAuthorById,
  deleteAuthor,
  addAuthor
};
