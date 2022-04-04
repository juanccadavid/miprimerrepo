const { default: axios } = require('axios');
const axio = require('axios');
let urlApi=`https://jsonplaceholder.typicode.com/posts`;


// Consumir API
axios.get(urlApi)
.then(function ({data}){
    //handle success
    console.log(data);
})
    .catch(function (error) {
    // handle error
    console.log(error);
})
    .then(function () {
    // always executed
  });

// const gesusuariosThen = () =>{
//     axios.get(urlApi)
//     .then(function ({data}){
//     //handle success
//     console.log(data);
// })
//     .catch(function (error) {
//     // handle error
//     console.log(error);
// })
// }

// const getUsuarios = async () => {
//     try{
//         const { data, status } = await axios.gesusuariosThen(urlApi);
//         console.log(status);
//     }catch (e) {
//         console.log(e);
//     }
//     //console.log(data);
// };
// getUsuarios();