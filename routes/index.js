var express = require('express')
var router = express.Router()
var Seeder = require('../seeders')

/* GET home page. */
router.get('/seedrestaurants', Seeder.seedRestaurants)
router.get('/seedfoods', Seeder.seedFoods)

module.exports = router
