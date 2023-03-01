function validarFormulario() {
    // Obtener referencias a los campos del formulario
    var name = document.getElementById("name");
    var lastname = document.getElementById("lastname");
   // var expiration = document.getElementById("Expiration");
    //var zip = document.getElementById("zip");
  
    // Obtener referencias a los elementos de mensaje de error
    var errorName = document.getElementById("error-name");
    var errorLastname = document.getElementById("error-lastname");
    //var errorExpiration = document.getElementById("error-expiration");
    //var errorZip = document.getElementById("error-zip");
  
    // Bandera para indicar si el formulario es válido o no
    var formularioValido = true;
  
    // Validar el campo de nombre
    if (!name.checkValidity()) {
      errorName.innerHTML = "Please enter a valid name";
      formularioValido = false;
    } else {
      errorName.innerHTML = "";
    }
  
    // Validar el campo de número de tarjeta
    if (lastname.value.length < 16) {
      errorLastname.innerHTML = "Please enter a valid lastname }";
      formularioValido = false;
    } else
    {
      errorLastname.innerHTML = "";
      }
          
  // Devolver si el formulario es válido o no
  return formularioValido;
  }
  