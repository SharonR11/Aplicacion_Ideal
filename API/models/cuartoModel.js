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
    
    return Cuarto;
};

