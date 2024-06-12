//Desarrollado Por: JOSMAR OSORIO y STEPHANIA SALMERÓN. Para: Programación V-UBA Prof. Elizabeth del Valle


//Animaciones de la página
//CARRUSEL
const fila = document.querySelector('.contenedor-carrusel'); /*Declaramos una constante llamada fila donde se selecionará el elemento del contenedor principal del carrusel que tiene la clase "contenedor-carrusel".*/
const peliculas = document.querySelectorAll('.pelicula');/*Declaramos otra constante llamada peliculas donde se va almacenar todos los elementos que tiene la clase película dentro del carrusel. */

const flechaDerecha = document.getElementById('flecha-derecha');
const flechaIzquierda = document.getElementById('flecha-izquierda');
/*Estas dos contantes alamecenan una referencia a los botones para poder agregarle funcionalidad.*/

flechaDerecha.addEventListener('click', () => {//Agregamos un detector de elementos a los botones, el evento que causa es el click, cuando se hace click al botón
  fila.scrollLeft += fila.offsetWidth;
}); 

flechaIzquierda.addEventListener('click', () => {
  fila.scrollLeft -= fila.offsetWidth;
});
/*Dentro de esta función se accede a la propiedad "scrollLeft" del elemento fila, que representa la cantidad de pixeles que el contenido se ha desplazado horizontalmente hacia la iziquierda o derecha. Esto a su vez se le suma el valor de "fila.offsetWidth" que es el ancho del contenedor del carrusel*/

peliculas.forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e) => {
      const elemento = e.currentTarget;
      setTimeout(() => {
        peliculas.forEach(pelicula => pelicula.classList.remove('hover')); 
        elemento.classList.add('hover'); 
      }, 200);
    });
  });
  /*Creamos un ciclo forEach por cada elemento de pelicula, dentro de este ciclo se agrega un detector de eventos a cada elemnto, este evento se activa cuando el cursor del mouse entra sobre el elemento película. Utilizamos la función setTimeout para retrasar la ejecución del código por 200milisegundos*/

  fila.addEventListener('mouseleave', () => {
    peliculas.forEach(pelicula => pelicula.classList.remove('hover')); 
  });
/*Creamos otro ciclo forEach para iterear nuevamente a través de peliculas, para cada película eliminamos la clase 'hover' para asegurar que solo la película sobre la que se desplaza el cursor tenga el efecto de desplazamiento aplicado*/

//OCULTAR FLECHAS
const flechas = document.querySelectorAll(".contenedor-principal .flecha-izquierda, .contenedor-principal .flecha-derecha");
/*Declaramos la variable flechas, donde seleccionaremos todas las flechas que tengan la clase correspondiente*/
window.addEventListener("scroll", function() { //Agregamos un evento al objeto flechas, este se activará cada vez que se produzca un scroll
  const scrollPosition = window.scrollY;
  const referenciaScroll = 100; // Definimos un valor de referencia  de 100pixeles para ocultar las flechas

  if (scrollPosition >= referenciaScroll) { /*Con la sentencia if comparamos la posicion del scrollPosition si es mayor o igual al valor de referenciaScroll*/
    flechas.forEach(flecha => flecha.classList.add("oculto"));/*Dentro del if utilizamos un bluce forEach que recorre cada flecha seleccionada y la agrga a la clase oculto, esta clase está definida en el CSS con display:none*/

  } else { /*En esta linea se ejecuta si scrollPosition es menor que referenciaScroll. También utilizamos un bucle forEach que recorre cada flecha seleccionada y elimina a la clase oculto, así mostrando las flechas nuevamente*/
    flechas.forEach(flecha => flecha.classList.remove("oculto")); 
  }
});


//Generador de mensajes emergentes
//FRASES CELEBRES 
//Creamos un arreglo para almacenar cada frase ceelebre y sus imagenes correspondientes
let frasesCelebres = [
  {
    frase: "Que la fuerza te acompañe - Star wars",
    imagen: "img/Frases/Yoda.jpg"
  },
  {
    frase: "Hasta el infinito... ¡y más allá! - Toy Story",
    imagen: "img/Frases/Buzz.jpeg"
  },
  {
    frase: "Hasta la vista, baby - Terminator 2: El juicio final",
    imagen: "img/Frases/Terminator.png"
  },
  {
    frase: "Siempre se llega a alguna parte si se camina lo bastante - Alicia en el país de las maravillas",
    imagen: "img/Frases/Gato.png"
  },
  {
    frase: "¡Yo soy Iron Man! - Avengers End Game",
    imagen: "img/Frases/IronMan.jpg"
  },
  {
    frase: "Es leviosa, no leviosá - Harry Potter y la piedra filosofal",
    imagen: "img/Frases/Hermione.jpeg"
  },
  {
    frase: "¡Yo soy el rey del mundo! - Titanic",
    imagen: "img/Frases/Jack.jpg"
  },
  {
    frase: "Hakuna Matata - El rey león",
    imagen: "img/Frases/ReyLeon.png"
  },
  {
    frase: "Le haré una oferta que no podrá rechazar - El Padrino",
    imagen: "img/Frases/ElPadrino.png"
  },
  {
    frase: "La vida es la preparación detrás del telón que nunca subirá - El show de Truman",
    imagen: "img/Frases/Truman.jpeg"
  }
]

