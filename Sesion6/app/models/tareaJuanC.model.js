const   { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize)=>{
    const tareaJuanC  = sequelize.define('tareaJuanC', {
        std_id : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowedNull: false,
            comment: 'Esta es la clave principal/primaria de la tabla'
        },
        std_nombre : {
            type: Sequelize.STRING(100),
        },
        std_edad : {
            type: Sequelize.INTEGER,
        },
        std_sexo : {
            type: Sequelize.STRING(1),
        },
        std_barrio : {
            type: Sequelize.STRING(20),
        },
    },{
        freezeTableName: true,
        createdAt:"std_created",
        updatedAt:"std_update",
    });
    return tareaJuanC;
};