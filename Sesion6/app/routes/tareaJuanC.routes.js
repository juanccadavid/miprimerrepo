module.exports = (app) => {
    const tareaJuanC = require('../controller/tareaJuanC.controller');
    const router = require('express').Router();
    router.get('/tareaJuanC', tareaJuanC.findAll);
    //nueva ruta
    router.get('/create', tareaJuanC.create);
    app.use('/api',router);
};