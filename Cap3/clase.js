var celia = {
nombre: 'Celia',
apellido:'Vargas',
edad: 25,
ingeniero : true,
cocinero:false,
cantante :false,
guitarrista:false,
}

var juan = {
    nombre: 'jUAN',
    apellido:'péres',
    edad: 15,
    ingeniero : false,
    cocinero:true,
    cantante :true,
    guitarrista:false,
    }
function imprimiProfesiones(persona){
    console.log(`${persona.nombre} es : `)
    if (persona.ingeniero === true){
        console.log(`Ingeniero `)
    }
    if (persona.cocinero === true){
        console.log(`Cocinero `)
    }
    if (persona.cantante === true){
        console.log(`Cantante `)
    }
    if (persona.guitarrista === true){
        console.log(`Guitarrista `)
    }
}
function imprimirMayorEdad({edad}){
    console.log(edad)
    if(edad>=18)
    {
        console.log('Es mayor de edad')
    }
    else{
        console.log('Es menor de edad')
    }
}

imprimiProfesiones(celia)
imprimirMayorEdad(celia)

imprimiProfesiones(juan)
imprimirMayorEdad(juan)

const MAYORIA_DE_EDAD = 18
function esMayorDeEdad(persona){
    return persona.edad >=MAYORIA_DE_EDAD

}
 function edadValida(persona){
    if(esMayorDeEdad(persona)){console.log('Es mayor de edad') }
    else { console.log('Es menor de edad') }
 }

 edadValida(juan)
 edadValida(celia)

 //funciones equivalentes
var esMayorDeEdad1 =  function (persona){
    return persona.edad >=MAYORIA_DE_EDAD
}
var esMayorDeEdad2 =   persona => {  //si solo es un parametro entonces se limina los parntesis  ->  persona 
    return persona.edad >=MAYORIA_DE_EDAD
}
var esMayorDeEdad3 =   persona =>  persona.edad >=MAYORIA_DE_EDAD  //si solo es un parametro entonces se limina los parntesis  ->  persona , si solo es un return se eliminan llaves
var esMayorDeEdad4 =   ({edad}) =>  edad >=MAYORIA_DE_EDAD  //otra forma


function permitirAcceso(){
    if(!esMayorDeEdad4(celia)){
        console.log('No tienes acceso')
    }
    else{
        console.log('Tienes acceso')
    }
}

permitirAcceso()

