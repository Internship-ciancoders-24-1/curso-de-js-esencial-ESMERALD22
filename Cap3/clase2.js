var celia ={
    nombre: 'Celia',
    apellido: 'Vargas',
    edad: 25,
    peso: 75,
}

console.log(`AL inicio del año ${celia.nombre} pesaba ${celia.peso}`)
const INCREMENTO_PESO= 0.3
const DIAS_DEL_AÑO =365;

const aumentarPeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3 
const realizaDeporte = () => Math.random() < 0.8 

const META= celia.peso -3
var dias = 0;

while(celia.peso > META){
    console.log(celia.peso)
    if(comeMucho()){
        aumentarPeso(celia)
    }
    else if(realizaDeporte()){
        adelgazar(celia)
    }
    dias+=1
}


/*
for (var i = 1; i < DIAS_DEL_AÑO; i++) { 
    var random=  Math.random();
    if (random < 0.25) {
        //aumenta de peso
        aumentarPeso(celia)
    }else if (random < 0.5) {
        //adelgaza
        adelgazar(celia)
    }
    else{

    }
}
console.log(`Al final del año ${celia.nombre} pesa ${celia.peso.toFixed(1)} kg`)

**/

console.log(`Pasaron ${dias} dias hasta que ${celia.nombre} adelgazo 3kg`)



