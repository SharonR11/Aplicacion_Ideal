const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuarioModel');
const { validationResult } = require('express-validator');

// Función para registrar arrendador
const signupArrendador = async (req, res) => {
    try {
        const {
            Nombres,
            Apellidos,
            DNI,
            Correo,
            Telefono,
            Direccion,
            Password,
            ContratoArrendamiento,
            DocumentacionLegal
        } = req.body;

        // Hash de la contraseña
        const hashedPassword = await bcrypt.hash(Password, 10);

        const nuevoArrendador = await Usuario.create({
            Nombres,
            Apellidos,
            DNI,
            Correo,
            Telefono,
            Direccion,
            Password: hashedPassword, // Guarda la contraseña cifrada en la base de datos
            RolID: 2, // ID del rol de arrendador
            ContratoArrendamiento,
            DocumentacionLegal,
            EstadoSesion: 0, // Aún no ha iniciado sesión
            CorreoVerificado: 1, // Correo verificado por defecto
            Estado: 1 // Usuario activo por defecto
        });

        // Genera el token JWT
        const token = jwt.sign({ usuarioID: nuevoArrendador.UsuarioID }, process.env.JWT_SECRET);

        res.status(201).json({ message: 'Arrendador registrado exitosamente.', usuario: nuevoArrendador, token });
    } catch (error) {
        console.error('Error al registrar arrendador:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};


const signupEstudiante = async (req, res) => {
    try {
        const {
            Nombres,
            Apellidos,
            DNI,
            Correo,
            Telefono,
            Direccion,
            Password
        } = req.body;

        if (!/^[\w-]+(\.[\w-]+)*@tecsup\.edu\.pe$/.test(Correo)) {
            return res.status(400).json({ message: 'El correo electrónico debe ser de dominio institucional.' });
        }
        // Hash de la contraseña
        const hashedPassword = await bcrypt.hash(Password, 10);

        const nuevoEstudiante = await Usuario.create({
            Nombres,
            Apellidos,
            DNI,
            Correo,
            Telefono,
            Direccion,
            Password: hashedPassword, // Guarda la contraseña cifrada en la base de datos
            RolID: 3, // ID del rol de estudiante
            EstadoSesion: 0, // Aún no ha iniciado sesión
            CorreoVerificado: 1, // Correo verificado por defecto
            Estado: 1 // Usuario activo por defecto
        });

        // Genera el token JWT
        const token = jwt.sign({ usuarioID: nuevoEstudiante.UsuarioID }, process.env.JWT_SECRET);

        res.status(201).json({ message: 'Estudiante registrado exitosamente.', usuario: nuevoEstudiante, token });
    } catch (error) {
        console.error('Error al registrar estudiante:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};





// Función para iniciar sesión
const login = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        // Buscar al usuario por su correo electrónico
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: 'Credenciales inválidas' });
        }

        // Verificar la contraseña
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Credenciales inválidas' });
        }

        // Generar token de acceso
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
// Función para cerrar sesión
const logout = async (req, res) => {
    // Lógica para cerrar sesión
    // Por ejemplo, eliminar el token de acceso del cliente
    res.json({ message: 'Sesión cerrada exitosamente' });
};



// Función para verificar la validez de un token
const verifyToken = async (req, res) => {
    // Lógica para verificar el token
};

// Función para actualizar el perfil del usuario
const updateProfile = async (req, res) => {
    // Lógica para actualizar el perfil del usuario
};

// Función para eliminar la cuenta de un usuario
const deleteAccount = async (req, res) => {
    // Lógica para eliminar la cuenta del usuario
};

// Función para solicitar un restablecimiento de contraseña
const forgotPassword = async (req, res) => {
    // Lógica para solicitar un restablecimiento de contraseña
};

// Función para manejar el proceso de verificación del correo electrónico
const verifyEmail = async (req, res) => {
    // Lógica para verificar el correo electrónico
};

// Función para cerrar sesión en todos los dispositivos
const logoutAllDevices = async (req, res) => {
    // Lógica para cerrar sesión en todos los dispositivos
};

module.exports = {
    verifyToken,
    updateProfile,
    deleteAccount,
    forgotPassword,
    verifyEmail,
    logoutAllDevices,
    login,
    logout,
    signupArrendador,
    signupEstudiante
};
