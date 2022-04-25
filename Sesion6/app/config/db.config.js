module.exports = {
    HOST: '10.0.0.144',
    USER: 'gesDocCmi',
    PASSWORD:'Arus2019**.',
    DB: 'nodejs',
    dialect:"mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 60000,
        idle: 3000
    }
}