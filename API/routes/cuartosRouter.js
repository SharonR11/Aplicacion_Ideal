
const cuartoController = require('../controllers/cuartoController.js')
const router = require('express').Router()



router.post('/crear-cuarto', cuartoController.registrarCuarto);



module.exports = router