const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const luckeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }


/*
const onPeolpeResponse = function (persona){
    console.log(`Hola, yo soy  ${persona.name}  `)
}
function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url, opts, onPeolpeResponse)
}

//FUNCIONES ASINCRONRAS
//asincronismo, no sabemos el orden en que llegan las cosas
$.get(luckeUrl, opts, onPeolpeResponse)
obtenerPersonaje(2)
obtenerPersonaje(3)
obtenerPersonaje(5)
obtenerPersonaje(10)
obtenerPersonaje(15)
*/



/*
//CALLBACK
function obtenerPersonaje(id, callback) {
   const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
   $.get(url, opts, callback)
       .fail(function() {
           console.log(`Sucedión un error`)
       })
}

//reuqest en serie
obtenerPersonaje(1, function (personaje) {
   console.log(`Hola, yo soy  ${personaje.name}`)
   obtenerPersonaje(2, function (personaje) {
       console.log(`Hola, yo soy  ${personaje.name}  `)
       obtenerPersonaje(5, function (personaje) {
           console.log(`Hola, yo soy  ${personaje.name}  `)
           obtenerPersonaje(10, function (personaje) {
               console.log(`Hola, yo soy  ${personaje.name}  `)

           })

       })

   })
})

*/

/*------------------------------------PROMESAS para resolver una funcion asincrona*/
/*
function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        //cuando se ejecute esta funcion, entonces resolvemos
        $.get(url, opts, function (data) {
            resolve(data)
        }).fail(() => reject(id))
    })
}

function onError(id){
    console.log(`Sucedición un error al obetner el personaje ${id}`)
}
obtenerPersonaje(1)
    .then(function (personaje) {
        console.log(`EL personaje uno es ${personaje.name}`)
    })
    .catch(onError)
*/

//---------------------------------------------------------------promesas encadenadas
/*
function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        //cuando se ejecute esta funcion, entonces resolvemos
        $.get(url, opts, function (data) {
            resolve(data)
        }).fail(() => reject(id))
    })
}

function onError(id){
    console.log(`Sucedición un error al obtener el personaje ${id}`)
}
obtenerPersonaje(1) /// los request se hacen en serie
    .then(personaje1 => {
        console.log(`EL personaje 1 es ${personaje1.name}`)
        return obtenerPersonaje(2)
    })
    .then (personaje2 => {
        console.log(`EL personaje 2 es ${personaje2.name}`)
        return obtenerPersonaje(3)
    })
    .then (personaje3 => {
        console.log(`EL personaje 3 es ${personaje3.name}`)
        return obtenerPersonaje(4)
    })
    .then (personaje4 => {
        console.log(`EL personaje 4 es ${personaje4.name}`)
        return obtenerPersonaje(5)
    })
    .then (personaje5 => {
        console.log(`EL personaje 5 es ${personaje5.name}`)
        return obtenerPersonaje(6)
    })
    .then (personaje6 => {
        console.log(`EL personaje 6 es ${personaje6.name}`)
        return obtenerPersonaje(7)
    })
    .then (personaje7 => {
        console.log(`EL personaje 7 es ${personaje7.name}`)
    })
    .catch(onError)
*/

/*----------------------------------------- Promesas en paralelo-----------------------------------------*/

var ids = [1, 2, 3, 4, 5, 6, 7]

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        //cuando se ejecute esta funcion, entonces resolvemos
        $.get(url, opts, function (data) {
            resolve(data)
        }).fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Sucedición un error al obtener el personaje ${id}`)
}

/*var promesas = ids.map(function (id){
    return obtenerPersonaje(id)
})*/

var promesas = ids.map(id => obtenerPersonaje(id))
Promise.all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)


/* ------------------------------------------ ASINC -AWAIT */

function onError(id) {
    console.log(`Sucedición un error al obtener el personaje ${id}`)
}
async function obtenerPersonajes() {
    var ids2 = [1, 2, 3, 4, 5, 6, 7]
    var promesas2 = ids2.map(id => obtenerPersonaje(id))

    try {
        var personajes = await Promise.all(promesas2)  //hasta que todas las promesas esten resultas, entonces ya se asigna a la variable
        console.log(personajes)
    } catch (id) {
        onError
    }
}
obtenerPersonajes()