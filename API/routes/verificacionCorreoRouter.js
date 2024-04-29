// routes/verificacionCorreo.js
const router = require('express').Router()
const verificacionController = require('../controllers/verificacionController.js');


// Rutas de verificación de correo
router.post('/enviar-codigo-verificacion', verificacionController.generarYEnviarCodigoVerificacion);
//outer.post('/verificar-codigo', verificacionController.verificarCodigoVerificacion);
router.post('/verificar-codigo', verificacionController.verificarCodigoVerificacion);


// router.post('/verificar-codigo', async (req, res) => {
//     console.log("Solicitud recibida para verificar código");
//     // Obtener el usuarioID y el código de verificación de la solicitud
//     const usuarioID = req.body.usuarioID;
//     let codigoVerificacion = req.body.codigoVerificacion;

//     // Convertir codigoVerificacion a cadena de texto si no lo es
//     if (typeof codigoVerificacion !== 'string') {
//         codigoVerificacion = codigoVerificacion.toString();
//     }

//     console.log("Usuario ID:", usuarioID);
//     console.log("Código de verificación:", codigoVerificacion);

//     // Resto del código para verificar el código de verificación
// });

module.exports = router
