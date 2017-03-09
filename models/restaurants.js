var mongoose = require('mongoose')

var restaurantSchema = mongoose.schema({
  name: String,
  owner: String,
  address: String,
  open_status: Boolean
})

var Restaurant = mongoose.model('Restaurants', foodSchema)

module.exports = Restaurant
