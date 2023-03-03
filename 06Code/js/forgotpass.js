function validateHTML() {
    
    const mail = document.querySelector('input[name="mail"]:checked');

  

    if (!mail) {
      document.getElementById('mail-error').innerHTML = '<span style="color:red">Please select one.</span>';
      return false;
    } else {
      document.getElementById('mail-error').innerHTML = '';
    }
  
    if (!document.getElementById('checkbox').checked) {
      document.getElementById('checkbox-error').innerHTML = '<span style="color:red">Please agree to the terms and conditions.</span>';
      return false;
    } else {
      document.getElementById('checkbox-error').innerHTML = '';
    }
  
    return true;
  }
  