//Creamos una funcion para mostar la frase celebre y su imagen de forma aleatoria
function mostrarFraseCelebre() {
  let indice = Math.floor(Math.random() * frasesCelebres.length) //creamos uan variable llamada indice que le asignara un valor numerico a cada frase y hará que se muestre de forma aleatoria
  let frase = frasesCelebres[indice].frase //Creamos una variable llamada frase para almacenar la frase que se va a mostar segun el indice obtenido 
  let imagen = frasesCelebres[indice].imagen //Creamos una variable llamada imagen para almacenar la imagen que se va a mostar segun el indice obtenido
  document.getElementById("frase").innerText = frase //Utilizamos la funcion getElemntById para mostar la frase correspondiente 
  document.getElementById("imagenPelicula").src = imagen //Utilizamos la funcion getElemntById para mostar la imagen correspondiente 
}

mostrarFraseCelebre() //Lamamos a la funcion mostarFraseCelebere para agregar el contenido en el html

setInterval(mostrarFraseCelebre, 30000) //Agregamos una funcion para que la farse y la imagen cambien cada 30 segundos 


//Conversor de divisas
//API
fetch("https://ve.dolarapi.com/v1/dolares") //Consultamos los valores de la api 
.then(response => response.json())
.then(data => {
  const tbody = document.querySelector('tbody'); //Creamos la constante tbody para contener el cuerpo de la tabla donde se vana a colocar los datos
    data.forEach(tipoCambio => { //Creamos un bucle para obtener los datos que necesitamos y realizar las operaciones
      const promedio = tipoCambio.promedio //Creamos la constante promedio para extraer el promedio que nos arroja la api o el valor del dolar 
      const precioMultiplicado = promedio * 1.99 //Multiplicamos le valor obtenido por el precio de la suscripcion

      const fila = document.createElement('tr') //Creamos la constante fila para crear un nuevo elemnto de fila en la tabla

      const tipoCambioCell = document.createElement('td') //Creamos la constante tipoCambioCell para para crear un nuevo elemnto  en la tabla y almacenar el dato del tipo de cambio ya que hay 3 
      tipoCambioCell.textContent = tipoCambio.nombre //Utilizamos esta funcion para indicar que tipo de cambio es en la tabla como "Dolar oficial"

      const precioCell = document.createElement('td') //Creamos un nuevo elemnto para mostar y almacenar el percio calculado en la tabla
      precioCell.textContent = precioMultiplicado.toFixed(2) + ' Bs' //Indicamos que el valor calculado solo contendra 2 decimales y que a un laod se le agrege "Bs"

      fila.appendChild(tipoCambioCell)//Se agrega el tipo de moneda a la fila 
      fila.appendChild(precioCell) //Se agrega el precio calculado a la fila 

      tbody.appendChild(fila) //Se agrega toda la fila a la tabla 
    });
});


//Formulario 
function validarFormulario() {
  let nombre = document.getElementById('nombre').value; //Creamos una varibale de cada elemento del formulario y determinamos si existe o se encuentra lleno
  let email = document.getElementById('email').value;
  let telefono = document.getElementById('telefono').value;
  let direccion = document.getElementById('direccion').value;
  let comentario = document.getElementById('comentario').value;

  if (nombre && email && telefono && direccion && comentario) { //Creamos un condicional para que en caso de que se rellenen todos los elementos del formulario se muestre un mensaje de exito
      Swal.fire({
          title: "Enviado!",
          text: "Su formulario ha sido enviado de forma exitosa",
          icon: "success"
      });
      document.getElementById("Formulario").reset();
  } else { //Agregamos un else para que muestre un mensaje de error en caso de que no se haya rrellenado todo el formulario 
      Swal.fire({
          title: "Error",
          text: "Por favor complete todos los campos antes de enviar el formulario",
          icon: "error"
      });
  }
}
