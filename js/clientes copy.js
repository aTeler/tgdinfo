
alert("entro en java clientes!");



/*
document.addEventListener("DOMContentLoaded", function () {
    const tablaNombres = document.getElementById("tabla_clientes").getElementsByTagName('tbody')[0];

    // Llamada a la API para obtener nombres
    fetch("https://randomuser.me/api/?results=10")
        .then(response => response.json())
        .then(data => {
            data.results.forEach(result => {
                const nombre = result.name.first;
                const apellido = result.name.last;

                // Crear una nueva fila de la tabla
                const row = tablaNombres.insertRow();

                // Insertar celdas para el nombre y el apellido
                const cellNombre = row.insertCell(0);
                const cellApellido = row.insertCell(1);

                // Agregar los datos a las celdas
                cellNombre.textContent = nombre;
                cellApellido.textContent = apellido;
            });
        })
        .catch(error => {
            console.error("Error al obtener nombres:", error);
        });
});*/