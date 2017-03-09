var express = require('express')
var router = express.Router()
var Controller = require('../controllers/restaurant')

// All About Restaurants
router.get('/all', Controller.getRestaurants)
router.get('/:id', Controller.getRestaurant)
router.post('/new', Controller.createRestaurant)
router.put('/:id', Controller.updateRestaurant)
router.delete('/:id', Controller.removeRestaurant)

module.exports = router
