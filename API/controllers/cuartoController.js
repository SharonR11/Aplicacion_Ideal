const db = require('../models');
const Cuarto = db.cuartos;
const Usuario = db.usuarios;

const registrarCuarto = async (req, res) => {
    try {
        console.log('req.user:', req.user);
        // Verificar si el usuario está autenticado y obtener su ID
        const usuarioID = req.user ? req.user.UsuarioID : null;
        if (!usuarioID) {
            return res.status(401).json({ message: 'Acceso no autorizado. Debes iniciar sesión para registrar un cuarto.' });
        }

        // Obtener los datos del cuarto desde el cuerpo de la solicitud
        const { Titulo, Descripcion, Direccion, Precio, Baño, ServicioID, InstitucionID, DistritoID } = req.body;

        // Verificar si el usuario es arrendador (RolID = 2) y tiene sesión activa
        const usuario = await Usuario.findOne({ where: { UsuarioID: usuarioID, RolID: 2, EstadoSesion: true } });
        if (!usuario) {
            return res.status(401).json({ message: 'Acceso no autorizado. Solo los arrendadores con sesión activa pueden registrar cuartos.' });
        }

        // Crear el cuarto con el ID del usuario autenticado
        const fechaCreacion = new Date();
        await Cuarto.create({
            UsuarioID: usuarioID,
            Titulo,
            Descripcion,
            Direccion,
            Precio,
            Baño,
            ServicioID,
            InstitucionID,
            DistritoID,
            FechaCreacion: fechaCreacion
        });

        res.status(201).json({ message: 'Cuarto registrado exitosamente.' });
    } catch (error) {
        console.error('Error al registrar el cuarto:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};

module.exports = {
    registrarCuarto
};
