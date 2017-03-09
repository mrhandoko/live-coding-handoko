var express = require('express')
var router = express.Router()
var Controller = require('../controllers')

// All About Restaurants
router.get('/getrestaurants', Controller.getRestaurants)
router.get('/getrestaurant/:id', Controller.getRestaurant)
router.post('/newrestaurant', Controller.createRestaurant)
router.put('/updaterestaurant/:id', Controller.updateRestaurant)
router.delete('removerestaurant/:id', Controller.removeRestaurant)

module.exports = router
