//const { Model } = require("sequelize/types")
const   { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize)=>{
    const estudiantes  = sequelize.define('estudiantesJuanCamiloC', {
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
    },{
        freezeTableName: true,
        createdAt:"std_created",
        updatedAt:"std_update",

    });
    return estudiantes;
};

// create({std_nombre:"Pedro",std_edad:22})
// findByPk(20)
// finsAll({where:{std_id:1}})
//update
//destroy
// std_nombre
// std_edad