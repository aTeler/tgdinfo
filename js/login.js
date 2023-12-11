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

function login() {
    alert('login!!!')
    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("contraseña").value;
    alert('u:'+usuario);
    
        // Guarda las variables en localStorage
        localStorage.setItem('usuario', usuario);
        localStorage.setItem('clave', clave);

        // Redirige a la otra página
        window.location.href = "https://surveypack.netlify.app/usuarios/"; 
     
        
    }




