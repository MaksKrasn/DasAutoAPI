const express = require('express')
const router = express.Router()
const ApiController = require('../controllers/api.controller')

router.get('/', ApiController.getAll)
router.get('/:id', ApiController.getOne)
router.get('/delete/:id', ApiController.delete)
router.post('/create', ApiController.createCar)
router.post('/edit/:id', ApiController.saveEditCar)

module.exports = router