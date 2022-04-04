//Crrear funciones ASINCRONAS
/*
1
2
3
*/
//Lista Asincrona ---> PROMESA
async function getLista(){
    let i = 0;
    for (i = 0; i < 5; i++){
    console.log('For : ',i);
    }
    return i;
}
console.log('Lista Asincrona',getLista());

//Lista Sincrona
function getListaSincrona(){
    return false;
};
console.log('Lista Sincrona',getListaSincrona());

// AWAIT (en función async)--> para que no retorne nada hasta que no temrine la función
const getListaS = async () => {
    await getLista();
    console.log('Terminar')
    return true;
};
console.log(getListaS());