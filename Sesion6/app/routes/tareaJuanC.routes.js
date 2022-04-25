module.exports = (app) => {
    const tareaJuanC = require('../controller/tareaJuanC.controller');
    const router = require('express').Router();
    router.get('/tareaJuanC', tareaJuanC.findAll);
    app.use('/api',router);
};