var faker = require('faker')
var Model = require('../models')

module.exports = {
  seedRestaurants: (req, res, next) => {
    let arrRestaurants = []
    for (var i = 0; i <= 10; i++) {
      arrRestaurants.push({
        name: faker.name.firstName(),
        owner: faker.name.findName(),
        address: faker.address.streetAddress(),
        open_status: true
      })
    }
  },
  seedFoods: (req, res, next) => {
    let arrFoods = []
    for (var i = 0; i <= 10; i++) {
      arrFoods.push({
        name: 'Sate Padang',
        price: 12000,
        expired_date: Date
      })
    }
  }
}
