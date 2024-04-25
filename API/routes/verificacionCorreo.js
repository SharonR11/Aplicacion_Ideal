// routes/verificacionCorreo.js
import express from 'express';
import verificacionCorreoController from '../controllers/verificacionCorreoController.js';

const router = express.Router();

// Rutas de verificación de correo
router.post('/enviar-correo', verificacionCorreoController.enviarCorreoVerificacion);
router.get('/confirmar/:token', verificacionCorreoController.confirmarVerificacion);

export default router;
