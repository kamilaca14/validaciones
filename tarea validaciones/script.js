document.getElementById('clientForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const cedula = document.getElementById('cedula').value;
    const apellidos = document.getElementById('apellidos').value;
    const nombres = document.getElementById('nombres').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;

    if (!validateCedula(cedula)) {
        showMessage('Cédula no válida.');
        return;
    }

    if (!validateTelefono(telefono)) {
        showMessage('Teléfono no válido.');
        return;
    }

    if (!validateEmail(email)) {
        showMessage('Correo electrónico no válido.');
        return;
    }

    const client = {
        cedula,
        apellidos,
        nombres,
        direccion,
        telefono,
        email
    };

    localStorage.setItem('client_' + cedula, JSON.stringify(client));
    showMessage('Datos guardados exitosamente.');
    document.getElementById('clientForm').reset();
});

function validateCedula(cedula) {
    const cedulaRegex = /^\d{10}$/;
    return cedulaRegex.test(cedula);
}

function validateTelefono(telefono) {
    const telefonoRegex = /^\d{7,10}$/;
    return telefonoRegex.test(telefono);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
}
