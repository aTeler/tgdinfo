function togglePasswordVisibility() {
    const passwordField = document.getElementById("contrasena");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    if (usuario.trim() === "" || contrasena.trim() === "") {
        alert("Por favor, complete todos los campos.");
        event.preventDefault(); // Evita el envío del formulario si los campos están vacíos.
    }
});

togglePassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
});