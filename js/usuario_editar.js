console.log(location.search)     // lee los argumentos pasados a este formulario
var id=location.search.substr(4)  // usuario_update.html?id=1
console.log(id)
const { createApp } = Vue
  createApp({
    data() {
      return {
        id:0,
        usuario:"", 
        clave:"",
        apellidos:"",
        nombres:"",
        mail:"",
        rol:"",
        activo:0,
        empresa:0,
        url:'https://ateler.pythonanywhere.com/usuarios/'+id,
       }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id=data.id
                    this.usuario = data.usuario
                    this.clave = data.clave
                    this.apellidos=data.apellidos
                    this.nombres=data.nombres
                    this.mail=data.mail
                    this.rol=data.rol
                    this.activo=data.activo
                    this.empresa=data.empresa
                
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        modificar() {
            let usuario = {
                usuario:this.usuario,
                clave: this.clave,
                apellidos: this.apellidos,
                mail: this.mail,
                rol: this.rol,
                activo: this.activo,
                empresa: this.empresa
            }
            var options = {
                body: JSON.stringify(usuario),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./usuarios.html"; // navega a usuarios.html          
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')
