const URL = 'http://localhost:3000'
async function signInAPI(email, password) {
    try {
      console.log(`${URL}/auth/signin`)
      const response = await fetch(`${URL}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }
  
      const data = await response.json();
      return data; 
    } catch (error) {
      throw new Error('Failed to sign in');
    }
  };

  async function getAllBooks() {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${URL}/api/books/`, {
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

async function getBookByIDAPI(bookId) {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${URL}/api/books/${bookId}`, {
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
export {signInAPI, getBookByIDAPI, getAllBooks};