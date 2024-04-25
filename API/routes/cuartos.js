// routes/cuartos.js
import express from 'express';
import cuartoController from '../controllers/cuartoController.js';

const router = express.Router();

// Definir rutas para cuartos
router.get('/', cuartoController.getAll);
router.get('/:id', cuartoController.getById);
router.post('/', cuartoController.create);
router.put('/:id', cuartoController.update);
router.delete('/:id', cuartoController.delete);

export default router;
