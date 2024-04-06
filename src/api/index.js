import {SERVERURL} from '../helpers/consts.js'
const URL = SERVERURL;
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

  async function deleteBook(bookid){

  }
  async function updateBook(){

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

async function borrowBookAPI(bookId) {
  const token = localStorage.getItem('token');
  const borrowerId = localStorage.getItem('userId');
  try {
    const response = await fetch(`${URL}/api/borrowings/borrow`, {
      method: 'POST',
       headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
       body: JSON.stringify({bookId, borrowerId})
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

async function returnBookAPI(bookId) {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${URL}/api/borrowings/return`, {
      method: 'PUT',
       headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({bookId})
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

async function searchBooks(searchStr) {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${URL}/api/books/additional/search?keyword=${searchStr}`, {
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

async function searchBooksByGenre(genre){
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${URL}/api/books/search/genre?genre=${genre}`, {
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

async function contactUs(email, name, message) {
  try {
    
    const response = await fetch(`${URL}/api/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name, message }),
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

async function getAllBorrowings() {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${URL}/api/borrowings`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      if (!response.ok) {
    throw new Error('Response not ok');
  }
  const data = await response.json();
  return data; 
} catch (error) {
  throw new Error('Network error');
}
};
export {signInAPI,
   getBookByIDAPI, 
   getAllBooks, 
   borrowBookAPI, 
   searchBooks,
   contactUs,
   returnBookAPI,
   deleteBook,
   updateBook,
   getAllBorrowings,
   searchBooksByGenre
  };