const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../models')
const Usuario = db.usuarios;
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

        // Validación de entradas
        if (!Nombres || !Apellidos || !DNI || !Correo || !Telefono || !Direccion || !Password) {
            return res.status(400).json({ message: 'Todos los campos son requeridos.' });
        }
        // Validación de correo electrónico
        if (!/^[^\s@]+@gmail\.com$/.test(Correo)) {
            return res.status(400).json({ message: 'El correo electrónico debe ser de dominio @gmail.com.' });
        }
        // Hash de la contraseña
        const hashedPassword = await bcrypt.hash(Password, 10);

        // Crear nuevo arrendador
        const nuevoArrendador = await Usuario.create({
            Nombres,
            Apellidos,
            DNI,
            Correo,
            Telefono,
            Direccion,
            Password: hashedPassword, 
            RolID: 2, 
            ContratoArrendamiento,
            DocumentacionLegal,
            EstadoSesion: false, 
            CorreoVerificado: true, 
            Estado: true
        });

        // Generar token JWT
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

        // Validación de entradas
        if (!Nombres || !Apellidos || !DNI || !Correo || !Telefono || !Direccion || !Password) {
            return res.status(400).json({ message: 'Todos los campos son requeridos.' });
        }

        if (!/^[\w-]+(\.[\w-]+)*@tecsup\.edu\.pe$/.test(Correo)) {
            return res.status(400).json({ message: 'El correo electrónico debe ser de dominio institucional.' });
        }

        // Hash de la contraseña
        const hashedPassword = await bcrypt.hash(Password, 10);

        // Crear nuevo estudiante
        const nuevoEstudiante = await Usuario.create({
            Nombres,
            Apellidos,
            DNI,
            Correo,
            Telefono,
            Direccion,
            Password: hashedPassword, 
            RolID: 3, 
            EstadoSesion: false, 
            CorreoVerificado: true, 
            Estado: true
        });

        // Generar token JWT
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
