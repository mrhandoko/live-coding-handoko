var express = require('express')
var router = express.Router()
var Seeder = require('../seeders')
var Controller = require('../controllers')

/* GET home page. */
router.get('/seedrestaurants', Seeder.seedRestaurants)
router.get('/seedfoods', Seeder.seedFoods)

// All About Foods
router.get('/getfoods', Controller.getFoods)
router.get('/getfood', Controller.getFood)
router.post('/newfood', Controller.createFood)
router.put('/updatefood', Controller.updateFood)
router.delete('removefood', Controller.removeFood)

// All About Restaurants
router.get('/getrestaurants', Controller.getRestaurants)
router.get('/getrestaurant', Controller.getRestaurant)
router.post('/newrestaurant', Controller.createRestaurant)
router.put('/updaterestaurant', Controller.updateRestaurant)
router.delete('removerestaurant', Controller.removeRestaurant)

module.exports = router
