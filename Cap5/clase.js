//para hacer herencia debemos hacer una funcion .propertyIsEnumerable(
function heredaDe (prototipoHijo, prototipoPadre)
{
    //aqui le asignamos un padre al hijo 
    var fn = function (){}
    fn.prototype = prototipoPadre.prototype 
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor =prototipoHijo
}

function Persona(nombre, apellido, altura) {
    //this hace referencia al objeto , le asignamos los parametros
    this.nombre = nombre
    this.apellido = apellido
    this.edad = 25
    this.altura = altura  ///todas las personas tendran  años
    //es implicito , podemos agregar
    //return this  
}
//decimos que dentro de persona hay una funcion que se llama saludar
Persona.prototype.saludar = function () {
    console.log(`HOla, me llamo  ${this.nombre}`)
}
Persona.prototype.soyAlto = function () {
    return this.altura >= 1.8
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}
heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar= function(){
    console.log(`Hola  soy  ${this.nombre} y soy un desarrollador` )
}

//creamos nuevo objeto
/*var celia = new Persona('Celia', 'Vargas', 1.65)
celia.saludar()
console.log("soy alto: " + celia.soyAlto())

var erika = new Persona('Erika', 'Luna', 1.75)
erika.saludar()
console.log('soy alto: ' + erika.soyAlto())

var arturo = new Persona('Arturo', 'Martínez', 1.82)
arturo.saludar()
console.log('soy alto: ' + arturo.soyAlto())
*/

var erika = new Persona('Erika', 'Luna', 1.75)
erika.saludar()
var arturo = new Desarrollador('Arturo', 'Martínez',1.89)
arturo.saludar()
console. log(arturo.soyAlto()) 



//el prototipe nos indica que atributos, metodos, constructor tiene un objecto, tambien tiene un metodo --proto--