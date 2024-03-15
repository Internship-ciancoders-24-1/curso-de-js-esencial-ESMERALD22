class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar() {
        console.log(`HOla, me llamo ${this.nombre}`)
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

    saludar() {
        console.log(`Hola  soy  ${this.nombre} y soy un desarrollador`)

    }
}

var celia = new Persona('Celia', 'Vargas', 1.65)
celia.saludar()
console.log("soy alto: " + celia.soyAlto())

var arturo = new Desarrollador('Arturo', 'Martínez',1.89)
arturo.saludar()
console. log("soy alto: " +  arturo.soyAlto()) 