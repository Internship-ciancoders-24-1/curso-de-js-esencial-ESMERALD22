
/*VARIABLES LET,VAR,CONST*/
var Celia = {
    nombre: 'Celia',
    apellido: 'Vargas',
    edad: 25
}

function esMayorDeEdad(persona) {
    let mensaje
    const MAYORIA_DE_EDAD = 18
    if (persona.edad >= MAYORIA_DE_EDAD) {
        mensaje = 'Es mayor de edad'
    } else {
        mensaje = 'Es menor de edad'
    }
    console.log(mensaje)
}


for (let i = 0; i < 10; i++) {
    console.log(i)
}

//console.log(`Terminó el for, el valor de i es ${i}`)

/*DIFERENCIA DE FECHAS */
function diasEntreFechas(fecha1, fecha2) {
    const unDia = 1000 * 60 * 60 * 24
    const diferencia = Math.abs(fecha1 - fecha2)

    return Math.floor(diferencia / unDia)
}

const hoy = new Date()
const nacimiento = new Date(1998, 9, 22)

var dias = diasEntreFechas(hoy, nacimiento)
console.log(" Cantidad de días: " + dias)
/* RECURSIVIDAD*/
function divisionEntera(dividendo, divisor) {
    if (dividendo < divisor) {
        return 0
    }

    return 1 + divisionEntera(dividendo - divisor, divisor)
}

console.log("10/3 = " + divisionEntera(10, 3))


/*FACTORIAL */
function factorial(n) {
    if (!this.cache) {
        this.cache = {}
    }

    if (this.cache[n]) {
        return this.cache[n]
    }

    if (n === 1) {
        return 1
    }

    this.cache[n] = n * factorial(n - 1)
    return this.cache[n]
}

console.log("El factorial de 10 es : " + factorial(10))

/*CLosure */
function crearSaludo(finalDeFrase) {
    return function (nombre) {
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('güey')
const saludoColombiano = crearSaludo('amigo')

saludoArgentino('Celia')
saludoMexicano('Celia')
saludoColombiano('Celia')

//datos inmutables
const cumpleanosInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
})

console.log(cumpleanosInmutable(Celia))

// bind, call, setTimeout, apply 

function saludar(saludo = 'Hola') {
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

const saludarCelia = saludar.bind(Celia)

setTimeout(saludar.bind(Celia, 'Hola che'), 1000)

saludar.call(Celia, 'Hola che')

saludar.apply(Celia, ['Hola che'])

console.log('Hola mi nombre es Celia')
      ;[1, 2, 3].forEach(n => console.log(n * 2))

      const nombre = 'Celia'
      console.log('Hola mi nombre es Celia');
      `${nombre} es un desarrollador`

      function calcularDoble(numero) {
        return {
          original: numero, doble: numero * 2
        }
      }