const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/home.controller')

router.get('/', HomeController.index)
router.get('/delete/:id?', HomeController.delete)
router.get('/create', HomeController.create)
router.post('/create', HomeController.saveCar)
router.get('/edit/:id?', HomeController.edit)
router.post('/edit/:id?', HomeController.saveEditCar)

module.exports = router