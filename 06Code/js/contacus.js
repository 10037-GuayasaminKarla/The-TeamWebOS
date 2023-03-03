function validateHTML() {
  // Obtener referencias a los campos del formulario
  const name = document.getElementById("name").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById('email').value;
  const Card = document.querySelector('input[name="Card"]:checked');
  const message = document.getElementById("mensage").value;



  // Validar el campo de nombre
  if (name == '') {
    document.getElementById('name-error').innerHTML = '<span style="color:red">Please enter your name.</span>';
    return  false;
  } else {
    document.getElementById ('name-error').innerHTML='';
  }

  // Validar el campo de lastname
  if (lastname == '') {
    document.getElementById('lastname-error').innerHTML = '<span style="color:red">Please enter your lastname.</span>';
    return  false;
  } else {
    document.getElementById ("name-error").innerHTML='';
  }


  // Validar el campo email

  if (email == '') {
    document.getElementById('email-error').innerHTML = '<span style="color:red">Please enter your email.</span>';
    return false;
  } else {
    document.getElementById('email-error').innerHTML = '';
  }

  if (!Card) {
    document.getElementById('Card-error').innerHTML = '<span style="color:red">Please select one.</span>';
    return false;
  } else {
    document.getElementById('Card-error').innerHTML = '';
  }
 
  if (message == '') {
    document.getElementById('messge-error').innerHTML = '<span style="color:red">Please enter your menssge.</span>';
    return  false;
  } else {
    document.getElementById ("message-error").innerHTML='';
  }


  return true;
  }