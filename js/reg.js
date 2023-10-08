document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("registro-form");
    const password = document.getElementById("password");
    const confirmarPassword = document.getElementById("confirm-password");
    const togglePassword = document.querySelector(".toggle-password");

    togglePassword.addEventListener("click", function () {
        if (password.type === "password") {
            password.type = "text";
        } else {
            password.type = "password";
        }
    });

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const usuario = document.getElementById("usuario").value;

        if (email.trim() === "" || usuario.trim() === "" || password.value.trim() === "" || confirmarPassword.value.trim() === "") {
            alert("Por favor, complete todos los campos.");
            return;
        }

        if (!email.includes("@")) {
            alert("Ingrese una dirección de correo electrónico válida.");
            return;
        }

        if (password.value !== confirmarPassword.value) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        alert("Registro exitoso. ¡Bienvenido!");
        formulario.reset();
    });
});
