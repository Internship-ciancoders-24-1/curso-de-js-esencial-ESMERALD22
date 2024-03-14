var andrea = {
    nombre: 'Andrea',
    apellido:'Vargas',
    edad: 25,
    altura: 1.80,
    cantidadDeLIbros: 10
}

var julio ={
    nombre: 'Julio',
    apellido:'López',
    edad: 25,
    altura: 1.50,
    cantidadDeLIbros: 25


}

var marta = {
    nombre: 'Marta',
    apellido:'Aceituno',
    edad: 25,
    altura: 1.65,
    cantidadDeLIbros: 84


}

var juan = {
    nombre: 'juan',
    apellido:'péres',
    edad: 15,
    altura: 1.85,
    cantidadDeLIbros: 75


}

var personas = [andrea, julio, marta, juan]

for ( var i =0; i < personas.length ; i ++){
    console.log(`La persona  ${personas[i].nombre} tiene ${personas[i].edad} años ` )
}

//function esAlta(persona){
//    return  persona.altura >= 1.8
//}
//var personasAltas = personas.filter(esAlta)

var personasALtas = personas.filter(function (persona){ return persona.altura >= 1.8})
console.log('Las personas altas son: ')
console.log(personasALtas)

const pasarAlturaACentimetros = persona => 
{
    return {
        ...persona,
        altura: persona.altura * 100
    }
}

    /* otra forma de return es solo con parentesis
    const pasarAlturaACentimetros = persona => 
    ({
        ...persona,
        altura: persona.altura * 100
    })

    */

var personasCms = personas.map (pasarAlturaACentimetros)
console.log('Las personas en centimetros son: ')
console.log(personasCms)

/*var acum =0
for (var i =0; i< personas.length; i++){

        acum = acum + personas[i].cantidadDeLIbros
}*/

const reducer = (acum, persona) => {
    return acum + persona.cantidadDeLIbros
}

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`EN total todos tienen ${totalDeLibros} libros`)