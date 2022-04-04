const axios = require('axios'); // Invocar 
const kelvinToCelsius = require('Kelvin-to-celsius');

let UrlAppiIP = 'https://api.ipify.org/?format=json';
let UrlAppiClima = 'https://api.openweathermap.org/data/2.5/weather?lon=LONGITUD&lat=LATITUD&appid=6966d6b283a10ad3c2ac309a9ec4e348';

// Make a request for a user with a given ID
axios.get('https://api.ipify.org/?format=json')  
  .then(function (respuesta) {
  // handle success
  const {data: {ip}} = respuesta; //Aplicando Destructuring
  console.log('Esta es la ip: ',ip);

    let UrlAppiInfo = `https://ipinfo.io/${ip}/geo`;
    axios.get(UrlAppiInfo)
      .then(function ({data:{loc}}) {
        console.log(loc.split(','));
        let [longitud , latitud ] = loc.split(',') //No Poner Espacios en el split

        UrlAppiClima = UrlAppiClima.replace("LONGITUD",longitud);
        UrlAppiClima = UrlAppiClima.replace("LATITUD",latitud);
        
        console.log('Longitud: ', longitud,' Latitud: ',latitud);
        console.log('El clima es: ',UrlAppiClima);
          
        axios.get(UrlAppiClima)
        .then(function ({data}) {
          console.log(data)
          const{main:{temp}} = data;
          console.log('Temperatura',temp);
          const convert =   kelvinToCelsius(temp);

          console.log(`KEVIN: ${temp} a CELSIUS: ${kelvinToCelsius(temp)}`);
        })
      })
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


let UrlAppiInfo = `https://ipinfo.io/Dirección IP /geo`;

const getIp =async() => {
  const {data:{ip}} = await axios.get(UrlAppiIP);
  return ip;
}

const getLongitudLatitud = async(ip) => {
  UrlAppiInfo = UrlAppiInfo.replace('Dirección IP ',ip);
  const {data:{loc}} = await axios.get(UrlAppiInfo);
  return loc.split(',');
}

module.exports = {getIp,getLongitudLatitud}