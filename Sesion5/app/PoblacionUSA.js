//Se debe sumar toda la poblacion y dividir por el mumero de objetos, es decir, por año
const axios = require('axios');

const poblacion = async() => {
const {data:{data}} = await axios.get(`https://datausa.io/api/data?drilldowns=Nation&measures=Population`);
let total = 0;
data.map(i =>{
    total = total+ i.Population;
});
console.log('Población total: ',total);
}
poblacion();

// TAREA : Terminar el ejercicoo anteriro y hacer el provmedio para etsa población con un .lenght
