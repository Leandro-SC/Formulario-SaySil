document.getElementById('myForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault(); // Evitar el envío del formulario predeterminado
  console.log("Test");

  // Obtener los valores de los campos del formulario
  const apellidoPaterno = document.getElementById('apellidoPaterno').value;
  const apellidoMaterno = document.getElementById('apellidoMaterno').value;
  const nombres = document.getElementById('nombres').value;
  const tipoDocumento = document.getElementById('tipoDocumento').value;
  const numeroDocumento = document.getElementById('numeroDocumento').value;
  const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  const correoElectronico = document.getElementById('correoElectronico').value;
  const numeroCelular = document.getElementById('numeroCelular').value;
  const numeroRUC = document.getElementById('numeroRUC').value;
  const entidadBancaria = document.getElementById('entidadBancaria').value;
  const numeroCuentaBancaria = document.getElementById('numeroCuentaBancaria').value;
  const codigoInterbancario = document.getElementById('codigoInterbancario').value;

  // Crear un objeto con los datos del formulario
  const formData = {
    ApellidoPaterno: apellidoPaterno,
    ApellidoMaterno: apellidoMaterno,
    Nombres: nombres,
    TipoDocumento: tipoDocumento,
    NumeroDocumento: numeroDocumento,
    FechaNacimiento: fechaNacimiento,
    CorreoElectronico: correoElectronico,
    NumeroCelular: numeroCelular,
    NumeroRUC: numeroRUC,
    EntidadBancaria: entidadBancaria,
    NumeroCuentaBancaria: numeroCuentaBancaria,
    CodigoInterbancario: codigoInterbancario
  };

  // Enviar los datos a Google Sheets utilizando la API Fetch
  fetch('https://script.google.com/macros/s/AKfycbyavwlVE-Ti_rA85vSUWA4mOWl_lCgB12qY9hk1GcwOSbrmuRAYv6C4jPpMlTm2_oFg/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    // Manejar la respuesta del servidor (opcional)
    console.log('Datos enviados correctamente');
    // Puedes mostrar un mensaje de éxito o redirigir a otra página
  })
  .catch(error => {
    // Manejar cualquier error que ocurra durante la solicitud
    console.error('Error al enviar los datos', error);
    // Puedes mostrar un mensaje de error al usuario
  });
}






















