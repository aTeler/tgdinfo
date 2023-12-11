// menu con javascript
//alert("menu!!!");
const menu = document.querySelector('#menu');
//menu.innerHTML=' <ul>    <h2> <img src="./img/comentario-alt.png" width="20" height="20"> INFO - Encuestas de satisfacción</h2>         <a href="clientes.html"><button class="boton">PRODUCTOS</button>  </a>         <a href="clientes.html"><button class="boton">CLIENTES</button></a>         <a href="formulario.html"><button class="boton">CONTACTO</button> </a>         <a href="login.html"><button class="boton">ACCESO</button>  </a>          </ul> ';

//menu.innerHTML='<a href="index.html"> <img src="./img/logo.jpg"  alt="Survey Pack" width="90px" height="45px"></a>  <a href="precios.html">SERVICIOS</a>         <a href="clientes.html">CLIENTES</a>         <a href="formulario.html">CONTACTO </a>         <a href="login.html"><i class="fa fa-user"></i> ACCESO  </a> ';

if (localStorage.getItem('usuario')===null) {
    menu.innerHTML='<a href="index.html"> <img src="./img/logo-survey-pack-blanco.png"  alt="Survey Pack" width="80px" height="30px"></a>  <a href="precios.html">SERVICIOS</a>         <a href="clientesf.html">CLIENTES</a>         <a href="formulario.html">CONTACTO </a>         <a href="login.html"><i class="fa fa-user"></i> ACCESO  </a> ';
} else {
   // alert('Usuario:'+usuario);
    var usuario=localStorage.getItem('usuario')
    menu.innerHTML='<a href="index.html"> <img src="./img/logo-survey-pack-blanco.png"  alt="Survey Pack" width="80px" height="30px"></a>  <a href="precios.html">SERVICIOS</a>         <a href="clientesf.html">CLIENTES</a>         <a href="formulario.html">CONTACTO </a>         <a href="login.html"><i class="fa fa-user">'+usuario+'</i> ACCESO  </a> ';
}


/*menu.innerHTML='<nav> <input type="checkbox" id="check"> <label for="check" class="checkbtn">     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAExJREFUSEtjZKAxYKSx+QyjFhAM4QEJov8EnYVfAYqjsfmA5hZQ6AFU7QMSBzT3Ac3jgOYW0DyIhr4FNI8Dmlsw9ONg1AcoIUDz0hQAbegGGXzv/l0AAAAASUVORK5CYII="/> </label> <a href="index.html" class="enlace">     <img src="./img/survey_check.png" alt="surveycheck" class="logo"> </a> <ul>     <li><a class="active" href="#">Inicio</a></li>    <li><a href="clientesf.html">Clientes</a></li>     <li><a href="precios.html">Productos</a></li>     <li><a href="formulario.html">Contacto</a></li>     <li><a href="login.html">Iniciar Sesión</a></li> </ul> </nav> '*/
