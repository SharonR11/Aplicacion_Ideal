const Usuario = require('./usuarioModel'); 
const Resena = require('./resenaModel');

module.exports = (sequelize, DataTypes) => {
    const ComentarioResena = sequelize.define('ComentariosReseñas', {
        ComentarioID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Comentario: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        ReseñaID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        UsuarioID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        FechaCreacion: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        timestamps: false // Desactiva el seguimiento de fecha de creación y actualización
    });
    ComentarioResena.belongsTo(Usuario, { 
        foreignKey: 'UsuarioID', as: 'Usuario' }); // Asociación con el modelo de Roles
    ComentarioResena.belongsTo(Resena, { 
        foreignKey: 'ReseñaID', as: 'Resena' }); // Asociación con el modelo de ColorFondo

    return ComentarioResena;
};

