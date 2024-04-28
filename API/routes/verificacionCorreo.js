// routes/verificacionCorreo.js
const express = require('express');
const router = express.Router();
const verificacionController = require('../controllers/verificacionController');


// Rutas de verificación de correo
router.post('/enviar-codigo-verificacion', verificacionController.enviarCodigoVerificacion);
router.post('/verificar-codigo', verificacionController.verificarCodigo);
export default router;
