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
      return data; // Assuming your API returns some data upon successful login
    } catch (error) {
      throw new Error('Failed to sign in'); // Handle other errors, e.g., network failure
    }
  };

export default signInAPI;