document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("contacto-form");
    const mensajeError = document.getElementById("mensaje-error");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const email = document.getElementById("email").value.trim();
        const direccion = document.getElementById("direccion").value.trim();
        const ciudad = document.getElementById("ciudad").value.trim();
        const codigoPostal = document.getElementById("codigoPostal").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const fechaNacimiento = document.getElementById("fechaNacimiento").value.trim();
        const genero = document.querySelector('input[name="genero"]:checked');
        const comentarios = document.getElementById("comentarios").value.trim();

        if (!nombre || !apellido || !email || !direccion || !ciudad || !codigoPostal || !telefono || !fechaNacimiento || !genero || !comentarios) {
            mensajeError.textContent = "Por favor, complete todos los campos.";
            return;
        }

        // Validación de Teléfono: Solo se aceptan números y no más de 12 caracteres.
        if (!/^\d{1,12}$/.test(telefono)) {
            mensajeError.textContent = "Teléfono inválido. Deben ser números y no más de 12 caracteres.";
            return;
        }

        // Validación de Código Postal: Solo se aceptan números y no más de 4 caracteres.
        if (!/^\d{1,4}$/.test(codigoPostal)) {
            mensajeError.textContent = "Código Postal inválido. Deben ser números y no más de 4 caracteres.";
            return;
        }

        // Si pasa todas las validaciones, puedes enviar el formulario o realizar otras acciones.
        mensajeError.textContent = "Formulario enviado con éxito!";
        formulario.reset();
    });
});
