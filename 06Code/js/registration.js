function validateHTML() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirm = document.getElementsByName('password')[1].value;
    const gender = document.querySelector('input[name="gender"]:checked');
  
    if (email === '') {
      document.getElementById('email-error').innerHTML = '<span style="color:red">Please enter your email.</span>';
      return false;
    } else {
      document.getElementById('email-error').innerHTML = '';
    }
  
    if (password === '') {
      document.getElementById('password-error').innerHTML = '<span style="color:red">Please enter a password.</span>';
      return false;
    } else if (password.length < 6) {
      document.getElementById('password-error').innerHTML = '<span style="color:red">Password must be at least 6 characters.</span>';
      return false;
    } else {
      document.getElementById('password-error').innerHTML = '';
    }
  
    if (confirm === '') {
      document.getElementById('confirm-error').innerHTML = '<span style="color:red">Please confirm your password.</span>';
      return false;
    } else if (confirm !== password) {
      document.getElementById('confirm-error').innerHTML = '<span style="color:red">Passwords do not match.</span>';
      return false;
    } else {
      document.getElementById('confirm-error').innerHTML = '';
    }
  
    if (!gender) {
      document.getElementById('gender-error').innerHTML = '<span style="color:red">Please select a gender.</span>';
      return false;
    } else {
      document.getElementById('gender-error').innerHTML = '';
    }
  
    if (!document.getElementById('checkbox').checked) {
      document.getElementById('checkbox-error').innerHTML = '<span style="color:red">Please agree to the terms and conditions.</span>';
      return false;
    } else {
      document.getElementById('checkbox-error').innerHTML = '';
    }
  
    return true;
  }
  