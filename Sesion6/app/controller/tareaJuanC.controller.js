//Controlador
const db = require('../models');
const tareaJuanC = db.tareaJuanC;

exports.findAll = (req,res) => {
    tareaJuanC
    .findAll()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            mensaje:err.mensaje || "Se presentó error consultando la tabla",
        });
    });
};