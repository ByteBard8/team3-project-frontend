const auth = {
  isAuthenticated() {
	
    if (localStorage.getItem('token'))
      return localStorage.getItem('token')
    else
      return false
  },
  isAdmin(){
	const role = localStorage.getItem('role');
	return role === 'admin';
  }
}
export default auth