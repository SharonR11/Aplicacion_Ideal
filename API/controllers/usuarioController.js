const Usuario = require('../models/usuarioModel');
const Role = require('../models/roleModel');
const ColorFondo = require('../models/colorfondoModel');

// Función para registrar un nuevo usuario
const registrarUsuario = async (req, res) => {
    try {
        const { Nombres, Apellidos, DNI, Correo, Telefono, Direccion, Password, RolID, ContratoArrendamiento, DocumentacionLegal, FotoUsuario, ColorID, PremiumStatus, FechaInicioPremium, FechaVencimientoPremium, EstadoSesion, CorreoVerificado, Estado } = req.body;
        
        // Verificar si el correo ya está registrado
        const usuarioExistente = await Usuario.findOne({ where: { Correo } });
        if (usuarioExistente) {
            return res.status(400).json({ message: 'El correo electrónico ya está registrado.' });
        }

        // Crear el nuevo usuario en la base de datos
        const nuevoUsuario = await Usuario.create({
            Nombres,
            Apellidos,
            DNI,
            Correo,
            Telefono,
            Direccion,
            Password,
            RolID,
            ContratoArrendamiento,
            DocumentacionLegal,
            FotoUsuario,
            ColorID,
            PremiumStatus,
            FechaInicioPremium,
            FechaVencimientoPremium,
            EstadoSesion,
            CorreoVerificado,
            Estado
        });

        res.status(201).json({ message: 'Usuario registrado exitosamente.', usuario: nuevoUsuario });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};

module.exports = {
    registrarUsuario
};
