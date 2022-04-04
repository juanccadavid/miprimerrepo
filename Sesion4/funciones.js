// Funcion es simpleemnte un metodo que pude que retorne o no
function getNombre(nombre){
    console.log(nombre)
    console.log('°°°°°°°°°°°°°°°°°°°°°°°°°');
}
getNombre('Maria');

//Funcion tipo FLECHA
const getApellido = (apellido) => {
    console.log(apellido)
    console.log('°°°°°°°°°°°°°°°°°°°°°°°°°');
}
getApellido('Cadavid');

//Funcion ANONIMA o de invocación inmediata ---> (function(name,lastname){})
((name,lastname) => {
    console.log(name,lastname);
    console.log('°°°°°°°°°°°°°°°°°°°°°°°°°');
})('Jesus','de Nazareth');

// EXPORTAR VALORES
const getName = (valor) => {
    console.log(valor)
};
const getLastname = (valor) => {
    console.log(valor)
};
module.exports = {getName,getLastname};

//Para trabajar EXCEPCIONES
const getCargo = (valor) => {
    try{    
    console.log(valor)
    } catch (e) {
    //Aca se captura el error, se puede mostrar o llevar a la base de datos
    console.log('Este es el error: ',e) 
}
};

let nombre = 'Juan Camilo';
let apellido = 'Cadavid';

// Para concatenar variables `${variable1} ${variable2}`
console.log(`${nombre} ${apellido}`);