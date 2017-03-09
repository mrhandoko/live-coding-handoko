var mongoose = require('mongoose')

var foodSchema = mongoose.schema({
  name: String,
  price: Number,
  expired_date: Date
})

var Food = mongoose.model('Foods', foodSchema)

module.exports = Food
