//variable de alcance global. 
//var nombre = 'Celia'

//Objetos
var Celia = {
    // clave : valor
    nombre: 'Celia',
    apellido: 'Vargas',
    edad: 25
}

var Lourdes = {
    nombre: 'Lourdes',
    apellido: 'Sontay',
    edad: 25
}

function imprimirNombreMayuscula({ nombre }) {  //nueva forma para solo acceder al atributo que nos interesa ddel objeto
    //la variable n tiene un alcance local
    var nombre = nombre.toUpperCase();
    console.log(nombre);
}
function imprimirNombreMayuscula2(persona) {
    //la variable n tiene un alcance local 
    var { nombre } = persona; //otra forma de acceder al atributo que nos interesa ddel objeto
    console.log(nombre.toUpperCase());
}
function imprimirNombreEdad(persona) {
    //la variable n tiene un alcance local 
    var { nombre } = persona; //otra forma de acceder al atributo que nos interesa ddel objeto
    var { edad } = persona; //otra forma de acceder al atributo que nos interesa ddel objeto
    console.log('HOla soy ' + nombre.toUpperCase() + ' y tengo ' + edad + ' años. ');
}

imprimirNombreMayuscula(Celia); //pasamos el objeto
imprimirNombreMayuscula2(Lourdes);
imprimirNombreEdad(Lourdes);
//imprimirNombreMayuscula({nombre: 'JUanita'});
//imprimirNombreMayuscula();
//imprimirNombreMayuscula({apellidos: 'Juarez'});


function cumpleanio(persona) {
    console.log(persona)
    persona.edad += 1;  //auentamos edad 
    console.log(persona.edad)
}

function cumpleanio3(persona) { //solo modifica este objeto, sacando copia para modificar, el objeto origial no cambia
    return{ 
        ...persona , 
        edad: persona.edad+1
    }
}
function cumpleanio2(edad) {
    edad += 1;  //auentamos edad 
    console.log(edad)
}

cumpleanio(Celia)
cumpleanio2(Celia.edad)
