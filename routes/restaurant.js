var express = require('express')
var router = express.Router()
var Controller = require('../controllers/restaurant')

// All About Restaurants
router.get('/restaurants', Controller.getRestaurants)
router.get('/restaurant/:id', Controller.getRestaurant)
router.post('/restaurant', Controller.createRestaurant)
router.put('/restaurants/:id', Controller.updateRestaurant)
router.delete('restaurant/:id', Controller.removeRestaurant)

module.exports = router
