var express = require('express')
var router = express.Router()
var Controller = require('../controllers')

// All About Foods
router.get('/foods', Controller.getFoods)
router.get('/food/:name', Controller.getFood)
router.post('/food', Controller.createFood)
router.put('/food/:id', Controller.updateFood)
router.delete('food/:id', Controller.removeFood)

module.exports = router
