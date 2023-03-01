function validarFormulario() {
    // Obtener referencias a los campos del formulario
    var zip = document.getElementById("zip");
  
    // Obtener referencias a los elementos de mensaje de error

    var errorZip = document.getElementById("error-zip");
  
    // Bandera para indicar si el formulario es válido o no
    var formularioValido = true;
  
   
  
  // Validar el campo de código postal
  if (zip.value.length < 6) {
    errorZip.innerHTML = "Please enter a valid zip code";
    formularioValido = false;
  } else {
    errorZip.innerHTML = "";
  }
  
  // Devolver si el formulario es válido o no
  return formularioValido;
  }
  