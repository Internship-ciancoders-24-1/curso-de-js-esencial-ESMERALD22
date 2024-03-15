class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn) {
        var {nombre, apellido } =this

        console.log(`HOla, me llamo ${this.nombre}`)
        if(fn){
            fn(nombre,apellido, false)
        }

    }
    soyAlto() {
        return this.altura >= 1.8
    }
}

//desarrollador hereda de persona
class Desarrollador extends Persona {
    //llamar al constructor del padre con super
    constructor(nombre, apellido, altura) {
        super(nombre, apellido,altura)
        //ya despues de usar el super podemos usar this
    }

    //funciones como parametros
    saludar(fn) {
        var {nombre, apellido } =this
        console.log(`Hola  soy  ${this.nombre} y soy un desarrollador`)

        if(fn){
            //ejecutamos la funcion
            fn(nombre,apellido, true)
        }
    }
    
}

function responderSaludo(nombre, apellido , esDev) {
    console.log(`Buen día ${nombre} ${apellido} `)
    if(esDev){
        console.log("No sabia que ereas desarrollador")
    }
}

var celia = new Persona('Celia', 'Vargas', 1.65)
var arturo = new Desarrollador('Arturo', 'Martínez',1.89)
var erika = new Persona('Erika', 'Luna', 1.75)

erika.saludar()
celia.saludar(responderSaludo)
console.log("soy alto: " + celia.soyAlto())
arturo.saludar(responderSaludo)
console. log("soy alto: " +  arturo.soyAlto()) 

