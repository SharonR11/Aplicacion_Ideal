import dbconfig from "./config/dbconfig.js";
import{sequelize, DataTypes, Sequelize} from "sequelize";


const sequelize = new Sequelize(
    dbconfig.DB,  // database name
    dbconfig.USER,   // username
    dbconfig.PASSWORD,  // password
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
)
sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})
const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.products = require('./productModel.js')(sequelize, DataTypes)
db.reviews = require('./reviewModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})
db.products.hasMany(db.reviews, {
    foreignKey: 'product_id',
    as: 'review'
})

db.reviews.belongsTo(db.products, {
    foreignKey: 'product_id',
    as: 'product'
})


module.exports = db