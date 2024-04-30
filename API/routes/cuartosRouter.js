
const cuartoController = require('../controllers/cuartoController.js')
const router = require('express').Router()

// Definir rutas para cuartos
// router.get('/', cuartoController.getAll);
// router.get('/:id', cuartoController.getById);


router.post('/crear-cuarto', cuartoController.registrarCuarto);


// router.put('/:id', cuartoController.update);
// router.delete('/:id', cuartoController.delete);

module.exports = router