//Números mágicos
//Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
//Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.

const min = 1;
const max = 50;
const content = document.querySelector('#content');
let number = Math.floor(Math.random() * (max - min) + min);

function init() {
    content.innerHTML = `
    <div class="input-group mb-3 container">
        <input type="text" class="form-control mt-3" placeholder="Ingrese un numero enetre 1 y 50" aria-label="Recipient's username" aria-describedby="button-addon2" id="input">
        <button class="btn btn-outline-secondary mt-3" type="button" id="button-addon2" onclick="comparator(number)">Enviar</button>
    </div>`
    console.log(number)
}

function comparator(number) {
    debugger
    const inputValue = document.querySelector('#input').value;
    if (number == inputValue) {
        alert('Adivino el numero');
        window.location.reload();
    } else if (inputValue > number) {
        alert('El numero es mas chico');
    } else {
        alert('El numero es mas grande');
    }
}


//Generaciones
//Crea una clase llamada Persona que siga las siguientes condiciones:
//Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
//Los métodos que se debe poder utilizar  son:
//mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
//esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
//mostrarDatos: devuelve toda la información del objeto.
//Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generacion”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.



//Reloj
//Crear una web con un reloj que muestre la siguiente información:

document.write(new Date("Octubre 29, 2015 12:02:58"));

//Cronómetro
//Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.

window.onload = start;

function start() {
    document.querySelector(".start").addEventListener("click", iniciar);
    document.querySelector(".stop").addEventListener("click", stop);
    document.querySelector(".restart").addEventListener("click", restart);
    hour = 0;
    minute = 0;
    second = 0;
    document.getElementById("hms").innerHTML = "00:00:00";
}

function iniciar() {
    sumar();
    modifier = setInterval(sumar, 1000);
    document.querySelector(".start").removeEventListener("click", iniciar);
}

function sumar() {
    second++;
    if (second > 59) {
        minute++;
        second = 0;
    }
    if (minute > 59) {
        hour++;
        minute = 0;
    }
    if (hour > 24) {
        hour = 0;
    }

    document.getElementById("hms").innerHTML = hour + ":" + minute + ":" + second;
}

function stop() {
    clearInterval(modifier);
    document.querySelector(".start").addEventListener("click", iniciar);

}

function restart() {
    clearInterval(modifier);
    document.getElementById("hms").innerHTML = "00:00:00";
    hour = 0;
    minute = 0;
    second = 0;
    document.querySelector(".start").addEventListener("click", iniciar);
}

//Temporizador
//Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el contador. Debe contener los botones, iniciar, pausar y reset. 

