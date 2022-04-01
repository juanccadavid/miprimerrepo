var nombre="Juan"; // Var -> deja la variable global
const ESTADO=1; // const -> no permite cambiar posteriormente el valor de la variable
let apellido="Cadavid"; //Recomendado

if(nombre === "Juan") // Triple igual es para validar el dato y el tipo de dato
{
    console.log('Estoy en el if');
    let apellido="Restrepo"; 
    console.log(apellido);
} 

console.log('°°°°°°°°°°°°°°°°°°°°°°°°°°°');
console.log(nombre);
//console.log(ESTADO);
console.log(apellido);
console.log('°°°°°°°°°°°°°°°°°°°°°°°°°°°');
