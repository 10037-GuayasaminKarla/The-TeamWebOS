function validateHTML() {
  // Obtener referencias a los campos del formulario
  const name = document.getElementById("name").value;
  const lastname = document.getElementById("lastname").value;
  const city = document.getElementById('city');
  const inputAddress2 = document.getElementById("inputAddress2").value;
  const zip = document.getElementById("zip").value;
  const phone = document.getElementById("phone").value;
  const description = document.getElementById("description").value;
  const Card= document.querySelector('input[name="Card"]:checked');
  

  // Validar el campo de nombre
  if (name == '') {
    document.getElementById('name-error').innerHTML = '<span style="color:red">Please enter your name.</span>';
    return false;
  } else {
    document.getElementById('name-error').innerHTML = '';
  }

  // Validar el campo de apellido
  if (lastname == '') {
    document.getElementById('lastname-error').innerHTML = '<span style="color:red">Please enter your lastname.</span>';
    return false;
  } else {
    document.getElementById("lastname-error").innerHTML = '';
  }

  //validar el campo 
  if (city == '') {
    document.getElementById('city-error').innerHTML = '<span style="color:red">Please select your city.</span>';
    return false;
  } else {
    document.getElementById("city-error").innerHTML = '';
  }

  // Validar el campo inputAddress2
  if (inputAddress2 == '') {
    document.getElementById('inputAddress2-error').innerHTML = '<span style="color:red">Please enter your adreess.</span>';
    return false;
  } else {
    document.getElementById('inputAddress2-error').innerHTML = '';
  }

  // Validar el campo de zip
  if (!zip) {
    document.getElementById('zip-error').innerHTML = '<span style="color:red">Please enter your zip.</span>';
    return false;
  } else {
    document.getElementById('zip-error').innerHTML = '';
  }

  // Validar el campo de phone
  if (!phone) {
    document.getElementById('phone-error').innerHTML = '<span style="color:red">Please enter your phone.</span>';
    return false;
  } else {
    document.getElementById('phone-error').innerHTML = '';
  }

  // Validar el campo de dresscription
  if (description == '') {
    document.getElementById('description-error').innerHTML = '<span style="color:red">Please enter your description.</span>';
    return false;
  } else {
    document.getElementById("description-error").innerHTML = '';
  }
// Validar el campo de tarjeta
if (!Card) {
  document.getElementById('card-error').innerHTML = '<span style="color:red">Please select one.</span>';
  return false;
} else {
  document.getElementById('card-error').innerHTML = '';
}
}
