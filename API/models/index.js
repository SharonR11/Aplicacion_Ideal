const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);

sequelize.authenticate()
.then(() => {
    console.log('Conectado a la base de datos!');
})
.catch(err => {
    console.error('Error de conexión:', error);
})

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.roles = require('./roleModel.js')(sequelize, DataTypes)
db.colorfondos = require('./colorfondoModel.js')(sequelize, DataTypes)
db.comentarioresenas = require('./comentarioresenaModel.js')(sequelize, DataTypes)
db.cuartos = require('./cuartoModel.js')(sequelize, DataTypes)
db.departamentos = require('./departamentoModel.js')(sequelize, DataTypes)
db.distritos = require('./distritoModel.js')(sequelize, DataTypes)
db.favoritos = require('./favoritoModel.js')(sequelize, DataTypes)
db.instituciones = require('./institucionModel.js')(sequelize, DataTypes)
db.pagosreservas = require('./pagoreservaModel.js')(sequelize, DataTypes)
db.pagosadicionales = require('./pagosadicionalesModel.js')(sequelize, DataTypes)
db.provincias = require('./provinciaModel.js')(sequelize, DataTypes)
db.resenas = require('./resenaModel.js')(sequelize, DataTypes)
db.reservas = require('./reservaModel.js')(sequelize, DataTypes)
db.servicios = require('./servicioModel.js')(sequelize, DataTypes)
db.tipopagos = require('./tipopagoModel.js')(sequelize, DataTypes)
db.usuario = require('./usuarioModel.js')(sequelize, DataTypes)
db.verificacionvorreos = require('./verificacioncorreoModel.js')(sequelize, DataTypes)

try {
    db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync done!')
    })
} catch (error) {
    console.error('Error al sincronizar los modelos:', error);
}


module.exports = db
