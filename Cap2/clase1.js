console.log("hola mundo");
var nombre= 'Celia';
var apellido= 'VARGAS';

var nombreMayus=
 nombre.toUpperCase();
var apellidoMinus= apellido.toLowerCase();
var primeraLetraNomb= nombre.charAt(0);
var cantidadDeLetrasNombre = nombre.length;
 var nombreCOmpleto = nombre + ' ' + apellido;

// interpolacion
var nombreComp = `${nombre} ${apellido.toLowerCase()}`;
var str = nombre.substr(1, 3);

1

var edad = 27;
//edad = edad+1
edad +=1;

var peso = 74;
peso = peso -2
var precioDelVino = 200.3;
var total = Math.round(precioDelVino *100 /3 )/100
var totalStr = total.toFixed(3);
var total2 = parseFloat(totalStr)
