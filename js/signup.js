
  function showSignupForm() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('signupSection').style.display = 'flex';
  }
  
  function showLoginForm() {
    document.getElementById('signupSection').style.display = 'none';
    document.getElementById('loginSection').style.display = 'flex';
  }
  function showSignupForm() {
    // Show the signup section
    document.getElementById('signupSection').style.display = 'flex';
  
    // Hide the login section
    document.getElementById('loginSection').style.display = 'none';
  }
