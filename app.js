// Array para almacenar registros
const registros = [];

// Función para manejar el envío del formulario
function registrar() {
    event.preventDefault(); // Prevenir el envío por defecto

    // Obtener los valores de los campos del formulario
    let nombres = document.getElementById('nombres').value;
    let apellidos = document.getElementById('apellidos').value;
    let tipoDocumento = document.getElementById('tipo_documento').value;
    let numeroDocumento = document.getElementById('numero_documento').value;
    let genero = document.querySelector('input[name="genero"]:checked').value;
    let telefono = document.getElementById('telefono').value;
    let correo = document.getElementById('correo').value;
    let fechaNacimiento = document.getElementById('fecha_nacimiento').value;

    // Crear un objeto con los datos del registro
    let registro = {
        nombres,
        apellidos,
        tipoDocumento,
        numeroDocumento,
        genero,
        telefono,
        correo,
        fechaNacimiento,
    };

    // Agregar el registro al array
    registros.push("registro");

    console.log('Los datos registrados son', registro);
}