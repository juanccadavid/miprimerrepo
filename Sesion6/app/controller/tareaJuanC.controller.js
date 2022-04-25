//Controlador
const db = require('../models');
const tareaJuanC = db.tareaJuanC;

//Forma corta con Async
exports.findAll = async (req,res) => {
    //const respuesta = await tareaJuanC.findAll( {raw: true});
    const respuesta = await tareaJuanC.findAll({
        where: {std_sexo: req.query.sexo},
        raw: true,
    });
    res.send(respuesta);
};

exports.create =  async (req, res) => {
    try{
    const lista = {
        std_nombre:req.query.nombre,
        std_edad:req.query.edad,
        std_sexo:req.query.sexo,
    };    
    const respuesta = await tareaJuanC.create(lista);
    res.send(respuesta);
    } catch (error) {
    res
    .status(500)
    .send({mensaje:err.mensaje || "Se presentó error insertando"}); 
}
//     Forma Larga sin Async
//     tareaJuanC.create(lista).then((data) => {
//         res.send(data);
//     }).catch(err => {
//         res.status(500).send({mensaje:err.mensaje || "Se presentó error insertando"});
//     });
// };
};