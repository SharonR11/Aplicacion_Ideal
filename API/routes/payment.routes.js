const router = require('express').Router()
const paymentController = require('../controllers/paymentController.js');


router.get('/crear-orden',paymentController.crearOrden)
router.get('/success',(req,res)=> res.send('success'))
router.get('/webhook',(req,res)=> res.send('webhook'))

module.exports = router