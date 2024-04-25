// routes/usuarios.js
import express from 'express';
import * as usuarioController from '../controllers/usuarioController.js';
import * as arrendadorController from '../controllers/arrendadorController.js';
import * as estudianteController from '../controllers/estudianteController.js';
import * as administradorController from '../controllers/administradorController.js';

const router = express.Router();

// Rutas para crear y actualizar diferentes tipos de usuarios
router.post('/arrendador', arrendadorController.createArrendador);
router.put('/arrendador/:id', arrendadorController.updateArrendador);

router.post('/estudiante', estudianteController.createEstudiante);
router.put('/estudiante/:id', estudianteController.updateEstudiante);

router.post('/administrador', administradorController.createAdministrador);
router.put('/administrador/:id', administradorController.updateAdministrador);

// Otras rutas para manejar usuarios genéricos
router.get('/', usuarioController.getAll);
router.get('/:id', usuarioController.getById);
router.post('/', usuarioController.create);
router.put('/:id', usuarioController.update);
router.delete('/:id', usuarioController.delete);

export default router;
