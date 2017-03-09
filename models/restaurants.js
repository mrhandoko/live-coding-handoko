var mongoose = require('mongoose')

var restaurantSchema = mongoose.Schema({
  name: String,
  owner: String,
  address: String,
  open_status: Boolean
})

var Restaurant = mongoose.model('Restaurants', restaurantSchema)

module.exports = Restaurant
