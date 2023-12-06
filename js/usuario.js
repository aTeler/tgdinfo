const { createApp } = Vue
  createApp({
    data() {
      return {
        usuarios:[],
        //url:'http://localhost:5000/usuarios', 
   // si el backend esta corriendo local  usar localhost 5000(si no lo subieron a pythonanywhere)
        url:'https://ateler.pythonanywhere.com/usuarios',   // si ya lo subieron a pythonanywhere
        error:false,
        cargando:true,
        /*atributos para el guardar los valores del formulario */ //usuario,clave,apellidos,nombres,mail,rol,fecha_alta,activo,empresa
        id:0,
        usuario:"", 
        clave:"",
        apellidos:"",
        nombres:"",
        mail:"",
        rol:0,
        activo:0,
        empresa:0,
    }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.usuarios = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        eliminar(id) {
            const url = this.url+'/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
			 alert('Registro Eliminado')
                    location.reload(); // recarga el json luego de eliminado el registro
                })
        },
        grabar(){  //usuario,clave,apellidos,nombres,mail,rol,fecha_alta,activo,empresa
            let usuario = {
                usuario:this.usuario,
                clave: this.clave,
                apellidos: this.apellidos,
                nombres:this.nombres,
                mail:this.mail,
                rol:this.rol,
                activo:this.activo,
                empresa:this.empresa
            }
            var options = {
                body:JSON.stringify(usuario),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./usuarios.html";  // recarga usuarios.html
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")  // puedo mostrar el error tambien
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')
