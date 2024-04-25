const Usuario = require('./usuarioModel'); 
const Servicio = require('./servicioModel');
const Institucion = require('./institucionoModel');
const Distrito = require('./distritoModel');
const PagosAdicionales = require('./pagosadicionalesModel');


module.exports = (sequelize, DataTypes) => {
    const Cuarto = sequelize.define('Cuartos', {
        CuartoID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        UsuarioID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Titulo: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        Descripcion: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        Direccion: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        Precio: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        TarifaAdicional: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        FechaPublicacion: {
            type: DataTypes.DATE,
            allowNull: true
        },
        FechaExpiracion: {
            type: DataTypes.DATE,
            allowNull: true
        },
        Visible: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        PagoAdicionalID: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        Fotos: {
            type: DataTypes.ARRAY(DataTypes.STRING), // Cambia el tipo de datos a ARRAY de STRING
            allowNull: false
        },
        Baño: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        ServicioID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        InstitucionID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        DistritoID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false // Desactiva el seguimiento de fecha de creación y actualización
    });
    Cuarto.belongsTo(Usuario, {
        foreignKey: 'UsuarioID',
        as: 'Usuario'
    });
    
    Cuarto.belongsTo(Servicio, {
        foreignKey: 'ServicioID',
        as: 'Servicio'
    });
    
    Cuarto.belongsTo(Institucion, {
        foreignKey: 'InstitucionID',
        as: 'Institucion'
    });
    
    Cuarto.belongsTo(Distrito, {
        foreignKey: 'DistritoID',
        as: 'Distrito'
    });
    
    Cuarto.belongsTo(PagosAdicionales, {
        foreignKey: 'PagoAdicionalID',
        as: 'PagosAdicionales'
    });
    return Cuarto;
};

