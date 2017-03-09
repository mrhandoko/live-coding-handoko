var express = require('express')
var router = express.Router()
var Controller = require('../controllers/food')

// All About Foods
router.get('/all', Controller.getFoods)
router.get('/:name', Controller.getFood)
router.post('/new', Controller.createFood)
router.put('/food/:id', Controller.updateFood)
router.delete('food/:id', Controller.removeFood)

module.exports = router
