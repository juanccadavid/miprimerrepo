const {getIp, getLongitudLatitud} = require('./funciones');
async function ConsumirApiAsin(){
    let IP = await getIp();
    let [longitud,latitud] = await getLongitudLatitud(IP);
    console.log('°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°');
    console.log('Valores longitud y latitud index2: ',longitud,latitud);
    console.log('°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°');
} 
ConsumirApiAsin();