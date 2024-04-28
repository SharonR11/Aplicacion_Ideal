const VerificacionCorreo = require('../models/verificacioncorreoModel');
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');

// Función para generar un código de verificación de 6 dígitos
const generarCodigoVerificacion = () => {
    return Math.floor(100000 + Math.random() * 900000); // Genera un código de 6 dígitos
};

// Función para enviar un correo electrónico con el código de verificación
const enviarCorreoVerificacion = async (correoDestino, codigoVerificacion) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'tu_correo@gmail.com', // Coloca aquí tu dirección de correo electrónico
                pass: 'tu_contraseña' // Coloca aquí tu contraseña de correo electrónico
            }
        });

        const mailOptions = {
            from: 'tu_correo@gmail.com', // Coloca aquí tu dirección de correo electrónico
            to: correoDestino,
            subject: 'Código de verificación',
            text: `Tu código de verificación es: ${codigoVerificacion}`
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error al enviar el correo electrónico de verificación:', error);
        throw error;
    }
};

// Función para generar y enviar un código de verificación
const generarYEnviarCodigoVerificacion = async (usuarioID, correoDestino) => {
    try {
        const codigoVerificacion = generarCodigoVerificacion();

        // Guarda el código de verificación en la base de datos
        await VerificacionCorreo.create({
            UsuarioID: usuarioID,
            Token: codigoVerificacion,
            FechaCreacion: new Date(),
            FechaExpiracion: new Date(Date.now() + 10 * 60000), // El código expira en 10 minutos
            EstadoToken: 'Pendiente',
            TipoToken: 'VerificacionCorreo'
        });

        // Envía el código de verificación por correo electrónico
        await enviarCorreoVerificacion(correoDestino, codigoVerificacion);

        return codigoVerificacion;
    } catch (error) {
        console.error('Error al generar y enviar el código de verificación:', error);
        throw error;
    }
};

// Función para verificar el código de verificación ingresado por el usuario
const verificarCodigoVerificacion = async (usuarioID, codigoVerificacion) => {
    try {
        // Busca el código de verificación en la base de datos
        const token = await VerificacionCorreo.findOne({
            where: {
                UsuarioID: usuarioID,
                Token: codigoVerificacion,
                EstadoToken: 'Pendiente',
                TipoToken: 'VerificacionCorreo',
                FechaExpiracion: { [Op.gt]: new Date() } // Verifica si el código aún no ha expirado
            }
        });

        if (token) {
            // Marca el token como utilizado
            await token.update({ EstadoToken: 'Utilizado' });

            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error al verificar el código de verificación:', error);
        throw error;
    }
};

module.exports = {
    generarYEnviarCodigoVerificacion,
    verificarCodigoVerificacion
};
